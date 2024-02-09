import css from "./Profile.module.css";

export const Profile = ({ name, tag, location, image, stats }) => {
    return (<div className={css.profileContainer}>
 <div>
   <img
    src={image}
    alt="User avatar"
    className={css.profileImage}
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>@{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}>
     <span>Views</span>
     <span>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
     <span>Likes</span>
    <span>{stats.likes}</span>
    </li>
   </ul>
</div>
)
};