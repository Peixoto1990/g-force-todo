import { createContext, useState, useRef } from "react";

export const formContext = createContext(null);

const FormProvider = ({children}) => {
    const taskInputRef = useRef(null);
    let [userTask, setUserTask] = useState("");
    let [inputEffort, setInputEffort] = useState("");
    let [inputUrgency, setInputUrgency] = useState("");

    return (
        <formContext.Provider value={{taskInputRef, userTask, setUserTask, inputEffort, setInputEffort, inputUrgency, setInputUrgency}} >
            {children}
        </formContext.Provider>
    )
}

export { FormProvider };
