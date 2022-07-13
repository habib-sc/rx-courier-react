
const WhyRxItem = ({item}) => {
    return (
        <div className="card bg-base-100 shadow-xl rounded-lg border border-primary" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="400">
            <figure className="px-10 pt-10">
                <img src={item.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h3 className="text-3xl font-semibold">{item.name}</h3>
            </div>
        </div>
    );
};

export default WhyRxItem;