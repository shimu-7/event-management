

const SectionOne = () => {
    return (
        <div>
            {/* <h2 className="text-3xl font-bold mt-12 mb-4 text-center">About Us</h2> */}
            <div className="my-10 bg-slate-100 grid grid-cols-1 lg:grid-cols-2">

                <div className="hero min-h-max ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFySoqHsBEjpFxBORq-9SxEfd3t-Ay1y8yEw&usqp=CAU" className="max-w-xs rounded-lg shadow-2xl h-full" />
                        <div>
                            <h1 className=" font-serif"><span className="text-teal-500 text-2xl font-bold">Welcome</span> <br /> to Blissful Wedding planner</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="hero min-h-max ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYeMJe0qfdkHbir7AHTGmwWDx8cN5M_c-mQ&usqp=CAU" className="max-w-xs rounded-lg shadow-2xl h-full" />
                        <div>
                        <h1 className="font-serif"><span className="text-teal-500 text-2xl font-bold">Blissful</span> <br /> Crafting unforgettable moments with passion and precision. Your joy, our mission.</h1>
                            
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SectionOne;