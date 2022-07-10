import React from "react";
import { ProductCard } from "../componets";
import data from "../data/products.json";
import { Filters } from "../componets";
import { useFilters } from "../context/filter_context";
import { filterProducts } from "../utlis";

function ProductListing() {
	const { products } = data;
	const { filters } = useFilters();
	const filteredProducts = filterProducts(products, filters);
	return (
		<div className="flex w-full">
			<div className="w-1/5">
				<Filters />
			</div>
			<div className="w-4/5">
				<h2 className="block mx-4 my-2">
					All Products : {filteredProducts?.length}
				</h2>
				<div className="flex flex-wrap">
					{filteredProducts?.map((item) => (
						<ProductCard item={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
}

export { ProductListing };
