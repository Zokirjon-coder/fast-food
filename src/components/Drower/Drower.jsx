import React from 'react';
import {DROWER} from './style';

export default function Drower(props) {
    let [showAddFood, setShowAddFood] = props.show;
    return (
        <DROWER show={ showAddFood }>
            <DROWER.CloseBtn show={showAddFood} onClick = {()=>setShowAddFood(false)}>
        X
            </DROWER.CloseBtn>
            
        </DROWER>
    )
}
