import TaskCard from '../TaskCard';
import { calcTaskGravity } from '../../utils/calcTaskGravity';
import styles from './TaskList.module.css';

export default function TaskList({taskList=[], setTaskList=() => "Modifico a lista de tarefas", title="Lista de tarefas"}) {
    return (
        <ul title={title} className={styles.list}>
            {
                [...taskList].sort((t1, t2) => calcTaskGravity(t2.effort, t2.urgency) - calcTaskGravity(t1.effort, t1.urgency)).map((task) => <TaskCard calcGravity={calcTaskGravity} setTaskList={setTaskList} taskList={taskList} key={task.id} task={task}/>)
            }
        </ul>
    ) 
}