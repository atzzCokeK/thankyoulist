import React from 'react';
import './App.css';
import Card from "./components/Card";
import sampleDate from "./sampleData";
import sampleData from "./sampleData";

function App() {
  const cards =
    sampleData.map((data) => <Card createdAt={data.createdAt} content={data.content}/> )
  return (
    <div className="App">
      {cards}
    </div>
  );
}

export default App;
