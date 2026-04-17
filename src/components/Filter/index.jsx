import { Filter as Icon, GFilter, UrgencyFilter, PendingFilter, DoneFilter } from "../Icons";
import styles from './Filter.module.css';
import { useContext } from "react";
import { MetaContext } from '../../contexts/MetaContext';

const Filter = () => {
    const { metaData, setMetaData } = useContext(MetaContext);

    return (
        <div className={styles.filter} role="button" title="Ações de filtro">
            <Icon />
            <div className={styles.filtersContainer}>
                <button className={metaData.lastFilter === 'gforce' ? null : styles.filterInactive} onClick={() => setMetaData({...metaData, lastFilter: "gforce"})} title="Filtro por gravidade">
                    <GFilter />
                </button>
                <button className={metaData.lastFilter === 'urgency' ? null : styles.filterInactive} onClick={() => setMetaData({...metaData, lastFilter: "urgency"})} title="Filtro por urgência">
                    <UrgencyFilter />
                </button>
                <button className={metaData.onlyDone ? styles.filterInactive : null} onClick={() => setMetaData({...metaData, onlyDone: !metaData.onlyDone, lastFilter: metaData.lastFilter === "done" ? "gforce" : metaData.lastFilter})} title="Filtro por pendência">
                    <PendingFilter />
                </button>
                <button className={metaData.onlyDone && metaData.lastFilter === "done" ? null : styles.filterInactive} onClick={() => setMetaData({...metaData, onlyDone: true, lastFilter: "done"})} title="Filtro por concluido">
                    <DoneFilter />
                </button>
            </div>
        </div>
    )
};

export default Filter;