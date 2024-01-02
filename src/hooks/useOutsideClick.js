import { useEffect, useRef } from "react";

/// to close modal window, on outside click.

export function useOutsideClick(handler, listeneCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler(); // function, that closes modal window
        }
      }
      function handleEscPress(e) {
        if (e.code === "Escape") handler?.();
      }
      document.addEventListener("click", handleClick, listeneCapturing);
      document.addEventListener("keydown", handleEscPress, listeneCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listeneCapturing);
        document.removeEventListener(
          "keydown",
          handleEscPress,
          listeneCapturing
        );
      };
    },
    [handler, listeneCapturing]
  );

  return ref;
}
