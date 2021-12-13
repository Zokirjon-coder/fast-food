import React, { Component } from 'react'
import { FoodItem, CircleBtn, Flex } from '../style/styled'
import Trash from '../../assets/images/trash.png';
import Edit from '../../assets/images/Path.png';

const FoodListItem = (props) => {
    return (
        <FoodItem>
            <Flex>
                <img src={props.info.img} alt="" />
                <div className="foodname">{props.info.name}</div>
                <div className="foodkategory">{props.info.kategory}</div>
                <div className="foodmoney">{props.info.money}</div>
                <div className="foodinf">{props.info.inf}</div>
                <div className="foodaction">
                    <CircleBtn param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img src={Edit} alt="" />
                        </Flex>
                    </CircleBtn>
                    <CircleBtn onClick={() => { props.onDelete(props.info.id) }} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img src={Trash} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </Flex>
        </FoodItem>
    )
}

export default FoodListItem;