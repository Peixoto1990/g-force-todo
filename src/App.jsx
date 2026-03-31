import styles from './App.module.css';
import { FormProvider } from './contexts/formContext';
import { useState } from 'react';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';
import ErrorModal from './components/ErrorModal';

export default function App() {
  const [taskList, setTaskList] = useLocalStorage("gForceTodo", []); 
  let [isValidTask, setIsValidTask] = useState(true);
  let [errorMessage, setErrorMessage] = useState("");
  let [showForm, setShowForm] = useState(false);
  
  return (
    <div className={styles.app}>
      {!isValidTask && <ErrorModal setIsvalidTask={setIsValidTask} message={errorMessage}/>}
      <div className={styles.container}>
        <Dashboard showForm={showForm} setShowForm={setShowForm}/>
        {showForm && <FormProvider>
          <Form
            setErrorMessage={setErrorMessage}
            setIsValidTask={setIsValidTask}
            taskList={taskList}
            setTaskList={setTaskList}
           />
        </FormProvider>}
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
