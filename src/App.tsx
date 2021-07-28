import React from 'react';
import './App.css';
import Navbar from './UI/Navbar';
import TodoForm from './UI/TodoForm';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <TodoForm />
    </div>
  );
};

export default App;
