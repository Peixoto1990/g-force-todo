import styles from './App.module.css';
import { useRef, useState } from 'react';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';

export default function App() {
  const [taskList, setTaskList] = useLocalStorage("gForceTodo", []); 
  const taskInputRef = useRef(null);
  const [userTask, setUserTask] = useState("");
  const [inputEffort, setInputEffort] = useState("");
  const [inputUrgency, setInputUrgency] = useState("");
  let [showForm, setShowForm] = useState(false);
  
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Dashboard showForm={showForm} setShowForm={setShowForm}/>
        {showForm && <Form
          taskInputRef={taskInputRef}
          taskInputValue={userTask}
          setInputValue={setUserTask}
          taskInputEffortValue={inputEffort}
          setInputEffortValue={setInputEffort}
          taskInputUrgencyValue={inputUrgency}
          setInputUrgencyValue={setInputUrgency}
          taskList={taskList}
          setTaskList={setTaskList}
         />}
         {taskList.length > 0 &&
          <TaskList
            taskList={taskList}
            setTaskList={setTaskList}
          />
         }
      </div>
    </div>
  )
}
