import { FC } from "react";
import classNames from "classnames";
import styles from "./Menu.module.scss";

interface Props {
  activeTag: string;
  tagList: string[];
  onTagClick: (item: string) => void;
}

const Menu: FC<Props> = ({ activeTag, tagList, onTagClick }) => {
  return (
    <ul className={styles.menu}>
      {tagList.map((item) => (
        <li
          key={item}
          className={classNames(styles.menu__item, {
            [styles.active]: item === activeTag,
          })}
          onClick={() => onTagClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
