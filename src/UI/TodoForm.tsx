import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Note from './img/notepad.png';
import { Todo } from './TypeIntefice';
import TodoList from './TodoList';

//Styled-Component
const Input = styled.input`
  margin: 30px auto;
  width: 60%;
  height: 50px;
  padding-left: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 1px 9px 2px rgba(34, 60, 80, 0.6), 0 1px 9px 2px rgba(34, 60, 80, 0.6) inset;
  font-size: 20px;
  font-size: 13px;
`;

const Main = styled.div`
  background: #fff;
`;
const ContainerI = styled.div`
  display: flex;
  justify-content: center;
`;
const ContainerT = styled(ContainerI)`
  background-image: url(${Note});
  background-size: cover;
  min-height: 800px;
  width: 63%;
  margin: 0 auto;
`;

//Props Interface
// interface TodoProps{
//     addTodo(task:string):void
// }
const TodoForm = () => {
  //UseState
  let [todos, setTodos] = useState<Todo[]>([]);
  let [input, setInputState] = useState<string>('');

  useEffect(() => {
    //Добавляем элементы из local
    const saved = JSON.parse(localStorage.getItem('todo') || '[]') as Todo[];
    setTodos(saved);
  }, []);

  // добавляет элементы в localStorage, грубо говоря действия выполняються
  //полсе рендеринга
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  //Функции реализующие изменения state, изменяет пол
  const editTodo = (id: number, task: string): void => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id && todo.chStatus) todo.value = task;
        return todo;
      }),
    );
  };

  const deleteTodo = (id: number): void => {
    let current_item: Todo | undefined = todos.find((t) => t.id === id);
    if (current_item?.chStatus === true) setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const editToogle = (id: number, check: boolean): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.chStatus = check;
        }
        return todo;
      }),
    );
  };
  const setInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputState(event.target.value);
  };

  const keyPressEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && input) {
      const newTodo: Todo = {
        value: input,
        id: Date.now(),
        chStatus: false,
      };
      //Берем в расчет предидущее состояния todo

      if (!todos.filter((t) => t.value === input).length) setTodos((prev) => [newTodo, ...prev]);
      setInputState('');
    }
  };

  //Отрисовка
  return (
    <Main>
      <ContainerI>
        <Input placeholder="Введите задачу..." value={input} onChange={setInput} onKeyPress={keyPressEnter} />
      </ContainerI>
      <ContainerT>
        <TodoList todo={todos} editTodo={editTodo} deleteTodo={deleteTodo} editToogle={editToogle} cur_input={input} />
      </ContainerT>
    </Main>
  );
};
export default TodoForm;
