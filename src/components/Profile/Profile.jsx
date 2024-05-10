export default function Profile({
  user: {
    username,
    ttag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <>
      <div>
        <img src={avatar} alt={avatar} width="150"></img>
        <p>{username} </p>
        <p></p>
        <p>{location} </p>
      </div>

      <ul>
        <li>
          <span>followers </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>views </span>
          <span>{views}</span>
        </li>
        <li>
          <span>likes </span>
          <span>{likes}</span>
        </li>
      </ul>
    </>
  );
}
