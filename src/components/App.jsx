import userData from '../userData.json';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </>
  );
}
{
  /* shift+alt+A */
}
