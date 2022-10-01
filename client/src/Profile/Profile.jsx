import { useState, useContext } from 'react';
import useAsync from '../hooks/useAsync.js';
import * as Server from '../util/server-util.js';
import Avatar from './Avatar.jsx';
import ReportButton from './ReportButton.jsx';
import Data from './Data.jsx';
import Loading from '../app-components/Loading.jsx';
import JustReportedMessage from './JustReportedMessage.jsx';
import UsernameContext from '../UsernameContext.js';
import './Profile.css';

const Profile = ({ username }) => {
  const avatarURL = Server.getStudentAvatarURL(username);
  const student = useAsync(() => Server.getStudent(username));
  const { value } = useContext(UsernameContext);
  const [justReported, setJustReported] = useState(false);

  if (student === null)
    return <Loading />;

  return (
    <div className="w-4/5 mx-auto mt-6">
      {
        justReported ?
          <JustReportedMessage updateJustReported={setJustReported} /> :
          null
      }

      <div className="bg-white w-full rounded-xl shadow-2xl mt-6 border border-slate-300 p-2">
        {
          (username !== value) ?
            (
              <div className="flex flex-row justify-end items-center">
                <ReportButton
                  username={username}
                  updateJustReported={setJustReported}
                />
              </div>
            ) :
            null
        }

        <div className="flex flex-row justify-center pt-8">
          <Avatar url={avatarURL} />
        </div>


        <Data student={student} />
      </div>
    </div>
  );
};

export default Profile;