import React, {  useEffect, useState } from "react";
import Axios from "axios";


const ShowTodos = () => {
  //Begin Here
  const [todos, setTodos] = useState([]); //creates a new state variable, todos
        
  useEffect( () => { 
      async function fetchData() {
          try {
              const res = await Axios.get('http://localhost:8080/get/items'); 
              setTodos(JSON.stringify(res.data)); //sets the variable to this json result
              console.log(JSON.stringify(res.data));
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  return <div>{todos}</div> //return the result in a div element to be rendered where the ShowTodos component gets rendered ig
}
export default ShowTodos;
