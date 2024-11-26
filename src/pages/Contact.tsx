import { IonRow, IonCol } from '@ionic/react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="section-title">
        <h1>CONTATO</h1>
      </div>

      <IonRow>
        <IonCol>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam vel quasi ut, dolorem quibusdam esse doloribus? Cum
            ipsum voluptate repellendus asperiores expedita voluptatem
            ipsa quibusdam, provident odit, a consequatur? Temporibus!
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam vel quasi ut, dolorem quibusdam esse doloribus? Cum
            ipsum voluptate repellendus asperiores expedita voluptatem
            ipsa quibusdam, provident odit, a consequatur? Temporibus!
          </p>
        </IonCol>
        <IonCol>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam vel quasi ut, dolorem quibusdam esse doloribus? Cum
            ipsum voluptate repellendus asperiores expedita voluptatem
            ipsa quibusdam, provident odit, a consequatur? Temporibus!

            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam vel quasi ut, dolorem quibusdam esse doloribus? Cum
            ipsum voluptate repellendus asperiores expedita voluptatem
            ipsa quibusdam, provident odit, a consequatur? Temporibus!
          </p>
        </IonCol>
      </IonRow>
      {/* <hr style={{ width: '100%' }} /> */}
    </>
  );
}

export default Contact;