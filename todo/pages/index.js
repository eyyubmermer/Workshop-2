import { todoAddress } from "../config"
import useConnection from "../hooks/useConnection";
import useContract from "../hooks/useContract"
import todojson from "../metadata/todo.json";
import { useState, useEffect } from "react"


export default function Home() {


  const connection = useConnection();
  const contract = useContract(todoAddress, todojson.abi);

  const [taskName, setTaskName] = useState("");

  //tasklarımızı tuttuğumuz state
  const [tasks, setTasks] = useState([]);

  const addTask = async () => {

    //taskName state'inde tuttuğumuz değişkeni addTask fonksiyonuna input olarak veriyoruz. 
    const txn = await contract.addTask(taskName);
    await txn.wait();
    listTasks();
  }

  const updateName = async (i) => {
    //updateTaskContent fonksiyonu 2 parametre alıyor. 1.'si index 2.'si taskın adı.
    //index parametresi fonksiyonun dışından geliyor. i
    //task adı parametresini ise taskName stateinden alıyoruz.
    const txn = await contract.updateTaskContent(i, taskName);
    await txn.wait();
    listTasks();
  }

  const updateStatus = async (i) => {
    //updateTaskStatus fonksiyonu 1 parametre alıyor. index parametresini fonksiyon dışından alıp updateTaskStatus fonksiyonuna input olarak veriyoruz.
    const txn = await contract.updateTaskStatus(i);
    await txn.wait();
    listTasks();
  }

  const removeTask = async (i) => {
    const txn = await contract.removeTask(i);
    await txn.wait();
    listTasks();
  }

  const listTasks = async () => {

    //kontrattan dönen değeri data değişkeninde tutuyoruz.
    //kontrattan bir array dönüyor.
    const data = await contract.list();
    //
    const items = await Promise.all(data.map(async i => {
      //döngünün her bir adımında bir nesne oluşturuyoruz.
      let item = {
        taskName: i.content,
        status: i.isCompleted
      }
      return item
    }))
    //döngü sonucunda dolan items arrayini tasks state'imize koyuyoruz.
    setTasks(items);
    console.log(items);
  }



  useEffect(() => {
    connection.connect();
    //her renderda cüzdanın bağlı olup olmadığının kontrolünü yaptıktan sonra listTasks() fonksiyonu çağırıyoruz 
    if (connection.address) {
      listTasks();
    }
  }, [connection.address])

  return (
    <>
      {/* eğer cüzdan bağlı ise ekranda cüzdan adresini göster */}
      {connection.address && (
        <div>
          {connection.address}
        </div>
      )}
      {/* inputa girilen değer taskName stateini setliyor */}
      <input onChange={(e) => setTaskName(e.target.value)} />
      <button onClick={addTask} >Add</button>
      {/* tasks arrayi boş olduğunda maplenmeye çalışılırsa hata ile karşılaşılır. ? ile "tasks arrayi dolu ise mapla boş ise maplama" demiş oluyoruz */}
      {tasks?.map((task, i) => (
        <div key={i}>
          <h1>{task.taskName}
            {task.status.toString()}</h1>
          <button onClick={() => updateName(i)}>UpdateName</button>
          <button onClick={() => updateStatus(i)}>UpdateStatus</button>
          <button onClick={() => removeTask(i)}>X</button>
        </div>
      ))
      }

    </>
  )
}
