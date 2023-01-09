import { bankAddress } from "../config"
import useConnection from "../hooks/useConnection";
import useContract from "../hooks/useContract"
import bankjson from "../metadata/bank.json";
import { useState, useEffect } from "react"



export default function Home() {

  //deposit, transfer veya withdraw edilmek istenen tutar
  const [amount, setAmount] = useState(0);

  //kullanıcı bakiyesini tutan state
  const [balance, setBalance] = useState(0);

  //transfer fonksiyonu çalıştırılacağı zaman ihtiyacımız olan alıcı adres değişkeninin tutacak state
  const [receiver, setReceiver] = useState("");

  const connection = useConnection();
  const contract = useContract(bankAddress, bankjson.abi)


  const deposit = async () => {
    //kontrattaki payable fonksiyonları tetiklerken ataçlanacak coin miktarı süslü parantes içinde value keywordü ile verilir. 
    const txn = await contract.deposit({ value: amount });
    await txn.wait();
    viewUserBalance();
  }

  const withdraw = async () => {
    const txn = await contract.withdraw(amount);
    await txn.wait();
    viewUserBalance();
  }

  const transfer = async () => {
    //input boxlar vasıtasıyla kullanıcıdan alınan alıcı adres ve tutar değişkenlerini kontratımızın transfer fonskiyonuna ver. 
    const txn = await contract.transfer(receiver, amount);
    await txn.wait();
    viewUserBalance();
  }


  const viewUserBalance = async () => {
    //fonksiyona parametre olarak verilen adresin bakiyesini yakala
    const data = await contract.viewBalance(connection.address);
    //hexadecimal formatta dönen değeri integera çevirerek state'e at
    setBalance(data.toNumber());
  }


  useEffect(() => {
    connection.connect();
    //her renderda cüzdanın bağlı olduğunun kontrolünü yaptıktan sonra viewUserBalance fonksiyonunu çalıştır
    if (connection.address) {
      viewUserBalance();
    }
  }, [connection.address])


  return (
    <>
      <div>
        {/* cüzdan bağlı ise bağlı olan adresi ekranda göster */}
        {connection.address && <div>
          {connection.address}
        </div>}
        <div>
          {/* kullanıcı bakiyesini ekrana ver */}
          Balance: {balance}
        </div>

        <input type={"number"} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={deposit} >Deposit</button>
        <button onClick={withdraw} >Withdraw</button>
        <br />
        <input onChange={(e) => setReceiver(e.target.value)} />
        <button onClick={transfer} >Transfer</button>
      </div>





    </>
  )
}
