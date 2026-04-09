import styles from './TaskCard.module.css';
import solarSystem from '../../constants/solarSystem.js';
import { getGravityColor } from '../../utils/getGravityColor.js';

export default function TaskCard({task={task: "tarefaTeste", id: "1", effort: "5", urgency: "5"}, taskList=[], setTaskList=() => "Modifico a lista de tarefas", calcGravity=() => "5"}) {
    const cardGravity = calcGravity(task.effort, task.urgency);
    function getAstro(g) {
        if (g <= 3.50) {
            return solarSystem.pluto;
        }
        if (g <= 4.20) {
            return solarSystem.moon;
        }
        if (g <= 5.00) {
            return solarSystem.europa;
        }
        if (g <= 5.80) {
            return solarSystem.ganymede;
        }
        if (g <= 6.80) {
            return solarSystem.mercury;
        }
        if (g <= 8.00) {
            return solarSystem.mars;
        }
        if (g <= 9.50) {
            return solarSystem.titan;
        }
        if (g <= 14.00) {
            return solarSystem.earth;
        }
        if (g <= 16.50) {
            return solarSystem.venus;
        }
        if (g <= 19.00) {
            return solarSystem.uranus;
        }
        if (g <= 22.00) {
            return solarSystem.neptune;
        }
        if (g <= 24.50) {
            return solarSystem.saturn;
        }
        if (g <= 26.50) {
            return solarSystem.jupiter;
        }
        if (g <= 28.00) {
            return solarSystem.sun;
        }
    }

    const astro = getAstro(cardGravity);

    function excludeTask(id) {
        setTaskList([...taskList].filter((task) => task.id !== id));
    }
    return (
        <li
         className={styles.card}
         title={`Tarefa: ${task.task}`}
         id={task.id}
         style={{borderColor: getGravityColor(cardGravity), boxShadow: `0 0 5px ${getGravityColor(cardGravity)}`}}
        >
            <div className={styles.taskInfo}>
                <h3>{task.task}</h3>
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
                        >{cardGravity}G</h3>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button title='Concluir tarefa' className={styles.btnDone}>
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