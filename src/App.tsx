import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import ModalComponent from "./components/ModalComponent";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="container mx-auto">
      <ModalComponent show={show} setShow={setShow} />
      <div className="text-center">
        <p className="text-3xl">Chavales Crew</p>
        <nav className="text-3xl underline">
          <Link to="/second">Second Page</Link> |{" "}
          <Link to="/third">Third Page</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
