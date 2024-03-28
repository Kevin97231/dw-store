import { Modal } from "./Modal";

/* eslint-disable react/prop-types */
export const Table = ({data=[], remove}) => {
    let cles = [];

    if (data.length > 0){
        cles = Object.keys(data[0])     
    }
  
    return (
        <div className="overflow-x-auto">
            <table>
                <thead>
                    <tr>
                        {
                            cles.map( (cle, index) =>
                            {  return cle !=='id' &&  <th key={`${cle} + ${index}`}>{cle}</th>}  
                            )
                        }
                            { data < 0 && <th>Modifier / Supprimer</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                     data.map( (item, index)  => 
                        <tr key={`${item} + ${index}`}>
                            { cles.map( (cle, index) =>
                                cle === 'image' ? 
                                    (<td key={`${cle} + ${index}`}>
                                        <img src={item[cle]} alt="" />
                                    </td>)
                                    :
                                    (cle !== 'id' && <td key={`${cle} + ${index}`}>{item[cle]}</td>)
                            )}
                            <td>
                                <button
                                    className="btn mr-5 btn-warning"
                                    onClick={() => document.getElementById('my_modal').showModal()}
                                    >Modifier
                                </button>
            
                                <button
                                    className="btn mr-5 btn-error"
                                    onClick={() => remove(item)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <Modal content='content'/>
        </div>
  );
}