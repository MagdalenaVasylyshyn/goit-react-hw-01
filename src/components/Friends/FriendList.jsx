import { FriendListItem } from "./FriendListItem";
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
<ul className={css.friendsList}>
    {friends.map((item) => (
        <li key={item.id} className={css.friendsListItem}>
          <FriendListItem user={item} />
        </li>
    ))}
</ul>
    )
}