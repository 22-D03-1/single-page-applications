import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Article from './components/Article/Article';
import data from './data';
import "./App.scss"

const articles = data.map((el, i) => {
    const full = i == 0 ? true : false
    return (
        <Col lg={i != 0 ? true : 16} key={i} className="pb-5 px-3">
            <Article topCard={ i== 0 ? true : false} article={el}/>
        </Col>
    )
})

function App() {
    return (
        <div className="App">
            <header className="text-white">
                <h1 class="text-center">Ferdis Blog</h1>
            </header>
            <Container fluid="sm" className="container-offset">
                <Row>
                    {articles}
                </Row>
            </Container>
        </div>
    )
}

export default App