const filterReducer = (state, action) => {
	switch (action.type) {
		case "CLEAR_FILTERS":
			return {
				sortBy: null,
				sizes: [],
				brands: [],
				idealFor: null,
			};
		case "CHANGE_SORT_BY":
			return { ...state, sortBy: action.payload };
		case "CHANGE_SIZES":
			const newSizes = state.sizes.some((size) => size === action.payload)
				? state.sizes.filter((size) => size !== action.payload)
				: [...state.sizes, action.payload];
			return { ...state, sizes: newSizes };
		case "CHANGE_BRANDS":
			const newBrands = state.brands.some((brand) => brand === action.payload)
				? state.brands.filter((brand) => brand !== action.payload)
				: [...state.brands, action.payload];
			return { ...state, brands: newBrands };
		case "CHANGE_IDEAL_FOR":
			return { ...state, idealFor: action.payload };
		default:
			return state;
	}
};

export { filterReducer };
