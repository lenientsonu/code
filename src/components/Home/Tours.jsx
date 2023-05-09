import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import './Tours.css'

const Tours = () => {
    return (
        <Container className="tours">
            <h2>Tours</h2>
            <Table striped hover>
                <tbody>
                    <tr>
                        <td>JUL 16</td>
                        <td>DETROIT, MI</td>
                        <td>DTE ENERGY MUSIC THEATRE</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>JUL 19</td>
                        <td>TORONTO,ON</td>
                        <td>BUDWEISER STAGE</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>JUL 22</td>
                        <td>BRISTOW, VA</td>
                        <td>JIGGY LUBE LIVE</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>JUL 29</td>
                        <td>PHOENIX, AZ</td>
                        <td>AK-CHIN PAVILION</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>AUG 2</td>
                        <td>LAS VEGAS, NV</td>
                        <td>T-MOBILE ARENA</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                    <tr>
                        <td>AUG 7</td>
                        <td>CONCORD, CA</td>
                        <td>CONCORD PAVILION</td>
                        <td>
                            <Button variant='primary'>Buy Tickets</Button>{" "}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
};

export default Tours;
