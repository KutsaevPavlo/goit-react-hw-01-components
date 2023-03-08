import {FriendListItem} from './FriendListItem';
import css from "./Friends.module.css";
import PropTypes from "prop-types";

export const FriendList = ({friends}) => (
<ul className={css.friendList}>
  <FriendListItem friends={friends}/>
</ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact
    ({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

    }))
};