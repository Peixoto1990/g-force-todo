import styles from './Dashboard.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Dashboard({showForm=false, setShowForm=() => "Modifico a abertura do formulário"}) {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <section title='painel de controle' className={styles.dashboard}>
            <div title='logo' className={styles.logo}>🌀</div>
            <button
                title='botão exibir/ocultar formulário'
                onClick={() => setShowForm(prev => !prev)} className={styles.buttonNewTask}>{showForm ? "-" : "+"}
                </button>
            <div className={styles.cornerButtonsContainer}>
                <button onClick={() => {
                    if (theme === 'space') {
                        setTheme('light')
                    } else {
                        setTheme('space')
                    }
                }} className={styles.cornerButtons}>Tema: {theme}</button>
                <button className={styles.cornerButtons}>🌀</button>
                <button className={styles.cornerButtons}>🌀</button>
            </div>
        </section>
    )
}