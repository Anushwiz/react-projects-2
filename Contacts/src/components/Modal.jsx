import { AiFillCloseCircle } from 'react-icons/ai';
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center">
            <div className="relative z-50 m-auto min-h-[200px] min-w-[480px] rounded-lg bg-zinc-100 p-4">
              <AiFillCloseCircle
                onClick={onClose}
                className="absolute right-4 top-4 h-6 w-6 cursor-pointer"
              />
              {children}
            </div>
          </div>
          <div className="absolute left-0 top-0 z-40 h-screen w-screen bg-zinc-900/70 backdrop-blur" />
        </>
      )}
    </>,
    document.getElementById('modal-root'),
  );
}

export default Modal;
