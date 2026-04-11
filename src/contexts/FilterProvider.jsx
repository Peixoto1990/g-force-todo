import { useState } from "react";
import { FilterContext } from "./FilterContext";

const FilterProvider = ({ children }) => {
    const [filter, setFilter] = useState("gforce");
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider;