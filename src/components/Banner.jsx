
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/luxury-wedding-tent-with-decor-banquet_624325-1389.jpg?size=626&ext=jpg&ga=GA1.2.450165047.1695670968&semt=ais)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Where Perfection Meets Passion</h1>
                        <p className="mb-5 text-lg font-medium">Bringing Your Vision to Life. <br /> Blissful Beginnings - Where Every Detail Matters.</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;