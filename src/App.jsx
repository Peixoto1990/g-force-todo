import styles from './App.module.css';
import FormProvider from './contexts/FormProvider';
import { useState, useContext } from 'react';
import Form from './components/Form';
import { useLocalStorage } from './hooks/useLocalStorage/useLocalStorage';
import TaskList from './components/TaskList';
import Dashboard from './components/Dashboard';
import ErrorModal from './components/ErrorModal';
import { ThemeContext } from './contexts/ThemeContext';
import Filter from './components/Filter';
import FilterProvider from './contexts/FilterProvider';

export default function App() {
  const [taskList, setTaskList] = useLocalStorage("gForceTodo", []); 
  const [isValidTask, setIsValidTask] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme} style={{minHeight: "100vh", backgroundColor: "var(--bg-page)"}}>
      <div title='gForce WebApp' data-theme={theme} className={styles.container}>
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
           {taskList.length > 0 && <FilterProvider> <Filter />
            <TaskList
              taskList={taskList}
              setTaskList={setTaskList}
            /> </FilterProvider>
           }
        </div>
      </div>
    </div>
  )
}
