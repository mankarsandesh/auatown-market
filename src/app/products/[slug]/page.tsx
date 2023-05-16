import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import products from '../../../data/recentProducts.json'
const user = {
	name: 'Sandesh Mankar',
	email: 'mankarsandesh111@gmail.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
export default function Index() {
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	}

	function getRandomInt(max) {
		return Math.floor(Math.random() * max)
	}
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
			<main className="mx-auto px-4 sm:px-6 lg:px-8 mt-2">
				<section aria-labelledby="products-heading" className="pb-24 pt-3">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 ">
						<div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-10 ">
							<div className="lg:col-span-3 ">
								<img
									src={user.imageUrl}
									alt=""
									height="400"
									width="500"
									className="w-full rounded-md"
								/>
							</div>
							<div className="lg:col-span-7  px-4 ">
								<div className=" flex justify-between">
									<div>
										<h3 className="text-3xl text-gray-800">
											Awesome Fintech in Canada is looking for a Front end
											Developer to work remotely
										</h3>
										<div className="mt-4 text-md text-gray-600">
											Requirements: Experience with modern JS framework (React,
											Vue) Have worked with PHP based frameworks Experience in
											REST style APIs as well as SPA CSS and SASS/SCSS
										</div>
										<div className="flex items-center mt-2">
											<div className="flex items-center">
												{[0, 1, 2, 3, 4].map((rating) => (
													<StarIcon
														key={rating}
														className={classNames(
															4 > rating ? 'text-yellow-400' : 'text-gray-200',
															'h-5 w-5 flex-shrink-0'
														)}
														aria-hidden="true"
													/>
												))}
											</div>
											<p className="sr-only">4 out of 5 stars</p>
											<a
												href="#"
												className="ml-2 text-sm font-medium text-gray-800 hover:text-indigo-500"
											>
												{getRandomInt(40)} & {getRandomInt(10000)}
												<span className="ml-1 text-gray-600">likes</span>
											</a>
										</div>
										<div className="flex items-center py-2 ">
											<Image
												src="/Sandesh.jpg"
												alt="Sandesh Mankar"
												className=" object-cover object-center w-6 h-6 mr-2 rounded-full"
												width={500}
												height={500}
											/>
											<div>Sandesh Mankar</div>
										</div>
										<p className="text-2xl text-gray-900">
											$ {getRandomInt(400)}
										</p>
										{renduerPcOnly(true)}
									</div>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<h3 className="text-2xl">Recent Products</h3>
							<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{products.map((product) => (
									<Link href={'/products/' + product.id} key={product.id}>
										<div className="group relative ">
											<div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
												<Image
													src={'/avatar/' + product.imageSrc}
													alt={product.imageAlt}
													className="h-full w-full object-cover object-center lg:h-full lg:w-full"
													width={500}
													height={500}
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
														<span>
															<span
																aria-hidden="true"
																className="absolute inset-0"
															/>
															{product.name}
														</span>
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
														<span className="ml-2 text-sm font-medium text-gray-800 hover:text-indigo-500">
															{getRandomInt(40)} & {getRandomInt(10000)}
															<span className="ml-1 text-gray-600">likes</span>
														</span>
													</div>
													<div className="flex items-center py-2 ">
														<Image
															src="/Sandesh.jpg"
															alt="Sandesh Mankar"
															className=" object-cover object-center w-6 h-6 mr-2"
															width={500}
															height={500}
														/>
														<div>Sandesh Mankar</div>
													</div>
													<p className="text-2xl text-gray-900">
														$ {getRandomInt(400)}
													</p>
													{renduerPcOnly(product.pc)}
													<p className="mt-1 text-sm text-gray-500">
														{product.description}
													</p>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
