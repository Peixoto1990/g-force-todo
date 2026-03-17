import styles from './TaskInput.module.css';

export default function TaskInput({required=true, placeholder="New Task", ref=null, value="", setValue=null, id="", label="Nova tarefa", type="text"}) {
    return (
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <input
                className={styles[`${type}Input`]} 
                id={id}
                type={type}
                required={required}
                placeholder={placeholder}
                ref={ref}
                value={value}
                onChange={(ev) => {
                    setValue(ev.target.value);
                }}
             />
        </div>
    )
}