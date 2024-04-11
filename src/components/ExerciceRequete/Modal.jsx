/* eslint-disable react/prop-types */
export const Modal = ({ content }) => {
    
  return (
        <dialog id="my_modal" className="modal">
          <div className="w-full modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
                ✕
              </button>
            </form>
              {content}
          </div>
        </dialog>
      );
}