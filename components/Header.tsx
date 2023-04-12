import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between py-4 mx-4 space-x-2 font-bold md:py-5 md:mx-5 max lg:space-x-5 md:px-10">
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
                <h1 className="mt-3 text-sm md:text-base">John Cañero Blog</h1>
            </div>
            {/* Discover my Creative Projects */}
            <div>
                <Link
                    href="https://johncanero.com/"
                    target="_blank"
                    className="flex items-center px-4 py-2 text-xs font-semibold text-center text-gray-800 bg-white border-2 border-gray-400 shadow md:px-5 md:py-3 md:text-base rounded-xl hover:bg-gray-100 "
                >
                    Discover My Creative Projects
                </Link>
            </div>
        </header>
    );
}

export default Header;
