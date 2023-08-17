import { useState } from "react";
import { flushSync } from "react-dom";

import { Menu } from "../components/Menu";

import ham1 from "../assets/hamburguesa-01.jpg";
import ham2 from "../assets/hamburguesa-02.jpg";
import ham3 from "../assets/hamburguesa-03.jpg";

export const Home = () => {
  const [state, setState] = useState("gallery");
  const [transitionName, setTransitionName] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const handleClick = (ev) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setTransitionName(ev.target.style.viewTransitionName);
        setImageSelected(ev.target.src);
        setState((prev) => (prev === "gallery" ? "full" : "gallery"));
      });
    });
  };

  return (
    <>
      <Menu />
      {state === "gallery" ? (
        <div>
          <h1>Home</h1>
          <img
            src={ham1}
            alt=""
            width={300}
            onClick={handleClick}
            style={{ viewTransitionName: "ham1" }}
          />
          <img
            src={ham2}
            alt=""
            width={300}
            onClick={handleClick}
            style={{ viewTransitionName: "ham2" }}
          />
          <img
            src={ham3}
            alt=""
            width={300}
            onClick={handleClick}
            style={{ viewTransitionName: "ham3" }}
          />
        </div>
      ) : (
        <div>
          <img
            src={imageSelected}
            alt=""
            width={600}
            onClick={handleClick}
            style={{ viewTransitionName: transitionName }}
          />
          <h2>Hamburguesa</h2>
        </div>
      )}
    </>
  );
};
