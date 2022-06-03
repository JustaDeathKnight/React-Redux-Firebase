import React from "react";
import { useDispatch } from "react-redux";
import { eliminarRegistro } from "../actions/nomina";

const Element = ({ data }) => {
  const { fecha, pago, id } = data;

  const dispatch = useDispatch();

  let fechaFormateada;

  if (fecha.seconds) {
    fechaFormateada = fecha.toDate().toLocaleDateString();
  } else {
    fechaFormateada = fecha;
  }

  // `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getUTCMinutes()}`;

  const handleDelete = () => {
    dispatch(eliminarRegistro(id));
  };

  return (
    <>
      <td>{fechaFormateada}</td>
      <td>{pago}</td>
      <td>
        <button
          className="btn waves-effect waves-light red darken-4"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </td>
    </>
  );
};

export default Element;
