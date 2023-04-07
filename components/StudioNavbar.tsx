import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="items-center justify-between hidden p-5 md:flex font-Montserrat">
        <Link href="/" className="text-[#0ea5e9] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#0ea5e9]" />
          Go To Website
        </Link>
        <div className="p-5 rounded-lg justify-center border-2 border-[#0ea5e9]">
          <h1 className="dark:text-white">Want to check out my portfolio and see my progress as a developer? 👉 </h1>
          <Link
            href="https://johncanero.com/"
            className="text-[#0ea5e9] font-bold"
          >https://johncanero.com/
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;