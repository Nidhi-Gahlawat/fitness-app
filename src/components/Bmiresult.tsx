import React from 'react';
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
const BmiResult: React.FC<{result: number }> = (props) => {
    return (
        <IonRow>
        <IonCol>
          <IonCard>
            <IonCardContent>
              <h2>Your Body Mass Index is: </h2>
              <h3 className='ion-text-center'>{props.result.toFixed(2)}</h3>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>

    );
};
export default BmiResult;