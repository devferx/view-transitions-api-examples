import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  const handleClick = (ev) => {
    ev.preventDefault();
    if (!document.startViewTransition) {
      navigate(ev.target.getAttribute("href"));
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => navigate(ev.target.getAttribute("href")));
    });
  };

  return (
    <ul>
      <li>
        <a href="/" onClick={handleClick}>
          Home
        </a>
      </li>
      <li>
        <a href="/about" onClick={handleClick}>
          About
        </a>
      </li>
    </ul>
  );
};
