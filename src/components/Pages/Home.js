import Services from '../Services/Services';
import TopBanner from '../Shared/TopBanner';
import WhyRX from '../Shared/WhyRX/WhyRX';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <WhyRX></WhyRX>
        </div>
    );
};

export default Home;