import React from 'react'
import { FoodItem, CircleBtn, Flex } from '../style/styled'
import Trash from '../../assets/images/trash.png';

const FoodListItem = ({ info, onDelete }) => {

    return (
        <FoodItem>
            <Flex.Xisobot>
                <div style={{ width: '220px' }}>{info.fillianName} <br />
                    <span>operator: {info.operator}</span>
                </div>
                <div style={{ width: '205px' }}>{info.priceBook.price} <br /> <span>
                    <span style={{
                        width: '8px',
                        borderRadius: '8px',
                        height: '8px',
                        display: 'inline-block',
                        background: '#00ffd5',
                    }}></span> {info.priceBook.payWay}</span>
                </div>
                <div style={{ width: '205px' }}>{info.customer.name}<br />
                    <span>{info.customer.phone}</span> </div>
                <div style={{ width: '150px' }}>{info.date.day} <br />
                    <span>{info.date.clock}</span>
                </div>
                <div>
                    <CircleBtn onClick={() => { onDelete(info.id) }} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{ borderRadius: 0 }} src={Trash} alt="" />
                        </Flex>
                    </CircleBtn>
                </div>
            </Flex.Xisobot>
        </FoodItem>
    )
}

export default FoodListItem;