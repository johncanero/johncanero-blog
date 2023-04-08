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
                    href="https://upskillhub-by-johncanero.vercel.app/"
                    target="_blank"
                    className="py-2 px-3 md:px-5 md:py-3 text-xs md:text-base bg-gray-900 text-[#0ea5e9] flex items-center rounded-full text-center "
                >
                    Sign Up to the UpskillHub University
                </Link>
            </div>
        </header>
    );
}

export default Header;