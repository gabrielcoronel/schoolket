import useAsync from '../hooks/useAsync.js';
import * as Server from '../util/server-util.js';
import Avatar from './Avatar.jsx';
import Data from './Data.jsx';
import Loading from '../app-components/Loading.jsx';
import './Profile.css';

const Profile = ({ username }) => {
  const avatarURL = Server.getStudentAvatarURL(username);
  const student = useAsync(() => Server.getStudent(username));

  if (student === null)
    return <Loading />;

  return (
    <div className="w-4/5 bg-white rounded-xl shadow-2xl m-auto">
      <div className="flex flex-row justify-center pt-8">
        <Avatar url={avatarURL} />
      </div>

      <Data student={student} />
    </div>
  );
};

export default Profile;