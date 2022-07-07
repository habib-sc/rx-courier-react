import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import TopBanner from '../Shared/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;