import "./SingleCard.css";
import { Card } from "./../App";
import cover from "../img/cover.png";

interface SingleCardProps {
  card: Card;
  flipped: boolean;
  handleChoice: (card: Card) => void;
  disabled: boolean;
}

const SingleCard: React.FC<SingleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src={cover}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
