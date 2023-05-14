'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'
const user = {
	name: 'Sandesh Mankar',
	email: 'mankarsandesh111@gmail.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	return (
		<>
			<Disclosure
				as="nav"
				className="border-b border-purple-300 border-opacity-25 bg-purple-600 lg:border-none"
			>
				{({ open }) => (
					<>
						<div className="mx-auto  px-2 sm:px-4 lg:px-8 ">
							<div className="relative flex h-16 items-center justify-between lg:border-b lg:border-purple-400 lg:border-opacity-25">
								<div className="flex items-center px-2 lg:px-0">
									<div className="flex-shrink-0">
										<Link href="./">
											<Image
												className="block h-12"
												src="/logo.png"
												alt="Your Company"
												width="200"
												height="120"
											/>
										</Link>
									</div>
									<div className="hidden lg:ml-10 lg:block">
										<Link
											href="./"
											className="text-xl text-purple-700 rounded-xl bg-gray-200 px-6 py-2"
										>
											{' '}
											Go to Marketpage
										</Link>
									</div>
								</div>
								<div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
									<div className="w-full max-w-lg lg:max-w-xs">
										<label htmlFor="search" className="sr-only">
											Search
										</label>
										<div className="relative text-gray-400 focus-within:text-gray-600">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<MagnifyingGlassIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</div>
											<input
												id="search"
												className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 sm:text-sm sm:leading-6"
												placeholder="Search"
												type="search"
												name="search"
											/>
										</div>
									</div>
								</div>
								<div className="flex lg:hidden">
									{/* Mobile menu button */}
									<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-purple-600 hover:bg-purple-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600">
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="hidden lg:ml-4 lg:block">
									<div className="flex items-center">
										<button
											type="button"
											className="mr-3 flex-shrink-0 rounded-md bg-gray-600 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
										>
											<span className="sr-only">View notifications</span>
											<BellIcon className="h-6 w-6" aria-hidden="true" />
										</button>

										<button
											type="button"
											className="flex-shrink-0 rounded-md bg-gray-600 p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
										>
											<span className="sr-only">View notifications</span>
											<ShoppingCartIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>

										<Menu as="div" className="relative ml-3 flex-shrink-0">
											<div>
												<Menu.Button className="flex rounded-full bg-purple-600 text-sm text-white focus:outline-none focus:ring-2 ">
													<span className="sr-only">Open user menu</span>
													<img
														className="h-8 w-8 rounded-md"
														src={user.imageUrl}
														alt=""
													/>
												</Menu.Button>
											</div>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													{userNavigation.map((item) => (
														<Menu.Item key={item.name}>
															{({ active }) => (
																<a
																	href={item.href}
																	className={classNames(
																		active ? 'bg-gray-100' : '',
																		'block px-4 py-2 text-sm text-gray-700'
																	)}
																>
																	{item.name}
																</a>
															)}
														</Menu.Item>
													))}
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="lg:hidden">
							<div className="border-t border-purple-700 pb-3 pt-4">
								<div className="flex items-center px-5">
									<div className="flex-shrink-0">
										<img
											className="h-10 w-10 rounded-full"
											src={user.imageUrl}
											alt=""
										/>
									</div>
									<div className="ml-3">
										<div className="text-base font-medium text-white">
											{user.name}
										</div>
										<div className="text-sm font-medium text-purple-300">
											{user.email}
										</div>
									</div>
									<button
										type="button"
										className="ml-auto flex-shrink-0 rounded-full bg-purple-600 p-1 text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
									>
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="mt-3 space-y-1 px-2">
									{userNavigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-purple-500 hover:bg-opacity-75"
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	)
}
