import React, { useState, useEffect } from "react";
import ScheduleCard from "./ScheduleCard/component";
import styled from "@emotion/styled";
//npm install --save @emotion/core

const ScheduleEngine = ({ timeLength }) => {
  //variable schedule is an object that consists of timelength and url.
  //url left blank when not generated
  const [scheduling, setUrl] = useState({
    timeLength: timeLength,
    url: null,
  });

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const getUrl = async (q) => {
    const tempId = "meetingground.com/" + makeid(16);
    setUrl({
      url: tempId,
    });
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    getUrl();
  };

  const ScheduleEnginePack = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
    text-align: center;
  `;

  const inputUrl = styled.input`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
  `;

  return (
    <ScheduleEnginePack>
      <ScheduleCard timeLength={timeLength} />
      <form>
        <input id="random_url" value={scheduling.url} />
        <button onClick={(e) => handleGenerate(e)}>Generate Link</button>
      </form>
    </ScheduleEnginePack>
  );
};

export default ScheduleEngine;
