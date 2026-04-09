const getGravityColor = (gravity = 5) => 
    gravity < 10 ? "var(--g-low)" : gravity < 20 ? "var(--g-mid)" : "var(--g-high)";

export { getGravityColor };