import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Tab1.scss';
import { Route, Router } from 'react-router';

import { useHistory } from 'react-router-dom';

const handleClick = () => {
  console.log('Card clicked');
  const history = useHistory();
  history.push('/Login');
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid class="ion-justify-content-center">
          <IonRow>
            <IonCol>
            <a href="/tab4">
            <IonCard onClick={handleClick}>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                  <IonCardTitle>Clock In</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </a>
            </IonCol>
            <IonCol>
            <a href="">
            <IonCard onClick={handleClick}>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                  <IonCardTitle>Clock Out</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </a>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <a href="">
            <IonCard onClick={handleClick}>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                  <IonCardTitle>Summary</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </a>
            </IonCol>
            <IonCol>
            <a href=''>
            <IonCard >
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                  <IonCardTitle>Request</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </a>
            </IonCol>
          </IonRow>
          <IonButton routerLink="/Login">Login</IonButton>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
