import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./UI/Navbar";
import TodoForm from "./UI/TodoForm";

function App(){

  return (
      <div>
        <Navbar />
        <TodoForm />
      </div>
  );
}

export default App;
