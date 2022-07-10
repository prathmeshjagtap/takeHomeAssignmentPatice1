const filterBySize = (products, sizes) => {
	if (sizes.length === 0) {
		return products;
	}
	return products.filter(
		(product) => product.sizes.filter((size) => sizes.includes(size)).length > 0
	);
};

export { filterBySize };
