'use client'
import React, { useState } from "react"
import './globals.css'

export default function Home() {

  //input variable for task string
  const [inputTask, setInputTask] = useState<string>("");
  const [taskList, setList] = useState<Array<{key: number, task: string}>>([]);

  function addTask () {
    setList((taskList) => [...taskList, {key: Math.random(),task: inputTask}])
  };

  function deleteTask (key: number) {
    const updatedList = taskList.filter((task) => task.key !== key);
    setList(updatedList);
  }

  console.log(taskList);

  // Below is the display componenet of the page
  return (
    <main>
      <div>
        <h1>Today&apos;s TODO List</h1>
        <div className="inputDiv">
          <input type="text" placeholder="Please enter a new task:" onChange={(e) => setInputTask(e.target.value)}></input>
          <button className="addButton" onClick={() => addTask()}>ADD</button>
        </div>
        <ul>
          { taskList.map((task) => (
            <li className="task" key={task.key}>
              <button className="deleteButton" onClick={() => deleteTask(task.key)}>done</button>
              {task.task}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
