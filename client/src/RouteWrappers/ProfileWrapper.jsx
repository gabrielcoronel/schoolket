import { useParams } from 'react-router-dom';
import Profile from '../Profile/Profile.jsx';

const ProfileWrapper = () => {
  const params = useParams();

  return <Profile username={params.username} />;
};

export default ProfileWrapper;