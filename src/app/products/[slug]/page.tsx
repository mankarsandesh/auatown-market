import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

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
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-8 ">
							<div className="lg:col-span-4 ">
								<img
									src={user.imageUrl}
									alt=""
									height="400"
									width="500"
									className="w-full rounded-md"
								/>
							</div>
							<div className="lg:col-span-4 border">
								<div className="mt-4 flex justify-between">
									<div>
										<h3 className="text-sm text-gray-700">
											<span>
												<span aria-hidden="true" className="absolute inset-0" />
												dsdsdsdsdsds
											</span>
										</h3>
										<div className="flex items-center">
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
												className=" object-cover object-center w-6 h-6 mr-2"
												width={500}
												height={500}
											/>
											<div>Sandesh Mankar</div>
										</div>
										<p className="text-2xl text-gray-900">
											$ {getRandomInt(400)}
										</p>
										{renduerPcOnly(true)}
										<p className="mt-1 text-sm text-gray-500">
											dsdsbjdsbhdbsdj
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
