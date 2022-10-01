import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


// 3 segundos
const TIMEOUT = 5 * 1000;

const JustReportedMessage = ({ updateJustReported }) => {

  const disableJustReported = () => updateJustReported(false);

  useEffect(() => {
    setTimeout(disableJustReported, TIMEOUT);
  }, []);

  return (
    <div
      className="w-1/3 flex flex-row justify-center items-center gap-2 bg-green-600 text-white rounded-md shadow-2xl mx-auto p-2"
    >
      <button
        className="w-2 h-2 flex flex-row justify-center items-center text-center hover:bg-white hover:text-green-600 rounded-full p-4"
        onClick={disableJustReported}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      Tu reporte se ha realizado exitosamente
    </div>
  );
};

export default JustReportedMessage;