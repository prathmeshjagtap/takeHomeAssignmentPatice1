import { filterByBrand } from "./filterByBrand";
import { filterByGender } from "./filterByGender";
import { filterBySize } from "./filterBySize";
import { sortByPrice } from "./sortByPrice";

const filterProducts = (products, filters) => {
	const sortedProducts = sortByPrice(products, filters.sortBy);
	const sizedProducts = filterBySize(sortedProducts, filters.sizes);
	const brandedProducts = filterByBrand(sizedProducts, filters.brands);
	const idealForProducts = filterByGender(brandedProducts, filters.idealFor);
	return idealForProducts;
};

export { filterProducts };
