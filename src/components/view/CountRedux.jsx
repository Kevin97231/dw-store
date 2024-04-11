/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counterSlice";

export const CountRedux = () => {
  // S'abonner au store et pouvoir récupérer des valeurs.
  const count = useSelector((state) => state.counter.value);

  // Pour envoyer un évènement de modification de l'état
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count avec redux</h1>
      <p className="w-full">
        Je récupère mes données avec Redux en m'abonnement (et donc sans
        utiliser le hook useState)
      </p>
      <div className="m-auto mt-5 border w-fit">
      <p className="py-5 m-auto w-fit bold">{count}</p>
      <div className="flex p-2 m-auto w-fit">
       
          <button className="m-2 btn" onClick={() => dispatch(increment())}>
            +
          </button>
          <button className="m-2 btn" onClick={() => dispatch(decrement())}>
            -
          </button>
      </div>
      </div>
      
    </div>
  );
};