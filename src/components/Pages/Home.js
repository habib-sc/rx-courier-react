import CallToAction from '../Shared/CallToAction';
import Contact from '../Shared/Contact';
import FAQ from '../Shared/FAQ';
import Pricing from '../Shared/Pricing/Pricing';
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
            <Pricing></Pricing>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;