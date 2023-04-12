import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between mx-5 p-5 max space-x-2 lg:space-x-5 font-bold md:px-10">
            <div className="flex space-x-2">
                <Link href="/">
                    <Image
                        className="object-cover rounded-full"
                        width={50}
                        height={50}
                        src="/images/johncaneroProfile.jpg"
                        alt="Logo"
                    />
                </Link>
                <h1 className="text-sm md:text-base mt-3">John Cañero Blog</h1>
            </div>
            {/* Discover my Creative Projects */}
            <div>
                <Link
                    href="https://johncanero.com/"
                    target="_blank"
                    className="py-2 px-4 md:px-5 md:py-3 text-xs md:text-base bg-white text-gray-800 font-semibold border-2 border-gray-400 rounded-xl shadow hover:bg-gray-100 flex items-center text-center "
                >
                    Discover My Creative Projects
                </Link>
            </div>
        </header>
    );
}

export default Header;
