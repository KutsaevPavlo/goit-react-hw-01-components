import {FriendListItem} from './FriendListItem';
import css from "./Friends.module.css";

export const FriendList = ({friends}) => (
<ul className={css.friendList}>
  <FriendListItem friends={friends}/>
</ul>
);