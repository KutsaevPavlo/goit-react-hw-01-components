import {FriendListItem} from './FriendListItem';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => (
  <FriendListItem friends={friends}/>
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