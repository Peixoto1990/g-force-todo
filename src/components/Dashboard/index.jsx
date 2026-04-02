import styles from './Dashboard.module.css';

export default function Dashboard({showForm=false, setShowForm=() => "Modifico a abertura do formulário"}) {
    return (
        <section title='painel de controle' className={styles.dashboard}>
            <div title='logo' className={styles.logo}>🌀</div>
            <button
                title='botão exibir/ocultar formulário'
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