import TaskCard from '../TaskCard';
import { calcTaskGravity } from '../../utils/calcTaskGravity';
import styles from './TaskList.module.css';
import { useContext } from 'react';
import { MetaContext } from '../../contexts/MetaContext';
import { getFilter } from '../../utils/getFilter';

export default function TaskList({taskList=[], setTaskList=() => "Modifico a lista de tarefas", title="Lista de tarefas"}) {
    const { metaData } = useContext(MetaContext);
    return (
        <ul title={title} className={styles.list}>
            {
                getFilter(metaData.lastFilter, metaData.onlyDone, taskList).map((task) => <TaskCard calcGravity={calcTaskGravity} setTaskList={setTaskList} taskList={taskList} key={task.id} task={task}/>)
            }
        </ul>
    ) 
}