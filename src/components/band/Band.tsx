import { IonCol, IonRow } from "@ionic/react";
import './Band.css';

import videoSrc from '../../assets/video.mp4';

function Band() {
  return (
    <>
      <div className="section-title">
        <h1>BANDA</h1>
      </div>
      <div className="band-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <IonRow>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="6" className="sec-band-col1">
            <h2>Tributo Slash feat. Myles Kennedy and the Conspirators – São Paulo, Brasil</h2>
            <p>
              Diretamente de São Paulo, Brasil, a banda <strong>Slash Cover Oficial</strong> se destaca 
              como um tributo fiel ao lendário Slash feat. Myles Kennedy and the Conspirators. 
              Formada por músicos experientes e apaixonados, a proposta da banda é recriar, 
              com qualidade e autenticidade, a magia das músicas que marcaram as tours dessa 
              parceria icônica. 
              <br /><br />
              Desde os riffs marcantes de Slash até a potência vocal de Myles Kennedy, a 
              banda trabalha com dedicação para entregar performances que transportam o 
              público diretamente para os shows originais. No setlist, estão os maiores 
              sucessos das turnês, como <strong>"Anastasia", "World on Fire", e "You're a Lie"</strong>, 
              além de momentos clássicos que os fãs de todas as gerações adoram reviver.

              <br /><br />
              Se você é fã de rock n' roll e admira a força dessa parceria entre um dos 
              maiores guitarristas da história e uma das vozes mais poderosas do gênero, 
              venha conferir a energia e a emoção do tributo <strong>Slash Cover Official</strong>. 
              Mais do que um cover, somos uma celebração ao legado de Slash feat. 
              Myles Kennedy and the Conspirators, feita por quem entende e vive a paixão pela música!
            </p>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="6" className="sec-band-col2">
            <div className="band-txt"></div>
          </IonCol>

        </IonRow>
      </div>
      <hr style={{ width: '100%' }} />
    </>
  );
}

export default Band;