import { useReducer } from "react";
import { createContext, useContext } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
	const [filters, dispatchFilters] = useReducer(filterReducer, {
		sortBy: null,
		sizes: [],
		brands: [],
		idealFor: null,
	});

	return (
		<FiltersContext.Provider value={{ filters, dispatchFilters }}>
			{children}
		</FiltersContext.Provider>
	);
};

const useFilters = () => useContext(FiltersContext);
export { FiltersProvider, useFilters };
