import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with { , , ,, ﰆ, μ,  :[ ,漢], ,  }  by ThatOneCalculator/Kainoa Kanter")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Art by{" "}
          <a href="https://twitter.com/faffreux">
         	@faffreux
          </a>
          , theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>. Get the {" "}
          <a href="https://github.com/ThatOneCalculator/t1c.dev-premid-presence">
          	PreMiD presence
          </a>, because why not?
        </p>
      </div>
    </Fade>
  );
}
