import React, { useEffect, useState } from 'react';
import HubInDhaka from './HubInDhaka';
import HubOutSideDhaka from './HubOutSideDhaka';

const Hubs = () => {
    const [hubsInDhaka, setHubsInDhaka] = useState([]);
    const [hubsOutSideDhaka, setHubsOutSideDhaka] = useState([]);

    useEffect( () => {
        fetch('/hub-inside-dhaka.json')
        .then(res => res.json())
        .then(data => setHubsInDhaka(data));
    }, []);

    useEffect( () => {
        fetch('/hub-outside-dhaka.json')
        .then(res => res.json())
        .then(data => setHubsOutSideDhaka(data));
    }, []);

    return (
        <div className='container px-4 mx-auto py-10' name="coverage">
            {/* Hub title Start */}
            <div className="text-4xl font-semibold text-primary flex justify-center mb-10">
                <div>
                    <h2 className="">Our Hubs</h2>
                    <div className="border border-t-2 border-t-primary w-16 mt-3"></div>
                </div>
            </div>
            {/* Hub title end  */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='border rounded-lg p-4' data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400">
                    <h3 className='text-2xl text-center font-semibold mb-4'>Inside Dhaka Hub</h3>
                    <div className='grid grid-cols-2 gap-3'>
                        {
                            hubsInDhaka.map(hub => <HubInDhaka key={hub.id} hub={hub}></HubInDhaka>)
                        }
                    </div>
                </div>
                <div className='border rounded-lg p-4' data-aos="fade-up-left" data-aos-duration="1500" data-aos-delay="400">
                    <h3 className='text-2xl text-center font-semibold mb-4'>Outside Dhaka Hub</h3>
                    <div className='grid grid-cols-2 gap-3'>
                        {
                            hubsOutSideDhaka.map(hub => <HubOutSideDhaka key={hub.id} hub={hub}></HubOutSideDhaka>)
                        }
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Hubs;