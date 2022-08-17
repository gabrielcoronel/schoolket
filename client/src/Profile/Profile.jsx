import { useState, useEffect } from 'react';
import * as Server from '../util/server-util.js';
import Avatar from './Avatar.jsx';
import Data from './Data.jsx';

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
    <div>
      <Avatar url={avatarURL} />

      <Data student={student} />
    </div>
  );
};

export default Profile;