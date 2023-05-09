import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import YtIcon from "../../assets/yt-logo.jpg";
import SpotifyIcon from "../../assets/spotify-logo.png";
import FbIcon from "../../assets/fb-Logo.png";

import "./Footer.css";

const Footer = () => {
    return (
        <Container className='icons'>
                <h3>The Generecis</h3>
                    <Stack direction='horizontal' gap={3}>
                        <a href='https://www.youtube.com'>
                            <img src={YtIcon} alt='' />
                        </a>
                        <div className="vr" />
                        <a href='https://spotify.com'>
                            <img src={SpotifyIcon} alt='' />
                        </a>
                        <div className="vr" />
                        <a href='https://facebook.com'>
                            <img src={FbIcon} alt='' />
                        </a>
                    </Stack>
        </Container>
    );
};

export default Footer;
