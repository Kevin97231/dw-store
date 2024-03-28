/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const ProductForm = ({productToModify = undefined, submitMethod}) => {
 // isModify est un booleen qui sera à TRUE si la valeur n'est pas nul ou undifened
 const isModify = !!productToModify

 console.log('porduct to modify', productToModify)

 return (
 <>
     { isModify ? (
         <h1>Remplir pour modifier le produit</h1>
     ) : 
     (
         <h1>Ajouter un nouveau produit</h1>
     )
     }
 </>
);
}