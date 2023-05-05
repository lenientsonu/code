import Tours from "../components/Home/Tours";
import Button from "react-bootstrap/Button";

import PlayBtn from '../assets/play.png'

import './Home.css'

const HomePage = () => {
    return (
        <>
            <div className="play">
                <Button variant='outline-info' size="lg">Get our Latest Album</Button>{" "}
                <br />
                <img src={PlayBtn} alt='' />
            </div>
            <Tours />
        </>
    );
};

export default HomePage;
