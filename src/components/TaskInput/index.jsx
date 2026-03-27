import styles from './TaskInput.module.css';
import { validInputData } from '../../utils/validInputData';

export default function TaskInput({required=true, placeholder="New Task", ref=null, value="", setValue=null, id="", label="Nova tarefa", type="text"}) {
    function validData(ev) {
        let data = ev.target.value;
        const newValue = validInputData(data, type);
        newValue ? setValue(newValue) : setValue("");
    }
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
                    validData(ev);
                }}
             />
        </div>
    )
}