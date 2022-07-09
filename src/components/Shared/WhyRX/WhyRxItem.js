
const WhyRxItem = ({item}) => {
    return (
        <div class="card bg-base-100 shadow-xl rounded-lg border border-primary" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="400">
            <figure class="px-10 pt-10">
                <img src={item.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h3 class="text-3xl font-semibold">{item.name}</h3>
            </div>
        </div>
    );
};

export default WhyRxItem;