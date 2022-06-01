import React from "react";
import { useSelector } from "react-redux";
import Element from "../components/Element";
import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);

  const data = useSelector((state) => state.nomina.data);

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="center">
          Hola{" "}
          {auth.displayName === "Gowther"
            ? auth.displayName + "🐺"
            : auth.displayName}
        </h3>
        <hr />
        <FormAdd />

        <hr />

        <table className="highlight centered">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {data.map((elemento) => {
              return (
                <tr key={elemento.id}>
                  <Element data={elemento} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppScreen;
