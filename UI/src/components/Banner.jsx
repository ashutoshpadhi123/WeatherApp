const Banner = ({
    title = 'Find the weather in your city',
    subtitle = 'Looks a little rainy today, isn\'t it?',
}) => {
    return (
        <section className='bg-purple-900 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold text-white sm:text-4xl md:text-4xl'>
                        {title}
                    </h1>
                    <p className='my-4 text-xl text-white'>{subtitle}</p>
                </div>
            </div>
        </section>
    );
};
export default Banner;