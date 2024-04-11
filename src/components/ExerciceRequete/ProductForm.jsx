/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ProductForm = ({ productToModify = {}, submitMethod, closeModal }) => {
  const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm();

  useEffect(() => {
    // Met à jour les valeurs des champs du formulaire lorsque productToModify change
    let keys = []
    Object.keys(productToModify).forEach(key => {
        clearErrors(key)
        setValue(key, productToModify[key]);
        keys.push(key)
    });
  }, [productToModify, setValue, clearErrors]);

  const onSubmit = (data) => {
    submitMethod(data, productToModify);
    closeModal();
  };

  return (
    <>
      <h1>{productToModify ? 'Remplir pour modifier le produit' : 'Ajouter un nouveau produit'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div><span>name</span></div>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: 'Nom requis',
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ \-']+$/,
                message: 'Ne rentrer que des lettres !'
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          <div><span>price</span></div>
          <input
            type="number"
            name="price"
            {...register("price", {
              required: 'Prix requis',
              max: { value: 10, message: 'valeur max -> 10' },
              min: { value: 0, message: 'valeur min -> 0' }
            })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </label>

        <label>
          <div><span>number</span></div>
          <input
            type="number"
            name="number"
            {...register("number", {
              required: 'Nombre requis',
              min: { value: 0, message: 'valeur min -> 0' }
            })}
          />
          {errors.number && <span>{errors.number.message}</span>}
        </label>

        <label>
          <div><span>category</span></div>
          <input
            type="text"
            name="category"
            {...register("category")}
          />
        </label>

        <button type="submit">Soumettre</button>
      </form>
    </>
  );
};

export default ProductForm;
