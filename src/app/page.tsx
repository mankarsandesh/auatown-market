'use client' // this is a client component 👈🏽
import { useState } from 'react'
import dynamic from 'next/dynamic'
const PageHeader = dynamic(() => import('../components/PageHeader'), {
	ssr: false,
})
const Filter = dynamic(() => import('../components/Filter'), {
	ssr: false,
})

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
import { StarIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
const products = [
	{
		id: 1,
		name: 'Avatar name "Avatown - Nice Orgienl of Avaton',
		description:
			'Auto Upload service ready. you can use this avater within 24 hours.',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$354',
		color: 'Black',
		rating: 3.9,
		reviewCount: 117,
		pc: true,
	},
	{
		id: 2,
		name: 'Avatar name "Avatown - Nice Orgienl of Avaton',
		description:
			'Auto Upload service ready. you can use this avater within 24 hours.',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$354',
		color: 'Black',
		rating: 3.9,
		reviewCount: 117,
		pc: true,
	},
	{
		id: 3,
		name: 'Avatar name "Avatown - Nice Orgienl of Avaton',
		description:
			'Auto Upload service ready. you can use this avater within 24 hours.',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$354',
		color: 'Black',
		rating: 3.9,
		reviewCount: 117,
		pc: true,
	},
	{
		id: 4,
		name: 'Avatar name "Avatown - Nice Orgienl of Avaton',
		description:
			'Auto Upload service ready. you can use this avater within 24 hours.',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$354',
		color: 'Black',
		rating: 3.9,
		reviewCount: 117,
		pc: true,
	},
	{
		id: 5,
		name: 'Avatar name "Avatown - Nice Orgienl of Avaton',
		description:
			'Auto Upload service ready. you can use this avater within 24 hours.',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$354',
		color: 'Black',
		rating: 3.9,
		reviewCount: 117,
		pc: true,
	},
]
export default function Home() {
	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

	const renduerPcOnly = (value) => {
		if (value) {
			return (
				<div className="flex justify-left my-2">
					<div className="rounded-full bg-blue-500 w-4 h-4 mr-2"></div>
					<lable className="text-xs text-gray-700 font-medium">PC Only</lable>
				</div>
			)
		}
	}

	return (
		<>
			<div className="bg-white">
				<div>
					<main className="mx-auto px-4 sm:px-6 lg:px-8 mt-2">
						<section aria-labelledby="products-heading" className="pb-24 pt-3">
							<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 ">
								<Filter />
								<div className="lg:col-span-4">
									<PageHeader />
									<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
										{products.map((product) => (
											<div key={product.id} className="group relative ">
												<div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
													<img
														src={product.imageSrc}
														alt={product.imageAlt}
														className="h-full w-full object-cover object-center lg:h-full lg:w-full"
													/>
												</div>
												<button
													type="submit"
													className="absolute top-4 right-4  flex justify-center rounded-md bg-indigo-500 text-white px-2 py-0.5 text-sm"
												>
													<ShoppingCartIcon className="w-5 h-5 mr-1" /> Add
												</button>
												<div className="mt-4 flex justify-between">
													<div>
														<h3 className="text-sm text-gray-700">
															<a href={product.href}>
																<span
																	aria-hidden="true"
																	className="absolute inset-0"
																/>
																{product.name}
															</a>
														</h3>
														<div className="flex items-center">
															<div className="flex items-center">
																{[0, 1, 2, 3, 4].map((rating) => (
																	<StarIcon
																		key={rating}
																		className={classNames(
																			product.rating > rating
																				? 'text-yellow-400'
																				: 'text-gray-200',
																			'h-5 w-5 flex-shrink-0'
																		)}
																		aria-hidden="true"
																	/>
																))}
															</div>
															<p className="sr-only">
																{product.rating} out of 5 stars
															</p>
															<a
																href="#"
																className="ml-3 text-sm font-medium text-gray-600 hover:text-indigo-500"
															>
																{product.reviewCount} & 1211 likes
															</a>
														</div>
														<div className="flex items-center py-2 ">
															<img
																src={product.imageSrc}
																alt={product.imageAlt}
																className=" object-cover object-center w-6 h-6 mr-2"
															/>
															<div>Sandesh Mankar</div>
														</div>
														<p className="text-2xl text-gray-900">
															{product.price}
														</p>
														{renduerPcOnly(product.pc)}
														<p className="mt-1 text-sm text-gray-500">
															{product.description}
														</p>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	)
}
