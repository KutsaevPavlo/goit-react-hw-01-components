import css from "./Friends.module.css";
import clsx from "clsx";

export const FriendListItem = ({friends}) => {
    return friends.map(friend =>{
            return (
                <li className={css.item}>
                <span className={clsx(css.status, friend.isOnline && css.isOnline)}></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
              </li>
          );         
        });

}

