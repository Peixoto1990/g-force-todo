import styles from './TaskCard.module.css';

export default function TaskCard({task}) {
    return (
        <li id={task.id}>
            {task.task}
        </li>
    )
}