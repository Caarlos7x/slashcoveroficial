import { IonRow, IonCol } from '@ionic/react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="section-title">
        <h1>CONTATO</h1>
      </div>

      <IonRow>
        <IonCol class='contact-col1'>
          <div className="contact-img"></div>
        </IonCol>
        <IonCol class='contact-col2'>
          <h2>Para shows entre em contato</h2>
          <p>
            <a href="mailto:contato@slashcoveroficial.com.br">CONTATO@SLASHCOVEROFICIAL.COM.BR</a>
          </p>
        </IonCol>
      </IonRow>
      {/* <hr style={{ width: '100%' }} /> */}
    </>
  );
}

export default Contact;