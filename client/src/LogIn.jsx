import { React, useState, useEffect }from 'react'

function NameInput() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name;
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

function LogIn() {
  return (
    <div>
      Iniciar sesión

      <NameInput />
    </div>
  );
}

export default LogIn;