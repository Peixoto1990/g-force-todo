import styles from './BtnForm.module.css';

export default function BtnForm({type="submit", text="Criar tarefa", resetAllFields=function(){return "Sou um botão reset"}}) {
    const wbc = false;
    return (
        <div className={styles.btnFormContainer}>
            <button
                className={`${styles.btnForm} ${wbc ? styles.teste1 : styles.teste2}`}
                onClick={(ev) => ev.currentTarget.type === "reset" ? resetAllFields() : null}    
                type={type} 
            >
                {text}
            </button>
        </div>
    )
}