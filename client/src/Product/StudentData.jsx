import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Stars } from '../general-components';
import { Link } from 'react-router-dom';

const NUMBER_OF_STARS = 5;

const roundToTwoDigits = (num) => Number(num.toFixed(2));

const splitInHalf = (str) => {
  const length = str.length;
  const first = str.slice(0, length / 2);
  const second = str.slice(length / 2);

  return [first, second];
};

const normalizePhoneNumber = (phoneNumber) =>
  splitInHalf(phoneNumber).join(" ");

const StudentData = ({ student }) => {
  const {
    username, name, surname1, surname2,
    reputation, phone_number
  } = student;
  const fullName = `${name} ${surname1} ${surname2}`;
  const normalizedPhoneNumber = normalizePhoneNumber(phone_number);

  return (
    <div className="bg-blue-800 text-white grid grid-rows-3 grid-cols-4 gap-1 p-4 w-full">
      <Link
        to={`/student/${username}`}
        className="text-sm font-bold italic row-start-1 row-end-2 col-start-1 col-end-4"
      >
        {username}
      </Link>

      <span
        className="text-md font-bold row-start-2 row-end-3 col-start-1 col-end-4"
      >
        {fullName}
      </span>

      <span
        className="row-start-1 row-end-2 col-start-4 col-end-5"
      >
        {<Stars number={reputation / NUMBER_OF_STARS} />}
      </span>

      <span
        className="row-start-3 row-end-4 col-start-1 col-end-4"
      >
        <FontAwesomeIcon icon={faPhone} />
        &nbsp;
        {normalizedPhoneNumber}
      </span>
    </div>
  );
};

export default StudentData;