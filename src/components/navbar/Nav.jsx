import React, { useState } from "react";
import navbar from "../../../public/nameNav.json";

const Nav = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <header className="header">

        <nav className="nav_menu">
          {navbar.nav1.map((nav, i) => (
            <a
              href = {`#${nav}`}
              key={i}
              onClick = {() => setActive(i)}
              style = {{ 
                color: active === i && "#12edaf",
                borderBottom: active === i && "1px solid #12edaf",
                paddingBottom: "3px",
                transition: ".7s"
              }}
            >
              {navbar.nav2[i]}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Nav;
