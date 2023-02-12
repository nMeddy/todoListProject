import React from "react";
import styled from "styled-components";

//......Style about card-component ...........
const CardContainer = styled.div`
  width: 270px;
  height: 200px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #FFF;
`;
const CardTop = styled.div`
  padding: 0.5vh;
  background-color: chartreuse;
`;
const TaskHolder = styled.div`
  width: 100%;
  height: 90%;
  padding: 10px 10px;
  display; flex;
  flex-direction: column;
  position: relative;
`;
const CardHeader = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 80px;
  height: 30px;
  text-align: center;
  padding: 1px 1px !important;
  background-color: #E9EEF6;
`;
const CardBottom = styled.div`
   display:flex;
   justify-content: End;
`;
const CardIcon = styled.i`
  color: #5dc250;
  margin: 2vh;
`;

const Card = ({ taskObj, index }) => {
  return (
    <CardContainer className="shadow m-4">
      <CardTop />
      <TaskHolder>
        <CardHeader>{taskObj.Name}</CardHeader>
        <p>{taskObj.Description}</p>
      </TaskHolder>
      <CardBottom>
        <CardIcon className="far fa-edit"></CardIcon>
        <CardIcon className="far fa-trash-alt"></CardIcon>
      </CardBottom>
    </CardContainer>
  );
};

export default Card;
