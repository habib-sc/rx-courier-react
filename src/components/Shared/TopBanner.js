import heroImg from '../../assets/images/delivery-rx.png';

const TopBanner = () => {
    return (
        <div style={{ backgroundImage: `url(/animated-bg.svg)` }}> 
            <div className='h-screen bg-cover bg-primary opacity-90' id="top-banner">
                <div className='container mx-auto px-4'>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 justify-between items-center pt-[65px] h-screen'>
                        <div className='font-semibol'>
                            <div className='text-5xl uppercase text-white font-bold leading-tight flex flex-wrap gap-4'>
                                <h1>We Provide</h1>
                                <h1 className='w-[430px] bg-white text-primary text-center -skew-x-12 rounded-lg'>Fastest Delivery </h1>
                            </div>

                            <p className='text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo natus aut temporibus, obcaecati neque ipsam quia nostrum, blanditiis aspernatur voluptas veniam. Sequi doloremque nulla animi obcaecati odio magni non?</p>

                            <div className='mt-4 p-4 rounded-lg left-banner-input-box pb-7 min-h-xs'>
                                <h3 className='text-3xl font-semibold mb-2 text-white mt-0'>Join As Merchant</h3>
                            
                                <form>
                                    <div className='flex items-center'>
                                        <span className='bg-white text-netral rounded-tl rounded-bl py-2.5 px-2 border border-solid border-orange-300 border-r-0 text-base font-normal'>+880</span>
                                        <input type="tel" class="px-3 py-2.5 text-base font-normal bg-white bg-clip-padding border border-solid border-orange-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-tr rounded-br w-full max-w-xs" />
                                        <button className='btn btn-primary rounded shadow-xl border-orange-300 mx-3'>Join Now</button>
                                    </div>
                                    
                                </form>
                            </div>


                        </div>

                        <div className='bg-base-100 rounded-lg' id="baner-right">
                            <img src={heroImg} className="rounded-3xl" alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TopBanner;