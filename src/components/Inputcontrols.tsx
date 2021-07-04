import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";
const Inputcontrols: React.FC<{
  selectedValue: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
    const inputChangeHandler=(event: CustomEvent)=>{
        props.onSelectValue(event.detail.value);
    };
  return (
    <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
      <IonSegmentButton value="mkg">
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="ftlbs">ft/lbs</IonSegmentButton>
    </IonSegment>
  );
};
export default Inputcontrols;
