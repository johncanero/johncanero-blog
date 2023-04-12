function Banner() {
    return (
        <div>
            <div className="flex flex-col justify-between p-5 px-5 mb-10 font-bold md:px-10 lg:flex-row lg:space-x-5">
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
        </div>
    );
}

export default Banner;