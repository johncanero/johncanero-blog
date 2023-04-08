import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="object-cover rounded-full"
                        width={50}
                        height={50}
                        src="/images/johncaneroProfile.jpg"
                        alt="Logo"
                    />
                </Link>
                <h1>John Cañero Blog</h1>
            </div>
            <div> 
                <Link
                    href="https://upskillhub-by-johncanero.vercel.app/"
                    target="_blank"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0ea5e9] flex items-center rounded-full text-center "
                >
                    Sign Up to the UpskillHub University
                </Link>
            </div>
        </header>
    );
}

export default Header;