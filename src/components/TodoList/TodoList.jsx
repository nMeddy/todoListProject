import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import CreateTaskModal from "../Modal/CreateTaskModal";
import Card from "../Card/Card";

//........Custome this page...............
const HeaderTodoList = styled.div`
  height: 35vh;
  width: 100%;
  background-color: ${colors.backgroundLight};
`;
const BoxTask = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #F6F7F8;
`;
//.....JSX code...........................
function TodoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  //.......DataManagement.................
  useEffect(() => {
    const arr = localStorage.getItem("taskList");
    if (arr) {
      const obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(tempList);
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
      <BoxTask>
        {taskList.map((obj, index) => (
          <Card taskObj={obj} index={index} className="shadow m-3" />
        ))}
      </BoxTask>
      <CreateTaskModal toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
}

export default TodoList;
