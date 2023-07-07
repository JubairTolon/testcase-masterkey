import '../styles/Hotdeals.css'
import SinglePoduct from './SinglePoduct';


const Hotdeals = ({ products }) => {
    console.log(products)
    return (
        <div className="hotDeals__container flex lg:flex-row flex-col items-center lg:justify-between justify-center my-12">
            <div className='hotDeal__text lg:w-2/5 w-4/5 mg:mb-0 mb-12'>
                <p className='text-8xl font-thin'>We picked some <span className='text-orange-400 font-semibold'>cool things</span> for you!</p>
            </div>
            <div className='hotDeal__products block lg:flex flex-col lg:w-3/5 w-4/5'>
                <div className='border-dashed border-b-2 border-orange-400'>
                    <h1 className='mb-2 pl-3 text-2xl font-medium'>hot deals for you</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-4'>
                    {
                        products?.map(p => <SinglePoduct
                            key={p._id}
                            product={p}
                        ></SinglePoduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Hotdeals;