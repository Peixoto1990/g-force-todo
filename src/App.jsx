import styles from './App.module.css';
import { useRef, useState } from 'react';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';
import ErrorModal from './components/ErrorModal';

export default function App() {
  const [taskList, setTaskList] = useLocalStorage("gForceTodo", []); 
  const taskInputRef = useRef(null);
  const [userTask, setUserTask] = useState("");
  const [inputEffort, setInputEffort] = useState("");
  const [inputUrgency, setInputUrgency] = useState("");
  let [isValidTask, setIsValidTask] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");
  let [showForm, setShowForm] = useState(false);
  
  return (
    <div className={styles.app}>
      {!isValidTask && <ErrorModal setIsvalidTask={setIsValidTask} message={errorMessage}/>}
      <div className={styles.container}>
        <Dashboard showForm={showForm} setShowForm={setShowForm}/>
        {showForm && <Form
          setErrorMessage={setErrorMessage}
          setIsValidTask={setIsValidTask}
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
