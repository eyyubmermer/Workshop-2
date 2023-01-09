import useConnection from "../hooks/useConnection";
import useContract from "../hooks/useContract";
import { counterAddress } from "../config";
import counterjson from "../metadata/counter.json";
import { useEffect, useState } from "react";



export default function Home() {

  const [number, setNumber] = useState(0); //sayı değerimizi tuttuğumuz state


  const connection = useConnection(); //connection hookumuzu bir değişkende yakaldık
  const contract = useContract(counterAddress, counterjson.abi);  //kontrat nesnemizi oluşturmak için kontrat adresi ve kontrat abi parametrelerini verdik.

  const increase = async () => {
    //kontrat nesnesi içerisindeki increase fonksiyonunu çağırıyoruz.
    const txn = await contract.increase();
    await txn.wait(); //işlemin bitişini bekliyoruz
    viewNumber(); //işlem bittikten sonra tekrardan viewNumber fonksiyonunu çalıştıyoruz bu sayede ekrandaki sayı değeri otomatik güncelleniyor.
  }

  const decrease = async () => {
    //sayı değerini bir azaltmak için kontrat içindeki decrease metodunu çağırıyoruz 
    const txn = await contract.decrease();
    await txn.wait();
    viewNumber();
  }

  const reset = async () => {
    //sayı değerini resetlemek için kontrat içindeki reset metodunu çağırıyoruz 
    const txn = await contract.reset();
    await txn.wait();
    viewNumber();
  }

  const viewNumber = async () => {
    //contrattan çağırdığımız viewValue fonksiyonundan dönen değeri number değişkeninde tutuyoruz.
    const number = await contract.viewValue();
    //kontrattan dönen değer hexadecimal formatta dönüyor. toNumber metodu ile integera çeviriyoruz. 
    setNumber(number.toNumber())
    //kontrattan dönen değeri number state'imizde saklıyoruz.
  }



  useEffect(() => {
    connection.connect();
    //her renderda viewNumber fonksiyonunu çalıştırıyoruz.
    //cüzdan bağlı değilken fonksiyonun çalıştırılması halinde hata alınacağından öncesinde cüzdanın bağlı olup olmadığının kontrolünü yapmalıyız.
    //eğer düzdan bağlı ise viewNumber fonksiyonu çalıştırılır. 
    if (connection.address) {
      viewNumber();
    }
  }, [connection.address])



  return (
    <>
      <div>
        {/* eğer cüzdan bağlı ise cüzdan adresini ekranda göster. */}
        {connection.address &&
          <div>
            {connection.address}
          </div>
        }
        {/* her bir fonksiyon için bir button oluşturduk. Her birisi onClick olduklarında bir fonksiyon tetikliyorlar  */}
        <button onClick={increase} >Increase</button>
        <button onClick={decrease} >Decrease</button>
        <button onClick={reset} >Reset</button>

        <div>
          {number}
        </div>
      </div>
    </>
  )
}
