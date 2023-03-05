import {FriendListItem} from './FriendListItem'

export const FriendList = ({friends}) => (
<ul class="friend-list">
  <FriendListItem friends={friends}/>
</ul>
);