import { useState } from 'react';
import { v4 } from 'uuid';
import BtnForm from '../BtnForm';
import TaskInput from '../TaskInput';
import styles from './Form.module.css';
import TaskError from '../TaskError';

export default function Form({taskInputRef=null, taskInputValue="", setInputValue=null, taskInputEffortValue="", setInputEffortValue=null, taskInputUrgencyValue="", setInputUrgencyValue=null, setTaskList=null, taskList=[]}) {
    let [isValidTask, setIsValidTask] = useState(true);
    let validTask = false;

    function validNewTask() {
        if (+taskInputEffortValue > 0 && +taskInputUrgencyValue > 0) {
            setIsValidTask(true);
            validTask = true;
        } else {
            setIsValidTask(false);
            validTask = false;
        }
    }

    function createNewTask() {
        const newTask = {
            id: v4(),
            task: taskInputValue,
            effort: taskInputEffortValue,
            urgency: taskInputUrgencyValue
        }   
        
        return newTask;
    }

    function resetAllFields() {
        setInputValue("");
        setInputEffortValue("");
        setInputUrgencyValue("");
        taskInputRef.current.focus();
    }
    return (
        <>
           {!isValidTask && <TaskError setIsvalidTask={setIsValidTask}/>}
            <form onSubmit={(ev) => {
                ev.preventDefault();
                validNewTask();
                if (validTask) {
                    const newTask = createNewTask();
                    setTaskList([...taskList, newTask]);
                    resetAllFields();
                }
            }}
                className={styles.form}
            >
                <fieldset>
                    <TaskInput
                        ref={taskInputRef}
                        value={taskInputValue}
                        setValue={setInputValue}
                        id='newTaskInput'
                     />
                    <TaskInput 
                        value={taskInputEffortValue}
                        setValue={setInputEffortValue}
                        type='number'
                        id='effortInput'
                        label='Nível de esforço'
                        placeholder='0 - 10'
                    />
                    <TaskInput 
                        value={taskInputUrgencyValue}
                        setValue={setInputUrgencyValue}
                        type='number'
                        id='urgencyInput'
                        label='Nível de urgência'
                        placeholder='0 - 10'
                    />
                </fieldset>
                <BtnForm />
                <BtnForm
                    type='reset'
                    text='Limpar campos'
                    resetAllFields={resetAllFields}
                 />
            </form>
        </>
    )
}