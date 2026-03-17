import styles from './Dashboard.module.css';

export default function Dashboard({showForm=null, setShowForm=null}) {
    return (
        <section className={styles.dashboard}>
            <div title='logo' className={styles.logo}>🌀</div>
            <button
                onClick={() => setShowForm(prev => !prev)} className={styles.buttonNewTask}>{showForm ? "-" : "+"}
                </button>
            <div className={styles.cornerButtonsContainer}>
                <button className={styles.cornerButtons}>🌀</button>
                <button className={styles.cornerButtons}>🌀</button>
                <button className={styles.cornerButtons}>🌀</button>
            </div>
        </section>
    )
}