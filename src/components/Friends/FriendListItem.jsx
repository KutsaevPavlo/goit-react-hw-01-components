import css from "./Friends.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export const FriendListItem = ({friends}) => {
    return friends.map(friend =>{
            return (
                <li key={friend.id} className={css.item}>
                <span className={clsx(css.status, friend.isOnline && css.isOnline)}></span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
              </li>
          );         
        });

}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact
    ({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

    }))
};
