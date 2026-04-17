import { calcTaskGravity } from "./calcTaskGravity"

const getFilter = (filter="gforce", onlyDone=false, arrayList=[]) => {
    arrayList = !onlyDone ? [...arrayList].filter((item) => item.done === false) : [...arrayList]; 

    if (filter === "gforce") {
        return [...arrayList].sort((t1, t2) => calcTaskGravity(t2.effort, t2.urgency) - calcTaskGravity(t1.effort, t1.urgency));
    }

    if (filter === "urgency") {
        return [...arrayList].sort((t1, t2) => t2.urgency - t1.urgency);
    }

    if (filter === "done") {
        return [...arrayList].filter((item) => item.done === true).sort((t1, t2) => calcTaskGravity(t2.effort, t2.urgency) - calcTaskGravity(t1.effort, t1.urgency));
    }

    return null;
};

export { getFilter };