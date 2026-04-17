import styles from './Dashboard.module.css';
import { useContext } from 'react';
import { RocketIcon, LightIcon, Logo, Config, UI } from '../Icons';
import { MetaContext } from '../../contexts/MetaContext';

export default function Dashboard({setShowForm=() => "Modifico a abertura do formulário"}) {
    const { metaData, setMetaData } = useContext(MetaContext);
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
                        if (metaData.theme === 'space') {
                            setMetaData({...metaData, theme: "light"});
                        } else {
                            setMetaData({...metaData, theme: "space"});
                        }
                    }} 
                 className={styles.cornerButtons}
                 title={`Tema: ${metaData.theme}`}
                >
                    {metaData.theme === "space" ? <RocketIcon size='24'/> : <LightIcon size='24'/>}
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