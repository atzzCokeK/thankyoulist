import React, {useState} from 'react';
import Card from "./Card";
import sampleData from "../sampleData";
import Header from "./Header";
import {fbdb, firebaseApp} from "../Firebase";
import firebase from "firebase";
import CryptoJS from "crypto-js"

// Topページ
const Top = () => {
  const [thankYous,setThankYous] = useState(sampleData)

  const handleDeleted = (id:number) => {
    //配列から該当のidのthank youを削除
    const nextThankYous = thankYous.filter((thankYou) => thankYou.id !== id )
    setThankYous(nextThankYous)
  }

  const viewCards =
    thankYous.map((data) => <Card id={data.id}createdAt={data.createdAt} content={data.content} onDeleted={handleDeleted} /> )

  const fetchCards = () =>{
    const me = (firebaseApp.auth().currentUser?.uid)
    const usersCollectionRef = fbdb.collection("users")
    const thankYous = usersCollectionRef.doc(me).collection("thankYouList")
    console.log("isAuth", firebaseApp.auth().currentUser?.uid)
    thankYous.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) =>{
        const passPhrase = firebaseApp.auth().currentUser?.uid
        if(passPhrase){
          const word = doc.data().encryptedValue
          const key = passPhrase.substring(0,16)
          var encryptedBase64 = CryptoJS.enc.Base64.parse(word)
          const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: encryptedBase64,
            iv: CryptoJS.enc.Utf8.parse(key),
            // mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
          })

          const plainText = CryptoJS.AES.decrypt(cipherParams, CryptoJS.enc.Utf8.parse(key), {mode: CryptoJS.mode.ECB});
          console.log(plainText)
          console.log("final", plainText.toString(CryptoJS.enc.Utf8))

        }
      })
    })
      .catch((e) => console.log("error",e))

  }


  fetchCards()

  return (
    <div className="App">
      <Header/>
      {viewCards}
    </div>
  );
}

export default Top;
