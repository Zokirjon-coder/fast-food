import React, { useState } from 'react'
import { FoodItem, CircleBtn, Flex } from '../style/styled'
import Trash from '../../assets/images/trash.png';
import Edit from '../../assets/images/Path.png';
import Drower from '../Drower/Drower';

const FoodListItem = (props) => {
    const [showEditFood, setShowEditFood] = useState(false);
    
    return (
        <FoodItem>
            <Flex>
                <img src={props.info.img} alt="" />
                <div className="foodname">{props.info.name}</div>
                <div className="foodkategory">{props.info.kategory}</div>
                <div className="foodprice">{props.info.price} UZS</div>
                <div className="foodinf">{props.info.inf}</div>
                <div className="foodaction">
                    <CircleBtn onClick={()=>setShowEditFood(true)} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Edit} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn onClick={() => { props.onDelete(props.info.id) }} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={Trash} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </Flex>
            <Drower input='edit' item={(props.info)} id={(props.info.id)} show={[showEditFood, setShowEditFood]} />
        </FoodItem>
    )
}

export default FoodListItem;