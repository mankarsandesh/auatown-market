'use client' // this is a client component 👈🏽
import './globals.css'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../components/Header'), {
	ssr: false,
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-full">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
