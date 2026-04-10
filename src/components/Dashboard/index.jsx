import styles from './Dashboard.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { RocketIcon, LightIcon, Logo, Config, UI } from '../Icons';

export default function Dashboard({setShowForm=() => "Modifico a abertura do formulário"}) {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <section title='painel de controle' className={styles.dashboard}>
            <div title='logo' className={styles.logo}>
                <span>g</span><h2>Force</h2>
                <div className={styles.logoContainer}>
                    <Logo />
                </div>
            </div>
            <button
                title='botão exibir/ocultar formulário'
                onClick={() => setShowForm(prev => !prev)} className={styles.buttonNewTask}></button>
            <div className={styles.cornerButtonsContainer}>
                <button
                 onClick={() => {
                        if (theme === 'space') {
                            setTheme('light')
                        } else {
                            setTheme('space')
                        }
                    }} 
                 className={styles.cornerButtons}
                 title={`Tema: ${theme}`}
                >
                    {theme === "space" ? <RocketIcon size='24'/> : <LightIcon size='24'/>}
                </button>
                <button className={styles.cornerButtons}>
                    <UI />
                </button>
                <button className={styles.cornerButtons}>
                    <Config />
                </button>
            </div>
        </section>
    )
}