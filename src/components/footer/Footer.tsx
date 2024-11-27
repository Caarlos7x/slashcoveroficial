import { IonFooter, IonGrid, IonRow, IonCol } from '@ionic/react';
import './footer.css';

function Footer() {
  return (
    <IonFooter className="full-width-footer">
      <IonGrid>
        <IonRow class='full-width-footer'>
          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <a href="home">
                {/* <h3>HOME</h3> */}
                <div className="img-footer"></div>
              </a>
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              
            </div>
          </IonCol>

          <IonCol size="12" size-sm="6" size-md="6" size-lg="4">
            <div className="footer-column">
              <h3><a href="https://www.instagram.com/slashcover.oficial/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></h3>
              <h3><a href="https://www.instagram.com/slashcover.oficial/" target="_blank" rel="noopener noreferrer">TIKTOK</a></h3>
              <h3><a href="https://www.instagram.com/slashcover.oficial/" target="_blank" rel="noopener noreferrer">FACEBOOK</a></h3>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonFooter>
  );
}

export default Footer;