import {
    IonButton,
  IonCard,
  IonContent,
  IonDatetime,
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

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title-page">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br></br>
        <IonCard className="card-container">
        <img alt="Silhouette of mountains" style={{ marginBottom: 10 }} src="https://ionicframework.com/docs/img/demos/card-media.png" className="class-image" />
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="Email"
            style={{ marginBottom: 10 }} 
          ></IonInput>
          <IonInput
            label="Password"
            labelPlacement="floating"
            type="password"
            fill="outline"
            placeholder="Password"
            style={{ marginBottom: 10 }}
          ></IonInput>
          <IonButton>Sign In</IonButton>
          <IonLabel>
            <h6>Dont Have Account? <a href="">Sign Up Now</a></h6>
          </IonLabel>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
