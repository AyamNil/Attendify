import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Tab1.scss';
import { Route, Router } from 'react-router';
import clockin from "/Group 17.png"
import clockout from "/Group 18.png"
import summary from "/Group 20.png"
import request from "/Group 42.png"
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
                <IonCard onClick={handleClick} className="card-container">
                  <img alt="Silhouette of mountains" src={clockin} className="card-image"/>
                  <IonCardHeader>
                    <IonCardTitle>Clock In</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </a>
            </IonCol>
            <IonCol>
              <a href="">
                <IonCard onClick={handleClick} className="card-container">
                  <img alt="Silhouette of mountains" src={clockout} className="card-image"/>
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
                <IonCard onClick={handleClick} className="card-container"> 
                  <img alt="Silhouette of mountains" src={summary} className="card-image"/>
                  <IonCardHeader>
                    <IonCardTitle>Summary</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </a>
            </IonCol>
            <IonCol>
              <a href=''>
                <IonCard onClick={handleClick} className="card-container">
                  <img alt="Silhouette of mountains" src={request} className="card-image" />
                  <IonCardHeader>
                    <IonCardTitle>Clock In</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </a>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
