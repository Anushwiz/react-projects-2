import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      //PASSING 3RD ARGUMENT 'TRUE' TO LISTEN THE EVENT IN CAPTURING PHASE
      //THIS WILL ENSURE THAT MODAL IS NOT AUTOMATICALLY CLOSED WITHIN SMALLFRACTION OF TIME OFER WE CLICK ON BUTTON TO OPEN THE MODAL
      //WITHOUT 'TRUE' THE EVENT WILL BE LISTENED IN BUBBLING PHASE SO IN THAT CASE WHEN THE EVEN REACHES UP TO MODAL THE CLICK WILL BE SENSED AS OUTSIDE THE MODAL SO IT WILL BE CLOSED AGAIN
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}
