import { useLocalStorage } from '../hooks/useLocalStorage/useLocalStorage';
import { MetaContext } from './MetaContext';

const MetaProvider = ({ children }) => {
    const [metaData, setMetaData] = useLocalStorage("gForceMetaData", {
        version: 1.0,
        ui: "list",
        theme: "light",
        user: "default",
        lastFilter: "gforce",
        onlyDone: false
    });

    return (
        <MetaContext.Provider value={{metaData, setMetaData}}>
            {children}
        </MetaContext.Provider>
    );
};

export default MetaProvider;