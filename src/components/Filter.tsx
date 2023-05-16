'use client'
import { Fragment } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {
	ChevronDownIcon,
	FunnelIcon,
	MinusIcon,
	PlusIcon,
	Squares2X2Icon,
} from '@heroicons/react/20/solid'

const subCategories = [
	{ name: 'Full avater', href: '#' },
	{ name: 'Others', href: '#' },
]
const filters = [
	{
		id: 'contents',
		name: 'Contents',
		options: [
			{ value: 'vrchatquest', label: 'VRChat(Quest)', checked: false },
			{ value: 'beige', label: 'VRChat(PCVR)', checked: false },
			{ value: 'blue', label: 'Others', checked: false },
		],
	},
	{
		id: 'price',
		name: 'Price',
		options: [
			{ value: 'new-arrivals', label: 'Under $10', checked: false },
			{ value: '10', label: '$10 to $20', checked: false },
			{ value: '20', label: '$20 to $30', checked: false },
			{ value: '30', label: '$30 to $40', checked: false },
			{ value: '40', label: '$40 to $50', checked: false },
			{ value: '50', label: '$50 to $60', checked: false },
			{ value: '60', label: '$60 to $70', checked: false },
			{ value: '70', label: '$70 & above', checked: false },
		],
	},
	{
		id: 'polygon-amount',
		name: 'Polygon amount',
		options: [
			{ value: 'Under 7500', label: 'Under △ 7000', checked: false },
			{ value: 'Under 7000', label: ' △ 7000 to △ 10000', checked: false },
			{ value: 'Under 10000', label: ' △ 10000 to △ 15000', checked: false },
			{ value: 'Under 15000', label: ' △ 15000 to △ 20000', checked: false },
			{ value: 'Under 20000', label: ' △ 20000 to △ 25000', checked: false },
			{ value: 'Under 25000', label: ' △ 25000 to △ 30000', checked: false },
			{ value: 'Under 30000', label: ' △ 30000 to △ 35000', checked: false },
		],
	},
	{
		id: 'auto-upload',
		name: 'Auto upload support',
		options: [
			{ value: 'supported', label: 'Supported', checked: false },
			{ value: 'unsupported', label: 'UnSupported', checked: false },
		],
	},
]

export default function Filter() {
	return (
		<>
			<form className="hidden lg:block">
				<span className="font-medium text-gray-900 text-sm">Category</span>
				<ul
					role="list"
					className="space-y-2 border-b border-gray-200 text-sm font-medium text-gray-600 pb-2"
				>
					{subCategories.map((category) => (
						<li key={category.name} className="my-1 pl-2">
							{category.name}
						</li>
					))}
				</ul>

				{filters.map((section) => (
					<Disclosure as="div" key={section.id}>
						{({ open }) => (
							<>
								<h3 className=" flow-root">
									<Disclosure.Button className="flex w-full items-center justify-between bg-white py-2 text-sm text-gray-400 hover:text-gray-500">
										<span className="font-medium text-gray-900">
											{section.name}
										</span>
										<span className="ml-6 flex items-center">
											{open ? (
												<MinusIcon className="h-5 w-5" aria-hidden="true" />
											) : (
												<PlusIcon className="h-5 w-5" aria-hidden="true" />
											)}
										</span>
									</Disclosure.Button>
								</h3>
								<Disclosure.Panel>
									<div className="space-y-2 pl-2">
										{section.options.map((option, optionIdx) => (
											<div key={option.value} className="flex items-center">
												<input
													id={`filter-${section.id}-${optionIdx}`}
													name={`${section.id}[]`}
													defaultValue={option.value}
													type="checkbox"
													defaultChecked={option.checked}
													className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
												/>
												<label
													htmlFor={`filter-${section.id}-${optionIdx}`}
													className="ml-3 text-sm text-gray-600"
												>
													{option.label}
												</label>
											</div>
										))}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				))}
			</form>
		</>
	)
}
