
const Service = ({service}) => {
    const id = service.id;
    return (
        
        <div class={`${id == 2 || id == 5 || id == 8 ? "-mt-16": ""} ${id == 3 || id == 6 || id == 9 ? "-mt-32": ""}`}>
            <div class={`card rounded-lg my-4 bg-base-100 shadow-xl hover:scale-110 hover:bg-primary hover:text-white transition ease-in-out delay-150 duration-300`}>
                <figure><img src={service.img} className="w-full max-h-80" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.text}</p>
                </div>
            </div>
            
        </div>
    );
};

export default Service;