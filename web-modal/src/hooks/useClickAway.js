import { useCallback, useEffect, useRef } from "react";

export default function useClickAway(cb) {
  const ref = useRef(null);
  const onEventClickhandler = useCallback(
    (e) => {
      console.log("event triggered");
      const element = ref.current;
      if (element && !element.contains(e.target)) {
        cb(e);
      }
    },
    [cb]
  );
  useEffect(() => {
    document.addEventListener("mousedown", onEventClickhandler);
    document.addEventListener("touchstart", onEventClickhandler);

    return () => {
      document.removeEventListener("mousedown", onEventClickhandler);
      document.removeEventListener("touchstart", onEventClickhandler);
    };
  }, []);
  return ref;
}
