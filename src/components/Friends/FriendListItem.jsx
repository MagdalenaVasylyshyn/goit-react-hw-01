import css from "./FriendList.module.css"

export const FriendListItem = ({ user: { avatar, name, isOnline } }) => {
    return (
<div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={isOnline ? css.friendIsOnline : css.friendIsOffline }>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}