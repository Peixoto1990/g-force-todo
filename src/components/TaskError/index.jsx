import styles from './TaskError.module.css';
import { useRef, useEffect, useState } from 'react';

export default function TaskError({setIsvalidTask=null}) {
    const refTaskErrorModal = useRef(null);
    let [clicked, setClicked] = useState(null);

    useEffect(() => {
        if (clicked !== null) {
            const timer = setTimeout(function () {
                setIsvalidTask(true);
                refTaskErrorModal.current.classList.remove(styles.errorDisplayOff);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [clicked])

    return (
        <section ref={refTaskErrorModal} className={styles.taskErrorModal}>
            <p>Dados inválidos... tente novamente.</p>
            <button
                onClick={() => {
                    refTaskErrorModal.current.classList.add(styles.errorDisplayOff);
                    setClicked(prev => prev ? false : true);
                }}
            >
                Entendi
            </button>
        </section>
    )
}