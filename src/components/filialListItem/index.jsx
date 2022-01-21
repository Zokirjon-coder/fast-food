import React, { useState, useContext } from 'react';
import { FilialItem, CircleBtn, Flex } from '../style/styled';
import Trash from '../../assets/images/trash.png';
import Edit from '../../assets/images/Path.png';
import Mark from '../../assets/images/map-pin.png';
import DrowerFilial from '../DrowerFilial';
import { FilialsApi } from '../../context/FilialarContext';
import { dataFilial } from '../../utils/dataFilial';
import DrowerLocation from '../drowerLocation';

const FilialListItem = (props) => {
    const [showEditFilial, setShowEditFilial] = useState(false);
    const [showLoc, setShowLoc] = useState(false);
    const {id, filialnameuz, filialnameru, mark, worktime_start, worktime_end, location} = props.info;
    const [filials, setFilials] = useContext(FilialsApi);

    const onDelete = (id) => {
        setFilials(
            dataFilial.filter(filial => filial.id !== id)
        );
    };
    
    return (
        <FilialItem>
            <Flex>
                <div className="filialnameuz">{filialnameuz}</div>
                <div className="filialnameru">{filialnameru}</div>
                <div className="mark">{mark}</div>
                <div className="worktime">{worktime_start} - {worktime_end}</div>
                <div className="fillialaction">
                    <CircleBtn onClick={()=>setShowLoc(true)} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Mark} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn onClick={()=>setShowEditFilial(true)} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Edit} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn onClick={() => { onDelete(id) }} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Trash} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </Flex>
            <DrowerLocation showLocation={[showLoc, setShowLoc]} location={location} />
            <DrowerFilial input='edit' id={(id)} show={[showEditFilial, setShowEditFilial]} location={location} />
        </FilialItem>
    )
}

export default FilialListItem;