'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
function DarkModeButton() {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<div className='mt-3 lg:mt-4'>
			{currentTheme === 'light' ? (
				<MoonIcon
					className="w-5 h-5 mr-1 text-gray-500 cursor-pointer"
					onClick={() => setTheme('dark')}
				/>
			) : (

				<SunIcon
					className="w-5 h-5 mr-1 text-yellow-500 cursor-pointer"
					onClick={() => setTheme('light')}
				/>
			)}
		</div>
	);
}
export default DarkModeButton;