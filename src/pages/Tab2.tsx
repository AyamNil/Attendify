import React from 'react';
import { IonCard, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import Clock from 'react-live-clock'; // Import the Clock component
// import Clock from 'react-live-clock';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title-page'>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            {/* Wrap the Clock component inside an element */}
            <h1>
              {/* <Clock
                format={'HH:mm:ss'}
                ticking={true}
                timezone={'US/Pacific'} /> */}
            </h1>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
