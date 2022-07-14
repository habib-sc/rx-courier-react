import React from 'react';

const CallToAction = () => {
    return (
        <div className='container px-4 my-10 mx-auto' data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="500">
            <div className='flex justify-between items-center gap-10 flex-wrap bg-orange-50 px-8 py-8 rounded-lg shadow-lg'>
                <div>
                    <h3 className='text-4xl font-bold'>Be A RX Courier Partner Today</h3>
                    <p className='text-xl font-semibold mt-3'>Just Sign Up and be a partner.</p>
                </div>
                <div>
                    <button class="btn btn-primary text-xl px-10">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;