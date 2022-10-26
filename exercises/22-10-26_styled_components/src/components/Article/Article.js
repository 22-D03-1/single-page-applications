import "./Article.scss"
import Card from 'react-bootstrap/Card';

function Article({ article, topCard }) {
  return (
    <Card className="border-0" id={topCard ? "top-card-img" : false}>
      <Card.Img src={article.img} />
      <Card.Body id={topCard ? "top-card-body" : false}>
        <Card.Subtitle className="text-muted">{article.topic}</Card.Subtitle>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Article;