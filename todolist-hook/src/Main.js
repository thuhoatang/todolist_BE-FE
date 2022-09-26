import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";

const Main = () => {
  const [listtodo, setListtodo] = useState([]);
  const [term, setTerm] = useState("");
  const [ID, setID] = useState(null);
  const [status, setStatus] = useState("CREATE");


  useEffect(() => {
    axios.get('http://localhost:3001/tasks', {

    }).then(function (response) {
      console.log(response.data);
      setListtodo(response.data)
    })
  }, []);

  
  const addTodo = async (term) => {
    let result = await  axios.post('http://localhost:3001/tasks', {
      title: term
    })
      let listdotonew = listtodo;
      listdotonew.push(result.data);  
      setListtodo(listdotonew);   
    // console.log(listtodo);
  };

  const delItem = async (id) => {
    axios.delete('http://localhost:3001/tasks/' + id, {
    
    }).then(function (response) {
      let listdotonew = listtodo;
      listdotonew = listdotonew.filter((item) => item._id != id);
      setListtodo(listdotonew);
    })
    
  };

  const editItem = (id) => {
    console.log(id);
    setStatus("EDIT");
    setID(id);
    let tilteOld = listtodo.find(item => item._id == id);
    setTerm(tilteOld.title);
  };

  const update = (id) => {
    axios.patch(('http://localhost:3001/tasks/'+id), {
      title: term
    })
    .then(function (response) {
      setStatus("CREATE");
      let listdotonew = listtodo;
      let arrUpdate = listdotonew.map((item) => {
        return item._id != id ? item : response.data;
      });
      setListtodo(arrUpdate);
    })
    .catch(function (err) {
      console.log(err);
    })
    //    console.log(id);
  };

  const setNewterm = (newterm) => {
    setTerm(newterm);
  };
console.log("render cpppn");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App
            listtodo={listtodo}
            term={term}
            setTerm={setTerm}
            addTodo={addTodo}
            setNewterm={setNewterm}
            ID={ID}
            delItem={delItem}
            status={status}
            editItem={editItem}
            update={update}
          />
        }
      />

      <Route path="/detail/:id" element={<Detail listtodo={listtodo}/>} />
    </Routes>
  );
};

export default Main;
