import { useState } from "react";

export function useLocalStorage(key="state", initialState={}) {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(key);
        if (!stored) {
            localStorage.setItem(key, JSON.stringify(initialState));
        }
        return stored ? JSON.parse(stored) : initialState;
    });

    function updateState(newState={}) {
        setState(newState);
        localStorage.setItem(key, JSON.stringify(newState));
    }

    return [state, updateState];
}