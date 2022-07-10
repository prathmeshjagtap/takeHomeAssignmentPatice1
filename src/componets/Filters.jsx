import React from "react";
import data from "../data/products.json";
import { useFilters } from "../context/filter_context";

const Filters = () => {
	const { filters, dispatchFilters } = useFilters();
	const { sortBy, sizes, brands, idealFor } = filters;
	const { products } = data;
	const BrandsAvailable = products.map((product) => product.brand);
	const uniqueBrands = [...new Set(BrandsAvailable)];
	return (
		<div className="w-full min-h-screen p-2 mt-2">
			<div className="flex justify-between">
				<h1 className="font-bold m-2">Filters</h1>
				<button
					className="bg-blue-400 text-white p-2  rounded-md cursor-pointer"
					onClick={() => dispatchFilters({ type: "CLEAR_FILTERS" })}
				>
					Clear All
				</button>
			</div>
			<div className="m-2">
				<h3 className="font-bold">Sort By</h3>
				<div className="flex flex-col">
					<label htmlFor="sortBy-lowToHigh" className="cursor-pointer">
						<input
							type="radio"
							name="sortBy"
							id="sortBy-lowToHigh"
							checked={sortBy === "SORT_BY_LOW_TO_HIGH"}
							onChange={() =>
								dispatchFilters({
									type: "CHANGE_SORT_BY",
									payload: "SORT_BY_LOW_TO_HIGH",
								})
							}
						/>
						Price - Low To High
					</label>
					<label htmlFor="sortBy-highToLow">
						<input
							type="radio"
							name="sortBy"
							id="sortBy-highToLow"
							checked={sortBy === "SORT_BY_HIGH_TO_LOW"}
							onChange={() =>
								dispatchFilters({
									type: "CHANGE_SORT_BY",
									payload: "SORT_BY_HIGH_TO_LOW",
								})
							}
						/>
						Price - High to Low
					</label>
				</div>
			</div>
			<div className="m-2">
				<h3 className="font-bold">Sizes</h3>
				<div className="flex flex-col">
					<label htmlFor="sizes-xs">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-xs"
							checked={sizes.some((size) => size === "XS")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "XS" })
							}
						/>
						XS
					</label>
					<label htmlFor="sizes-s">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-s"
							checked={sizes.some((size) => size === "S")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "S" })
							}
						/>
						S
					</label>
					<label htmlFor="sizes-m">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-m"
							checked={sizes.some((size) => size === "M")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "M" })
							}
						/>
						M
					</label>
					<label htmlFor="sizes-l">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-l"
							checked={sizes.some((size) => size === "L")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "L" })
							}
						/>
						L
					</label>
					<label htmlFor="sizes-xl">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-xl"
							checked={sizes.some((size) => size === "XL")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "XL" })
							}
						/>
						XL
					</label>
					<label htmlFor="sizes-xxl">
						<input
							type="checkbox"
							name="sizes"
							id="sizes-xxl"
							checked={sizes.some((size) => size === "XXL")}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_SIZES", payload: "XXL" })
							}
						/>
						XXL
					</label>
				</div>
			</div>
			<div className="m-2">
				<h3 className="font-bold">Brands</h3>
				<div className="flex flex-col">
					{uniqueBrands.map((brand) => (
						<label key={brand} htmlFor={`brands-${brand}`}>
							<input
								type="checkbox"
								name="brands"
								id={`brands-${brand}`}
								checked={brands.some((filtersBrand) => filtersBrand === brand)}
								onChange={() =>
									dispatchFilters({ type: "CHANGE_BRANDS", payload: brand })
								}
							/>
							{brand}
						</label>
					))}
				</div>
			</div>
			<div className="m-2">
				<h3 className="font-bold">Idel For</h3>
				<div className="flex flex-col">
					<label htmlFor="idealFor-men">
						<input
							type="radio"
							name="idealFor"
							id="idealFor-men"
							checked={idealFor === "Men"}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_IDEAL_FOR", payload: "Men" })
							}
						/>
						Men
					</label>
					<label htmlFor="idealFor-women">
						<input
							type="radio"
							name="idealFor"
							id="idealFor-women"
							checked={idealFor === "Women"}
							onChange={() =>
								dispatchFilters({ type: "CHANGE_IDEAL_FOR", payload: "Women" })
							}
						/>
						Women
					</label>
				</div>
			</div>
		</div>
	);
};

export { Filters };
