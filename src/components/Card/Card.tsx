import { FC } from "react";
import styles from "./Card.module.scss";

interface Props {
  image: string;
  bgColor: string;
  name: string;
}

const Card: FC<Props> = ({ image, bgColor, name }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image} style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.card__name}>{name}</p>
    </div>
  );
};

export default Card;
