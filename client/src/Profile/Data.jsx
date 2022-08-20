import DataField from "./DataField.jsx";
import { Stars } from "../general-components";

const NUMBER_OF_STARS = 5;

const Data = ({ student }) => {
  return (
    <div className="grid grid-rows-3 grid-cols-6 p-8 gap-x-8 gap-y-4">
      <div className="row-start-1 row-end-2 col-start-1 col-end-7">
        <DataField
          label="Nombre de usuario"
          data={student.username}
        />
      </div>

      <div className="row-start-2 row-end-3 col-start-1 col-end-3">
        <DataField
          label="Nombre"
          data={student.name}
        />
      </div>

      <div className="row-start-2 row-end-3 col-start-3 col-end-5">
        <DataField
          label="Primer apellido"
          data={student.surname1}
        />
      </div>

      <div className="row-start-2 row-end-3 col-start-5 col-end-7">
        <DataField
          label="Segundo apellido"
          data={student.surname2}
        />
      </div>

      <div className="row-start-3 row-end-4 col-start-1 col-end-4">
        <DataField
          label="Reputación"
          data={<Stars number={student.reputation / NUMBER_OF_STARS} />}
        />
      </div>

      <div className="row-start-3 row-end-4 col-start-4 col-end-7">
        <DataField
          label="Número de teléfono"
          data={student.phone_number}
        />
      </div>
    </div>
  );
};

export default Data;