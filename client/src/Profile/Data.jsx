import DataField from "./DataField.jsx";

const Data = ({ student }) => {
  return (
    <div>
      <DataField
        label="Nombre de usuario"
        data={student.username}
      />

      <DataField
        label="Nombre"
        data={student.name}
      />

      <DataField
        label="Primer apellido"
        data={student.surname1}
      />

      <DataField
        label="Segundo apellido"
        data={student.surname2}
      />

      <DataField
        label="Reputación"
        data={student.reputation}
      />

      <DataField
        label="Número de teléfono"
        data={student.phone_number}
      />
    </div>
  );
};

export default Data;