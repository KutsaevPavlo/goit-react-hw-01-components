import css from "./Friends.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export const FriendListItem = ({friends}) => {
    return (
    <ul  className={css.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
             
              <li key={id} className={css.item}>
                <span className={clsx(css.status, isOnline && css.isOnline)}></span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
              </li>                             
        ))}
</ul>);
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
