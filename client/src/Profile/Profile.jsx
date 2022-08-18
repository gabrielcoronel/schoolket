import { useState, useEffect } from 'react';
import * as Server from '../util/server-util.js';
import Avatar from './Avatar.jsx';
import Data from './Data.jsx';
import './Profile.css';

const Profile = ({ username }) => {
  const avatarURL = Server.getStudentAvatarURL(username);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    Server.getStudent(username)
      .then((responseStudent) => setStudent(responseStudent));
  }, []);

  if (student === null)
    return (
      <>
        Cargando
      </>
    );

  return (
    <div className="w-4/5 shadow-xl m-auto">
      <div className="flex flex-row justify-center pt-8">
        <Avatar url={avatarURL} />
      </div>

      <Data student={student} />
    </div>
  );
};

export default Profile;