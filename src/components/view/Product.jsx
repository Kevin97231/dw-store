/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Table } from "../Table";
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";

export const Product = () => {
  
  const { loading, error, get, post, put, remove } = useAxios();
  const [products, setProducts] = useState([])

  useEffect( () => {
    console.log('requete en cours')
    get()
      .then((result) => {
        setProducts(result)
        console.log(products)
      })
      // .then(functionThen)
      .catch((error) => console.log(error))
      .finally(() => console.log('requete terminé'))
  }, [])

  const removeProduct = (product) => {
    remove(product.id)
      .then( () => {
        setProducts((prevProducts) => 
          prevProducts.filter((productFilter) => product !== productFilter)
        )
      })
      .catch((err) => console.log(err))
  }
 
  return (
    <>
    <div className="w-3/4 m-auto">
    <Table data={products} remove={removeProduct}/>
      
    </div>
      {/* <button onClick={()=>document.getElementById('my_modal').showModal()}>Ouvrir modal</button>
      <Modal content='content' /> */}
    </>
  );
}