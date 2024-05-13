import React, { useEffect, useState } from 'react';
import { IonCard, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import Clock from 'react-live-clock'; // Import the Clock component
// import Clock from 'react-live-clock';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';

import './Tab2.scss';
const Tab2: React.FC = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title-page'>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className='card-container'>
          <IonCardHeader>
            {/* Wrap the Clock component inside an element */}
            <h1>
               <Clock value={value} className={"class1"} renderHourMarks={true} renderNumbers={true}/>
            </h1>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
