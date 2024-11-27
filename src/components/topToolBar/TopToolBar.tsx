import { IonToolbar } from "@ionic/react";
import { useState } from "react";
import "./TopToolBar.css";

function Topbar() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (sectionId: string) => {
    setSelected(sectionId);

    // Rolar suavemente até a seção
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <IonToolbar>
      <div className="topbar-container">
        <ul className="menu">
          <li
            className={selected === "HOME" ? "selected" : ""}
            onClick={() => handleSelect("HOME")}
          >
            HOME
          </li>
          <li
            className={selected === "BANDA" ? "selected" : ""}
            onClick={() => handleSelect("BANDA")}
          >
            BANDA
          </li>
          <li
            className={selected === "AGENDA" ? "selected" : ""}
            onClick={() => handleSelect("AGENDA")}
          >
            AGENDA
          </li>
          <li
            className={selected === "CONTATO" ? "selected" : ""}
            onClick={() => handleSelect("CONTATO")}
          >
            CONTATO
          </li>
        </ul>
      </div>
    </IonToolbar>
  );
}

export default Topbar;
