import React from "react";

function ProductCard({ item }) {
	console.log(item);
	return (
		<div className="w-60 m-4 shadow-sm p-2">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img
					src={item?.images[0]}
					alt={item?.name}
					className="w-full h-full object-center object-cover lg:w-full lg:h-full"
				/>
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">{item?.name}</h3>
					<p className="mt-1 text-sm text-gray-500">Brand : {item.brand}</p>
					<h6 className="text-sm font-medium text-gray-900">
						${item?.originalPrice}
					</h6>
					<h6 className="text-sm font-medium text-gray-900">
						⭐ {item?.rating}
					</h6>
					<h6 className="text-sm font-medium text-gray-900">
						Sizes{" "}
						{item?.sizes.map((size) => (
							<span key={size} className="m-2">
								{size}
							</span>
						))}
					</h6>
				</div>
			</div>
		</div>
	);
}

export { ProductCard };
