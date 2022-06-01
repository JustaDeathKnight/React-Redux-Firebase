import React from "react";

const Element = ({ data }) => {
  const { fecha, pago } = data;

  let fechaFormateada;

  if (fecha.seconds) {
    fechaFormateada = fecha.toDate().toLocaleDateString();
  } else {
    fechaFormateada = fecha;
  }

  // `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getUTCMinutes()}`;

  return (
    <>
      <td>{fechaFormateada}</td>
      <td>{pago}</td>
      <td>
        <button className="btn waves-effect waves-light red darken-4">
          Eliminar
        </button>
      </td>
    </>
  );
};

export default Element;
