import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-5 space-x-2 font-bold md:px-10">
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
                <h1 className="text-sm md:text-base">John Cañero Blog</h1>
            </div>
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