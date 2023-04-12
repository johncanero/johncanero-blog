import Image from "next/image";

function Banner() {
    return (
        <div>
            <div className="mb-10 font-bold md:px-10 lg:space-x-5">
                {/* Banner Content */}
                <div className="flex flex-col justify-between lg:flex-row p-5 px-5">
                    <div>
                        <h1 className="text-5xl font-semibold">Insights and Reflections from John Cañero</h1>
                        <h3 className="mt-5 font-medium md:mt-4">
                            About Life, Career, Compounding, and Self-Realization
                        </h3>
                    </div>

                    <p className="max-w-sm mt-5 font-medium text-sm text-gray-400 md:mt-2">
                        Explore my blog to find my personal views and perspectives on a range of topics, and gain insight into my understanding of the world.
                    </p>
                </div>

                {/* Banner Image */}
                <div className="max-w-6xl h-80 transform-gpu drop-shadow-xl group-hover:scale-105 mx-auto">
                    <Image
                        className="object-cover object-left lg:object-center"
                        src="/images/blueSky.jpg"
                        alt=""
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;