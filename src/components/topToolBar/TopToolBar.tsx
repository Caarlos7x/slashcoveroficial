import { IonToolbar } from "@ionic/react";
import { useState } from 'react';
import './TopToolBar.css'



function Topbar() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <>
      <IonToolbar>
        <div className="topbar-container">
          <ul className="menu">
            <li 
              className={selected === 'HOME' ? 'selected' : ''} 
              onClick={() => handleSelect('HOME')}
            >
              HOME
            </li>
            <li 
              className={selected === 'BANDA' ? 'selected' : ''} 
              onClick={() => handleSelect('BANDA')}
            >
              BANDA
            </li>
            <li 
              className={selected === 'AGENDA' ? 'selected' : ''} 
              onClick={() => handleSelect('AGENDA')}
            >
              AGENDA
            </li>
            <li 
              className={selected === 'CONTATO' ? 'selected' : ''} 
              onClick={() => handleSelect('CONTATO')}
            >
              CONTATO
            </li>
          </ul>
        </div>
      </IonToolbar>
    </>
  )
}

export default Topbar;