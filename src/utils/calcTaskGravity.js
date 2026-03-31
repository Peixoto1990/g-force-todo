const calcTaskGravity = (effort, urgency) => 
    Number(Math.round((Number(effort) + Number(urgency)) / 2 * 2.8).toFixed(2)) || 5;

export { calcTaskGravity };