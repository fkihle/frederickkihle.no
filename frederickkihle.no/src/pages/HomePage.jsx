import Fk from '../images/fk/frederick-kihle-01.jpg';

const HomePage = () => {
    return (
        <> 
            <div className="h-screen w-screen flex justify-center mt-24">

                <span className='w-1/2 h-1/2 rounded-r-full border-r bg-black overflow-hidden'>
                    <img src={Fk} alt='' className='object-cover'></img>
                </span>
                <span className='w-1/2 h-1/2 text-white content-center uppercase py-2 px-16'>
                    Capturing moments since 2001
                </span>

            </div>
            
        </>
    )
};

export default HomePage;