import React from 'react';
import heroImg from '../../assets/images/delivery-rx.png';

const TopBanner = () => {
    return (
        <div style={{ backgroundImage: `url(/animated-bg.svg)` }}> 
            <div className='h-screen bg-cover bg-primary opacity-90' id="top-banner">
                <div className='container mx-auto px-4'>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 justify-between items-center pt-[65px] h-screen'>
                        <div className='text-5xl uppercase font-semibold text-white leading-tight'>
                            <h1>We Provide</h1>
                            <h1 className='w-[430px] bg-white text-primary text-center -skew-x-12 rounded-lg'>Fastest Delivery </h1>
                            <h1>Accross</h1>
                            <h1 className='w-[320px] bg-white text-primary text-center -skew-x-12 rounded-lg'>64 districts </h1>
                            
                        </div>

                        <div className='bg-base-100 rounded-lg'>
                            <img src={heroImg} className="rounded-3xl" alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TopBanner;