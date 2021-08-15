import React, {useState} from 'react';
import Card from "./Card";
import sampleData from "../sampleData";
import Header from "./Header";

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

  return (
    <div className="App">
      <Header/>
      {viewCards}
    </div>
  );
}

export default Top;
