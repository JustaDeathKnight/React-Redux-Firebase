import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearRegistro } from "../actions/nomina";

const FormAdd = () => {
  const dispatch = useDispatch();

  const [viewForm, setViewForm] = useState(false);

  const [cantidadPago, setCantidadPago] = useState({ precioHora: 0, horas: 0 });

  const { precioHora, horas } = cantidadPago;

  const handleAdd = () => {
    setViewForm(!viewForm);
  };

  const handleChange = (e) => {
    setCantidadPago({ ...cantidadPago, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const cantidadFinal = precioHora * horas;
    dispatch(crearRegistro(cantidadFinal));

    setCantidadPago({ precioHora: "", horas: "" });
  };

  return (
    <>
      <button onClick={handleAdd} className="btn green">
        {!viewForm ? "Agregar" : "Cerrar"}
      </button>
      {viewForm && (
        <div className="container">
          <label className="form-add">
            <h5 className="center">Agregar Nuevo Registro</h5>
            <hr />
            <input
              type="number"
              step="0.01"
              placeholder="Ingrese pago por horas"
              value={precioHora || ""}
              onChange={handleChange}
              name="precioHora"
            />

            <input
              type="number"
              step="0.01"
              placeholder="Ingrese horas trabajadas"
              value={horas || ""}
              onChange={handleChange}
              name="horas"
            />

            <button
              className="btn waves-effect waves-light blue darken-4"
              type="submit"
              name="action"
              onClick={handleSave}
            >
              Guardar
              <i className="material-icons right">save</i>
            </button>
          </label>
        </div>
      )}
    </>
  );
};

export default FormAdd;
