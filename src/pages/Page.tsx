import {
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonInput,
  IonAlert,
} from "@ionic/react";
import { useParams } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import "./Page.css";
import { useRef, useState } from "react";
import React from "react";

import Bmicontrols from "../components/Bmicontrols";
import BmiResult from "../components/Bmiresult";
import Inputcontrols from "../components/Inputcontrols";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [calculatedbmi, setcalculatedbmi] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<"mkg" | "ftlbs">("mkg");

  const nameInputRef = useRef<HTMLIonInputElement>(null);
  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const genderInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  // CODE TO CALCULATE BMI

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      // alert('Please enter valid Height and Weight');
      setError("Please Enter Valid Height and Weight!");
      return;
    }

    const weightConversionFactor=calcUnits=== 'ftlbs' ? 2.2 : 1 ;
    const weight= +enteredWeight/weightConversionFactor;

    const heightConversionFactor=calcUnits=== 'ftlbs' ? 3.28 : 1;
    const height = +enteredHeight/heightConversionFactor;

    const bmi =weight/(height * height);
    setcalculatedbmi(bmi);
  };
  const resetInputs = () => {
    nameInputRef.current!.value = "";
    ageInputRef.current!.value = "";
    genderInputRef.current!.value = "";
    heightInputRef.current!.value="";
    weightInputRef.current!.value="";
  };

  const clearError = () => {
    setError("");
  };

  const selectCalcunitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="ion-padding">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <ExploreContainer name={name} /> */}
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonCard>
                    <img src="data:image/png;base64,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" />
                    <IonCardHeader>
                      <IonCardSubtitle>
                        Stay Healthy with Smooches
                      </IonCardSubtitle>
                      <IonCardTitle>Fitness Tracker</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis eligendi amet, quasi laboriosam autem beatae
                      corporis omnis rerum sequi quidem vel? Dolorem at itaque
                      sequi, placeat quis architecto debitis sed! Facilis illo
                      recusandae sit repudiandae tempora minima, esse, facere
                      qui quis
                    </IonCardContent>
                  </IonCard>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <Inputcontrols
                  selectedValue={calcUnits}
                  onSelectValue={selectCalcunitHandler}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Name </IonLabel>
                  <IonInput type="text" ref={nameInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Age </IonLabel>
                  <IonInput type="number" ref={ageInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Gender </IonLabel>
                  <IonInput type="text" ref={genderInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-left">
                <IonItem>
                  <IonLabel position="floating">Height ({calcUnits=== 'mkg' ? 'meters' : 'feets'})</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
              <IonCol className="ion-text-right">
                <IonItem>
                  <IonLabel position="floating">Weight ({calcUnits==='mkg' ? 'Kg' : 'lbs'})</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <Bmicontrols onCalculate={calculateBMI} onReset={resetInputs} />
            {calculatedbmi && <BmiResult result={calculatedbmi} />}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Page;
