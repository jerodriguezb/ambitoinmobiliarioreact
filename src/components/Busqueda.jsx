import React from "react";

const Busqueda = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setInputValue(e.target.value);
    //console.log(e);
  };
  return (
    <div className="col-6 offset-3">
      <input
        type="text"
        className="form-control"
        placeholder="Propiedad a buscar..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Busqueda;
