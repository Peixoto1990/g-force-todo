import TaskCard from '../TaskCard';
import styles from './TaskList.module.css';

export default function TaskList({taskList=[]}) {
    function calcTaskGravity(effort, urgency) {
        return Math.round(Number(effort) * Number(urgency) / 2);
    }
    return (
        <ul>
            {
                [...taskList].sort((t1, t2) => calcTaskGravity(t2.effort, t2.urgency) - calcTaskGravity(t1.effort, t1.urgency)).map((task) => <TaskCard key={task.id} task={task}/>)
            }
        </ul>
    ) 
}