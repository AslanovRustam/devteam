import s from "./main.module.css";
import Card from "./card";
import items from "../../db.json";

export default function Main() {
  return (
    <div className={s.listOfCard}>
      <ul className={s.itemsContainer}>
        {items.map((item) => (
          <li key={item.id} className={s.cardContainer}>
            <Card
              name={item.name}
              url={item.url}
              price={item.price}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
