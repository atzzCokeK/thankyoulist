import React, {useState} from 'react';
import './App.css';
import Card from "./components/Card";
import sampleData from "./sampleData";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Top from "./components/Top";
import {fbdb, firebaseApp} from "./Firebase";

function App() {
  const [thankYous,setThankYous] = useState(sampleData)

  const handleDeleted = (id:number) => {
    //配列から該当のidのthank youを削除
    const nextThankYous = thankYous.filter((thankYou) => thankYou.id !== id )
    setThankYous(nextThankYous)
  }

  const viewCards =
    thankYous.map((data) => <Card id={data.id}createdAt={data.createdAt} content={data.content} onDeleted={handleDeleted} /> )


  return (
    <Router>
      <Switch>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/top"} component={Top}/>
      </Switch>

    </Router>
  );
}

export default App;
