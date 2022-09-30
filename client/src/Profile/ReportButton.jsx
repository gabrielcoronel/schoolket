import { useRef } from 'react';
import { IconedLabel } from "../general-components";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { runStrike } from "../util/server-util";

const ReportButton = ({ username}) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    runStrike(username);
    buttonRef.current.disabled = true;
  };

  return (
    <button
      ref={buttonRef}
      className="bg-red-600 text-white text-center rounded-md px-2.5 py-1 hover:underline disabled:bg-slate-500 disabled:hover:no-underline"
      onClick={handleClick}
    >
      <IconedLabel icon={faTriangleExclamation} text="Reportar" />
    </button>
  );
};

export default ReportButton;