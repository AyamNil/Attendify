import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./sass/Login.scss";
import "./sass/app.scss"
import { useState } from "react";

const Tab4: React.FC = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: CustomEvent) => {
    const { name, value } = (e.target as HTMLInputElement);
    setUser({
      ...user,
      [name]: value,
    });
  }

  const handleLogin = () => {
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br />
        <IonCard className="card-container">
          <img 
            alt="Silhouette of mountains" 
            style={{ marginBottom: 10 }} 
            src="https://ionicframework.com/docs/img/demos/card-media.png" 
            className="class-image" 
          />
          <IonInput
            name="email"
            value={user.email}
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Email"
            style={{ marginBottom: 10 }} 
            onIonChange={handleInputChange}
            required={true}
          />
          <IonInput
            name="password"
            value={user.password}
            label="Password"
            labelPlacement="floating"
            type="password"
            fill="outline"
            placeholder="Password"
            style={{ marginBottom: 10 }}
            onIonChange={handleInputChange}
            required={true}
          />
          <IonButton onClick={handleLogin}>Sign In</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
