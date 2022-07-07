import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <section className="mt-48 container px-4 mx-auto">
            <div className="text-4xl font-semibold text-primary -mt-32 max-w-sm">
                <div className="border border-t-2 border-t-primary w-16"></div>
                <h2 className="">Services We Provide</h2>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;