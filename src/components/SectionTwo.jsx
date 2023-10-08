

const SectionTwo = () => {
    return (
        <div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-center">A Showcase of Our Best Work</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div>
                    <div className="card card-compact rounded-md  bg-base-100 shadow-xl">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkF9iY4Jrb0CGNZ1rOXsXdXiYq1S7OrY_fYHWCifGOKA7LF5H4HPycJPPnLgWyDBLpfY&usqp=CAU" className='w-full h-60' alt="Shoes" /></figure>
                    </div>

                </div>
                <div>
                    <div className="card card-compact rounded-md  bg-base-100 shadow-xl">
                        <figure><img src="https://weddingbanquets.in/blog/wp-content/uploads/2022/04/wedding-stage-6-1.jpg" className='w-full h-60' alt="Shoes" /></figure>
                        
                    </div>

                </div>
                <div>
                    <div className="card card-compact rounded-md  bg-base-100 shadow-xl">
                        <figure><img src="https://cdn.greenvelope.com/blog/wp-content/uploads/outdoor-wedding-aisle.jpeg" className='w-full h-60' alt="Shoes" /></figure>
                        
                    </div>

                </div>
            </div>

            

        </div>
    );
};

export default SectionTwo;