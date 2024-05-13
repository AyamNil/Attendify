import {
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab2.scss";
import "./app.scss";

const Tab2: React.FC = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="clock-container">
          <IonCardHeader>
            <IonLabel className="clock">
              {ctime}
            </IonLabel>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
