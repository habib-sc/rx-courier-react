import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import TopBanner from '../Shared/TopBanner';
import WhyRX from '../Shared/WhyRX/WhyRX';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Services></Services>
            <WhyRX></WhyRX>
            <Footer></Footer>
        </div>
    );
};

export default Home;