/* eslint-disable react/prop-types */
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useContext, cloneElement, useState, createContext } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
// 1. creating a context
const ModalContext = createContext();

// 2. CRATING A PAENT COMPENET
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  // PROVIDING CONTEXT(STATES) FOR THE CHILDREN BY WRAPPING THEM INSIDE THE PROVIDER OF OUR CONTEXT MODALCONTEXT
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

//3. CREATING CHILD COMPONENT
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  //'OPEN' COPONENT IS USED TO WRAP THE BUTTON THAT WILL DECIDE THE OPENING OF THE MODAL WINDOW
  //using cloneElement on children by passing onclick handler so that we can use this open function which is not accessible for the component which we will use inplace of children prop. in this way we are extending the children component to have onclick handler by passing it as prop
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

//3. CREATING CHILD COMPONENT
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

//4. ADDING CHILD COMPONENT AS PROPERTIES TO THE PARENT COMPONENT
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
