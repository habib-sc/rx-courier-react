import Services from '../Services/Services';
import Hubs from '../Shared/RxHub/Hubs';
import TopBanner from '../Shared/TopBanner';
import WhyRX from '../Shared/WhyRX/WhyRX';

const Home = () => {
    return (
        <div name="home">
            <TopBanner></TopBanner>
            <Services></Services>
            <WhyRX></WhyRX>
            <Hubs></Hubs>
        </div>
    );
};

export default Home;