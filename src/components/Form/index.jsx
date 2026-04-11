import { v4 } from 'uuid';
import BtnForm from '../BtnForm';
import TaskInput from '../TaskInput';
import styles from './Form.module.css';
import { useContext } from 'react';
import { FormContext } from '../../contexts/formContext';

export default function Form({ setTaskList=() => "Criar tarefa", taskList=[], setIsValidTask=() => "É tarefa valida?", setErrorMessage=() => "Nova mensagem de erro", title="Formulário de novas tarefas"}) {
    const {taskInputRef, userTask, setUserTask, inputEffort, setInputEffort, inputUrgency, setInputUrgency} = useContext(FormContext);

    function validNewTask() {
        if (+inputEffort > 0 && +inputUrgency > 0 && userTask.match(/\w/)) {
            setIsValidTask(true);
            return true;
        } else {
            setErrorMessage("Dados de tarefa inválidos.")
            setIsValidTask(false);
            return false;
        }
    }

    function createNewTask() {
        const newTask = {
            id: v4(),
            task: userTask,
            effort: inputEffort,
            urgency: inputUrgency,
            done: false
        }   
        
        return newTask;
    }

    function resetAllFields() {
        setUserTask("");
        setInputEffort("");
        setInputUrgency("");
        taskInputRef.current.focus();
    }
    return (
        <>
            <form onSubmit={(ev) => {
                ev.preventDefault();
                const validTask = validNewTask();
                if (validTask) {
                    const newTask = createNewTask();
                    setTaskList([...taskList, newTask]);
                    resetAllFields();
                }
            }}
                className={styles.form}
                title={title}
            >
                <fieldset>
                    <TaskInput
                        ref={taskInputRef}
                        value={userTask}
                        setValue={setUserTask}
                        id='newTaskInput'
                     />
                    <TaskInput 
                        value={inputEffort}
                        setValue={setInputEffort}
                        type='number'
                        id='effortInput'
                        label='Nível de esforço'
                        placeholder='0 - 10'
                    />
                    <TaskInput 
                        value={inputUrgency}
                        setValue={setInputUrgency}
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