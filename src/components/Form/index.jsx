import { v4 } from 'uuid';
import BtnForm from '../BtnForm';
import TaskInput from '../TaskInput';
import styles from './Form.module.css';

export default function Form({taskInputRef=null, taskInputValue="", setInputValue=null, taskInputEffortValue="", setInputEffortValue=null, taskInputUrgencyValue="", setInputUrgencyValue=null, setTaskList=null, taskList=[]}) {
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
            <form onSubmit={(ev) => {
                ev.preventDefault();
                const newTask = createNewTask();
                resetAllFields();
                setTaskList([...taskList, newTask]);
            }}>
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
                    text='Limpar campo'
                    resetAllFields={resetAllFields}
                 />
            </form>
        </>
    )
}