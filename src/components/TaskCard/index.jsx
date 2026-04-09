import styles from './TaskCard.module.css';
import solarSystem from '../../constants/solarSystem.js';

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
        <li className={styles.card} title={`Tarefa: ${task.task}`} id={task.id} onClick={() => excludeTask(task.id)}>
            {task.task}
            {astro && <>
                <h4 title={astro.name}>{astro.icon}</h4>
            </>}
        </li>
    )
}