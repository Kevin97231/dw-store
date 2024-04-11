/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Modal } from "./Modal";
import { ProductForm } from "./ProductForm";

/* eslint-disable react/prop-types */
export const Table = ({ data = [], remove, update }) => {
  let cles = [];

  const [productToModify, setProductToModify] = useState(undefined);

  if (data.length > 0) {
    cles = Object.keys(data[0]);
  }

  const handleUpdate = (product) => {
    setProductToModify(product);
    document.getElementById("my_modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal").close(); // Fermer le modal
  };

  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {cles.map((cle, index) => (
              <th key={`${cle} + ${index}`}>{cle}</th>
            ))}
            <th>Modifier / Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`${item} + ${index}`}>
              {cles.map((cle, index) => (
                <td key={`${cle} + ${index}`}>{item[cle]}</td>
              ))}
              <td>
                <button
                  className="mr-5 btn btn-warning"
                  onClick={() => handleUpdate(item)}
                >
                  Modifier
                </button>

                <button
                  className="mr-5 btn btn-error"
                  onClick={() => remove(item)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        content={
          <ProductForm
            productToModify={productToModify}
            submitMethod={update}
            closeModal={closeModal}
          />
        }
      />
    </div>
  );
};
