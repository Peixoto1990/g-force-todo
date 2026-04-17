import styles from './App.module.css';
import FormProvider from './contexts/FormProvider';
import { useState, useContext } from 'react';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';
import ErrorModal from './components/ErrorModal';
import Filter from './components/Filter';
import { MetaContext } from './contexts/MetaContext';

export default function App() {
  const [taskList, setTaskList] = useLocalStorage("gForceTodo", []); 
  const [isValidTask, setIsValidTask] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { metaData } = useContext(MetaContext);
  
  return (
    <div className={metaData.theme} style={{minHeight: "100vh", backgroundColor: "var(--bg-page)"}}>
      <div title='gForce WebApp' data-theme={metaData.theme} className={styles.container}>
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
           {taskList.length > 0 && <><Filter />
            <TaskList
              taskList={taskList}
              setTaskList={setTaskList}
            /> </>
           }
        </div>
      </div>
    </div>
  )
}
