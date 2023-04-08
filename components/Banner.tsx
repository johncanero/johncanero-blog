function Banner() {
    return (
        <div>
            <div className="flex flex-col justify-between p-5 px-10 mb-10 font-bold lg:flex-row lg:space-x-5">
                <div>
                    <h1 className="text-7xl">John Cañero Blogs</h1>
                    <h2 className="mt-5 font-semibold md:mt-4">
                        Welcome to <span className="decoration-4 decoration-[#0ea5e9]">Every Creators, Builders and Designers</span> favorite blog in the creatorsphere.
                    </h2>
                </div>
                <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
                    New STORIES of inspiration and creativity | The latest CREATOR PRODUCT features | UPDATES about about being a creator & MORE!
                </p>
            </div>
        </div>
    );
}

export default Banner;