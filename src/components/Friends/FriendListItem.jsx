import css from "./Friends.module.css";

export const FriendListItem = ({friends}) => {
    return friends.map(friend =>{
            return (
                <li className={css.item}>
                <span className={css.status}></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
              </li>
          );         
        });

}