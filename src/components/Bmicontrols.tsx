import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const Bmicontrols: React.FC<{ onCalculate: () => void; onReset: () => void }> = (props) => {
    return (
      <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={props.onCalculate} fill="solid">
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate BMI
          </IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={props.onReset} fill="outline">
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };
export default Bmicontrols;
