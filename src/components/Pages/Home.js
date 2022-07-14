import CallToAction from '../Shared/CallToAction';
import FAQ from '../Shared/FAQ';
import Hubs from '../Shared/RxHub/Hubs';
import Services from '../Shared/Services/Services';
import TopBanner from '../Shared/TopBanner';
import WhyRX from '../Shared/WhyRX/WhyRX';

const Home = () => {
    return (
        <div name="home">
            <TopBanner></TopBanner>
            <Services></Services>
            <WhyRX></WhyRX>
            <Hubs></Hubs>
            <CallToAction></CallToAction>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;