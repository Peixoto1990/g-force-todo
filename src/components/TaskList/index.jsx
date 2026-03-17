import TaskCard from '../TaskCard';
import styles from './TaskList.module.css';

export default function TaskList({taskList=[], setTaskList=null}) {
    function calcTaskGravity(effort, urgency) {
        return Number(Math.round((Number(effort) + Number(urgency)) / 2 * 2.8).toFixed(2));
    }
    return (
        <ul className={styles.list}>
            {
                [...taskList].sort((t1, t2) => calcTaskGravity(t2.effort, t2.urgency) - calcTaskGravity(t1.effort, t1.urgency)).map((task) => <TaskCard calcGravity={calcTaskGravity} setTaskList={setTaskList} taskList={taskList} key={task.id} task={task}/>)
            }
        </ul>
    ) 
}