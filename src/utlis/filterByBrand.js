const filterByBrand = (products, brands) => {
	if (brands.length === 0) {
		return products;
	}
	return products.filter((product) => brands.includes(product.brand));
};

export { filterByBrand };
