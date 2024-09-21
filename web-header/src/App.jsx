import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [Modal, setModal] = useState(null);

  useEffect(() => {
    console.log("Attempting to dynamically import Modal");
    import("modal/Modal")
      .then((module) => {
        console.log("Module loaded successfully:", module);
        setModal(() => module.default);
      })
      .catch((error) => {
        console.error("Failed to load module:", error);
      });
  }, []);
  return (
    <>
      <h2>MicroFrontend Architecture</h2>
      <p className="text">Dynamically imported Modal </p>
      {Modal ? <Modal /> : "Loading"}
    </>
  );
}

export default App;
