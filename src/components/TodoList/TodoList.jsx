import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import CreateTaskModal from "../Modal/CreateTaskModal";

//........Custome this page...............
const HeaderTodoList = styled.div`
  height: 35vh;
  width: 100%;
  background-color: ${colors.backgroundLight};
`;

const BoxTaskList = styled.li`
  height: 20vh;
  width: 20vh;
  list-style: none;
  cursor: pointer;
  border-radius: 1rem;
  :& hover{
    background-colors: ${colors.backgroundLight};
    
}
`;
const BoxTask = styled.li`
    display: flex;
    justify-content: center;
`;
//.....JSX code...........................
function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false);
  };

  return (
    <>
      <HeaderTodoList className="text-center p-5">
        <h3 className="p-3">Liste des Tâches</h3>
        <button
          className="btn btn-primary shadow"
          onClick={() => setModal(true)}
        >
          Ajouter une tâche
        </button>
      </HeaderTodoList>
      <BoxTask className="container text-center">
        {taskList.map((obj) => (
          <BoxTaskList className="shadow m-3">{obj.Name}</BoxTaskList>
        ))}
      </BoxTask>
      <CreateTaskModal toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
}

export default TodoList;
