import "./SingleCard.css";
import { Card } from "./../App";

interface SingleCardProps {
  card: Card;
}

const SingleCard: React.FC<SingleCardProps> = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
