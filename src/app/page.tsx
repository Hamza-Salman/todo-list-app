import React from "react"
import './globals.css'
import { getTasks } from './utils'
import DeleteButton from "./components/DeleteButton"
import AddForm from "./components/AddForm"

export default async function page() {

  const tasks = await getTasks()
  console.log(tasks)
  // const router = useRouter()

  // const deleteTask = async (task: Task) => {
  //   await fetch(`/api/todo/${task.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: task.id,
  //     }),
  //   });
  //   // router.refresh();
  // };

  // Below is the display componenet of the page
  return (
    <main>
      <h1>Tasks</h1>
      <AddForm/>
      <ul>
        {tasks.map(task => (
          <div key={task.id}>
            <li key={task.id}>{task.task}</li>
            <DeleteButton id={task.id}/>
          </div>
        ))}
      </ul>
    </main>
  )
}