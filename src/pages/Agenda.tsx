import { IonCol, IonRow } from '@ionic/react';
import './Agenda.css';

function Agenda() {
  return (
    <>
      <div className="section-title">
        <h1>AGENDA</h1>
      </div>
      <div className="section-subtitle">
        <h3>
          LIVING THE DREAM
          SÃO PAULO TOUR
        </h3>
      </div>

      <div className="container-agenda">
        <IonRow>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="6" className="sec-agenda-col">
            <h2>NOVEMBRO</h2>
            <ul className="agenda-list">
              <li>10/11 - <strong>Manifesto Bar</strong></li>
              <li>16/11 - <strong>Morrison Rock Bar</strong></li>
              <li>22/11 - <strong>B Music Bar</strong></li>
              <li>26/11 - <strong>Manifesto Bar</strong></li>
              <li>10/12 - <strong>Manifesto Bar</strong></li>
              <li>16/12 - <strong>Morrison Rock Bar</strong></li>
              <li>22/12 - <strong>B Music Bar</strong></li>
              <li>26/12 - <strong>Manifesto Bar</strong></li>
            </ul>
          </IonCol>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="6" className="sec-agenda-col">
            <h2>DEZEMBRO</h2>
            <ul className="agenda-list">
              <li>10/12 - <strong>Manifesto Bar</strong></li>
              <li>16/12 - <strong>Morrison Rock Bar</strong></li>
              <li>22/12 - <strong>B Music Bar</strong></li>
              <li>26/12 - <strong>Manifesto Bar</strong></li>
              <li>10/12 - <strong>Manifesto Bar</strong></li>
              <li>16/12 - <strong>Morrison Rock Bar</strong></li>
              <li>22/12 - <strong>B Music Bar</strong></li>
              <li>26/12 - <strong>Manifesto Bar</strong></li>
            </ul>
          </IonCol>
        </IonRow>
      </div>
      <hr style={{ width: '100%' }} />
    </>
  );
}

export default Agenda;