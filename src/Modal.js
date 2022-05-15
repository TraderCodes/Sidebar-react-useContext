import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
   return (
      //  container for modal
      <div className={`modal-overlay `}>
         <div className="modal-container">
            <h3>modal content</h3>
            <buttong className="close-modal-btn">
               <FaTimes />
            </buttong>
         </div>
      </div>
   );
};

export default Modal;
