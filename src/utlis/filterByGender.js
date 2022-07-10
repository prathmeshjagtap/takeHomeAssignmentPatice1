const filterByGender = (products, idealFor) => {
	console.log(idealFor);
	if (idealFor !== null) {
		return products.filter((product) => product.idealFor.includes(idealFor));
	}
	return products;
};

export { filterByGender };
