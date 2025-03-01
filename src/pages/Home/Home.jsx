import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";


const Home = () => {
    /* loading phones data here and sending to phones components as props */
    const phones = useLoaderData();

    return (
        <div className="mt-4">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;