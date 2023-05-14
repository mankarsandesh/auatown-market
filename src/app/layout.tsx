import './globals.css'

import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('../components/Header'), {
// 	ssr: false,
// })
import Header from '../components/Header'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<div className="min-h-full">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
