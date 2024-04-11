import { useEffect, useState } from "react";
import { Consigne } from "../ExerciceRequete/Consigne";
import { Table } from "../ExerciceRequete/Table";
import { useAxios } from "../../hooks/useAxios";

/* eslint-disable no-unused-vars */
export const ApiWithModal = () => {

  const { loading, error, get, post, put, remove } = useAxios();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("requete en cours");
    get()
      .then((result) => {
        setProducts(result);
        console.log(products);
      })
      // .then(functionThen)
      .catch((error) => console.log(error))
      .finally(() => console.log("requete terminé"));
  }, []);

  const removeProduct = (product) => {
    remove(product.id)
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((productFilter) => product !== productFilter)
        );
      })
      .catch((err) => console.log(err));
  };

  const updateProduct = (requestBody, productToModify) => {
    put(productToModify.id, requestBody)
      .then((response) => {
        console.log(response);

        setProducts((prevProduct) =>
          prevProduct.map((productMap) =>
            // Si je retrouve le produit dans l'ancienne liste on le copie
            // grâce à {... reponse}
            productMap.id === response.id ? { ...response } : productMap
          )
        );
      })
      .catch((err) => console.log(err)); // Fermeture de la parenthèse déplacée ici
  };

  return (
    <div className="">
      <Consigne />
      <Table data={products} remove={removeProduct} update={updateProduct}/>
    </div>
  );
};
