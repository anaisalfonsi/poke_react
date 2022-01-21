import React from "react";
import { Catched } from "..";

const Header = ({ inBag }) => {
  return (
    <header>
      <nav>
        <Catched inBag={inBag} />
      </nav>
    </header>
  );
};

export default Header;
