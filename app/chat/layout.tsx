const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<main className='flex h-screen'>
			{children}
		</main>
	);
};

export default Layout;