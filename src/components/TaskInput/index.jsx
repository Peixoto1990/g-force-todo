import styles from './TaskInput.module.css';

export default function TaskInput({required=true, placeholder="New Task", ref=null, value="", setValue=null, id="", label="Nova tarefa", type="text"}) {
    function validData(ev) {
        let isValidData = false;
        let data = ev.target.value;
        if (type === "text") {
            data = data.replace(/\s{2,}/g, " ")
            isValidData = data.match(/\w/) ? true : false;
            if (isValidData) {
                setValue(data);
            } else {
                setValue("");
            }
        } else if (type === "number") {
            isValidData = +data ? true : data === "0" ? true : false;
            if (isValidData && +data > 0 && +data < 11) {
                setValue(data); 
            } else if (isValidData && +data < 1) {
                setValue("1");
            } else if (isValidData && +data > 10) {
                setValue("10");
            } else {
                setValue("");
            }
        }
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