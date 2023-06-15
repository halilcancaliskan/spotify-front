import React from 'react';
import logo from '../logo.png';
import '../App.css';
import { Card } from 'react-bootstrap';

const Home = () => {
    const cards = [];

    for (let i = 1; i <= 15; i++) {
        cards.push({
            title: `Card ${i}`,
            text: `This is the card number ${i}`,
            image: "https://medias.cerveauetpsycho.fr/api/v1/images/view/5b2b7fdc3e45460c12633d1f/wide_1300/image.jpg",
            link: `/card${i}`
        });
    }


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code>Spotify</code>
                </p>
                <div className="row">
                    <div className="container mt-2">
                        <a
                            className="App-link"
                            href="/resources"
                            rel="noopener noreferrer"
                        >
                            resources
                        </a>
                        <a
                            className="App-link"
                            href="/contact"
                            rel="noopener noreferrer"
                        >
                            contact
                        </a>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        {cards.map(card => (
                            <div className="col-md-4" key={card.title}>
                                <Card className="mb-4">
                                    <Card.Img variant="top" src={card.image} />
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.text}</Card.Text>
                                        <a href={card.link} className="btn btn-success">
                                            Play
                                        </a>
                                        <a href={card.link} className="btn btn-primary">
                                            Add playlist
                                        </a>
                                        <a href={card.link} className="btn btn-danger">
                                            Remove playlist
                                        </a>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Home;
