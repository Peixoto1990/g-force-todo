import styles from './ErrorModal.module.css';
import { useRef, useEffect, useState } from 'react';

export default function ErrorModal({setIsvalidTask=null, message="Erro, tente novamente."}) {
    const refErrorModal = useRef(null);
    let [clicked, setClicked] = useState(null);

    useEffect(() => {
        if (clicked !== null) {
            const timer = setTimeout(function () {
                setIsvalidTask(true);
                refErrorModal.current.classList.remove(styles.errorDisplayOff);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [clicked])

    return (
        <section title='ErrorModal' ref={refErrorModal} className={styles.errorModal}>
            <p>{message}</p>
            <button
                onClick={() => {
                    refErrorModal.current.classList.add(styles.errorDisplayOff);
                    setClicked(prev => prev ? false : true);
                }}
            >
                Entendi
            </button>
        </section>
    )
}