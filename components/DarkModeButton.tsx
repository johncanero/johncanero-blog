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
			{currentTheme === 'dark' ? (
				<SunIcon
					className="text-yellow-500 cursor-pointer w-7 h-7"
					onClick={() => setTheme('light')}
				/>
			) : (
				<MoonIcon
					className="text-gray-500 cursor-pointer w-7 h-7"
					onClick={() => setTheme('dark')}
				/>
			)}
		</div>
	);
}
export default DarkModeButton;