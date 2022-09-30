import { useContext } from 'react';
import useAsync from '../hooks/useAsync.js';
import * as Server from '../util/server-util.js';
import Avatar from './Avatar.jsx';
import ReportButton from './ReportButton.jsx';
import Data from './Data.jsx';
import Loading from '../app-components/Loading.jsx';
import UsernameContext from '../UsernameContext.js';
import './Profile.css';

const Profile = ({ username }) => {
  const avatarURL = Server.getStudentAvatarURL(username);
  const student = useAsync(() => Server.getStudent(username));
  const { value } = useContext(UsernameContext);

  if (student === null)
    return <Loading />;

  return (
    <div className="bg-white w-4/5 rounded-xl shadow-2xl mx-auto mt-6 border border-slate-300 p-2">
      {
        (username !== value) ?
          (
          <div className="flex flex-row justify-end items-center">
            <ReportButton username={username} />
          </div>
          ) :
          null
      }

      <div className="flex flex-row justify-center pt-8">
        <Avatar url={avatarURL} />
      </div>


      <Data student={student} />
    </div>
  );
};

export default Profile;