import React, { useState, useContext } from 'react';
import { FilialItem, CircleBtn, Flex } from '../style/styled';
import Trash from '../../assets/images/trash.png';
import Edit from '../../assets/images/Path.png';
import active from '../../assets/images/check-circle.png';
import deactive from '../../assets/images/slash.png';
import DrowerFilial from '../DrowerFilial';
import { CustomersApi } from '../../context/CustomersContext';

const CustomerListItem = (props) => {
    const [showEditFilial, setShowEditFilial] = useState(false);
    const {id, name, phone, numberOfBooks, status} = props.info;
    const [customer, setCustomer] = useContext(CustomersApi);

    const onDelete = (id) => {
        setCustomer(
            customer.filter(filial => filial.id !== id)
        );
    };
    
    const changeStatus = ({id, name, phone, numberOfBooks, status}) => {
       
        let newCustomer = {
            id,
            name,
            phone, 
            numberOfBooks, 
            status: status === 'aktiv' ? 'block' : 'aktiv',
        }

        let newCastomers = [];
        customer.forEach(customer => {
            if (id !== customer.id) {
                newCastomers = [...newCastomers, customer];
            } else {
                newCastomers = [...newCastomers, newCustomer];
            }

        })

        setCustomer(newCastomers);
    }

    return (
        <FilialItem>
            <Flex>
                <div className="filialnameuz" style={{width: '210px'}}>{name}</div>
                <div className="filialnameru" style={{width: '180px'}}>{phone}</div>
                <div className="mark" style={{width: '150px', textAlign: 'center'}}>{numberOfBooks}</div>
                <div className="worktime" style={{fontWeight: 700, width: '150px', color: `${status==="aktiv" ? '#20D472':'#FA2738'}`}}>{status}</div>
                <div className="fillialaction">
                    <CircleBtn onClick={()=>changeStatus(props['info'])} noML={true} param={{ diametr: "35", borderWidth: "4" }}>
                        <Flex className="centered">
                            <img style={{borderRadius: 0}} src={status === "aktiv" ? deactive : active} alt="" />
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
            <DrowerFilial input='edit' id={(id)} show={[showEditFilial, setShowEditFilial]} />
        </FilialItem>
    )
}

export default CustomerListItem;