import { useEffect, useState } from 'react';
import WhyRxItem from './WhyRxItem';

const WhyRX = () => {
    const [whyRxItem, setWhyRxItem] = useState([]);

    useEffect( () => {
        fetch('/whyrx.json')
        .then(res => res.json())
        .then(data => setWhyRxItem(data));
    }, []);

    return (
        <section className="container px-4 mx-auto my-10">
            <div className="text-4xl font-semibold text-primary flex justify-center">
                <div>
                    <h2 className="">Why RX Courier</h2>
                    <div className="border border-t-2 border-t-primary w-16 mt-3"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                {
                    whyRxItem.map(item => <WhyRxItem key={item.id} item={item}></WhyRxItem>)
                }
            </div>
        </section>
    );
};

export default WhyRX;