import { FormContext } from "./formContext";
import { useState, useRef } from "react";

const FormProvider = ({children}) => {
    const taskInputRef = useRef(null);
    const [userTask, setUserTask] = useState("");
    const [inputEffort, setInputEffort] = useState("");
    const [inputUrgency, setInputUrgency] = useState("");

    return (
        <FormContext.Provider value={{taskInputRef, userTask, setUserTask, inputEffort, setInputEffort, inputUrgency, setInputUrgency}} >
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;