import Food from "./components/Food/Food"
import Header from "./components/Header/Header";
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./App.scss"

import { ThemeProvider } from "@mui/material";
import { appTheme } from "./themes/theme";


const favoriteFood = [
    {
        name: "Spaghetti Bolognese",
        img: "https://ais.kochbar.de/kbrezept/451209_892854/1200x1200/spaghetti-bolognese-rezept-bild-nr-4003.jpg"
    },
    {
        name: "Hallaca",
        img: "https://www.goya.com/media/7874/hallacas.jpg?quality=80"
    },
    {
        name: "Ghormeh Sabzi",
        img: "https://cdn.gutekueche.de/upload/rezept/11616/ghormeh-sabzi.jpg"
    },
    {
        name: "Sprotten ohne Öl",
        img: "https://essenrezept.de/wp-content/uploads/2021/08/Sprotten-Rezept.jpg"
    }
]

const foodContainer = favoriteFood.map((el, index) => {
    return (
        <Col className="p-3" xs={6} md={4} lg={3} key={index}>
            <Food food={el}/>
        </Col>
    )
})

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <div className="App">
                <Header />
                <Container>
                    <Row md={6}>
                        <Button className="m-3" variant="contained" color="secondary">Filtern</Button>
                    </Row>
                    <Row >
                        {foodContainer}
                    </Row>
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default App