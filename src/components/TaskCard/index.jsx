import styles from './TaskCard.module.css';
import { getAstro } from '../../utils/getAstro.js';
import { getGravityColor } from '../../utils/getGravityColor.js';

export default function TaskCard({task={task: "tarefaTeste", id: "1", effort: "5", urgency: "5"}, taskList=[], setTaskList=() => "Modifico a lista de tarefas", calcGravity=() => "5"}) {
    const cardGravity = calcGravity(task.effort, task.urgency);
    const astro = getAstro(cardGravity);

    function excludeTask(id) {
        setTaskList([...taskList].filter((task) => task.id !== id));
    }

    function completeTask(id) {
        setTaskList([...taskList].map((item) => {
            if (item.id === id) {
               return { ...item, done: !item.done }
            }
            return item;
        }))
    }

    return (
        <li
         className={styles.card}
         title={`Tarefa: ${task.task}`}
         id={task.id}
         style={{borderColor: getGravityColor(cardGravity), boxShadow: `0 0 5px ${getGravityColor(cardGravity)}`}}
        >
            <div className={styles.taskInfo}>
                <h3 style={task.done ? {textDecoration: "line-through double"} : null}>{task.task}</h3>
                <span>Esforço: {task.effort}</span>
                <span>Urgência: {task.urgency}</span>    
            </div>
            <div className={styles.taskMetrics}>
                <div>
                    {astro && <>
                        <h4 className={styles.astro} title={astro.name}>{astro.icon}</h4>
                    </>}
                    <div style={{filter: `drop-shadow(0 0 5px ${getGravityColor(cardGravity)})`}}>
                        <h3
                         className={styles.gravity}
                         style={{backgroundColor: getGravityColor(cardGravity)}}
                        >{astro.gravity}G</h3>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button style={task.done ? {color : "green"} : null} onClick={() => completeTask(task.id)} title='Concluir tarefa' className={styles.btnDone}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </button>
                    <button onClick={() => excludeTask(task.id)} title='Excluir tarefa' className={styles.btnDelete}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}