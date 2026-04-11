import { Filter as Icon, GFilter, UrgencyFilter, PendingFilter } from "../Icons";
import styles from './Filter.module.css';
import { useContext } from "react";
import { FilterContext } from '../../contexts/FilterContext'

const Filter = () => {
    const { setFilter } = useContext(FilterContext);
    return (
        <div className={styles.filter} role="button" title="Ações de filtro">
            <Icon />
            <div className={styles.filtersContainer}>
                <button onClick={() => setFilter("gforce")} title="Filtro por gravidade">
                    <GFilter />
                </button>
                <button onClick={() => setFilter("urgency")} title="Filtro por urgência">
                    <UrgencyFilter />
                </button>
                <button onClick={() => setFilter("pending")} title="Filtro por pendência">
                    <PendingFilter />
                </button>
            </div>
        </div>
    )
};

export default Filter;