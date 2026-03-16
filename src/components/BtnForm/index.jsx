import styles from './BtnForm.module.css';

export default function BtnForm({type="submit", text="Criar tarefa", resetAllFields=null}) {
    return (
        <div>
            <button
                onClick={(ev) => ev.target.type === "reset" ? resetAllFields() : removeEventListener("click", null)}    
                type={type} 
            >
                {text}
            </button>
        </div>
    )
}