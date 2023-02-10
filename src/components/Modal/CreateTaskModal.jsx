import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";

//.......ModalCustomizer..................
const ModalCustome = styled(Modal)`
  font-family: Abel;
`;

//.......JSX code of this Page.............
function CreateTaskModal({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");

  const handleChange = (e) => {
    //const name = e.target.name;
    //const value = e.target.value;

    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescriptionTask(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = descriptionTask;
    save(taskObj);
  };

  return (
    <>
      <ModalCustome isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Créer une tâche</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group m-1">
              <label>Nom de la tâche</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                name="taskName"
                onChange={handleChange}
              />
            </div>
            <div className="form-group m-1">
              <label>Description de la tâche</label>
              <textarea
                rows="5"
                className="form-control"
                value={descriptionTask}
                name="descriptionTask"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Créer
          </Button>
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </ModalCustome>
    </>
  );
}

export default CreateTaskModal;
