/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counterSlice"

export const CountRedux = () => {

  // S'abonner au store et pouvoir récupérer des valeurs.
  const count = useSelector((state) => state.counter.value);

  // Pour envoyer un évènement de modification de l'état
  const dispatch = useDispatch();

  return (
    <>
     <h1>Count redux</h1>
     <p>{count}</p>
     <button className="btn" onClick={() => dispatch(increment())}>+</button>
     <button className="btn" onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}