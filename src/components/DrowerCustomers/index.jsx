import React, { useContext, useRef } from 'react';
import { DROWER } from './style';
import { dataCustomers } from '../../utils/dataCustomers';
import { CustomersApi } from '../../context/CustomersContext';

export default function Drower(props) {
    let [showAddFilial, setShowAddFilial] = props.show;
    const [customers, setCustomers] = useContext(CustomersApi);


    const name = useRef();
    const phone = useRef();
    const numberOfBooks = useRef();
    const status = useRef();

    const AddCutomers = () => {

        let newCustomer = {
            id: dataCustomers.length + 1,
            name: name.current.value,
            phone: phone.current.value,
            numberOfBooks: numberOfBooks.current.value,
            status: status.current.value==='on' ? "block" : "aktiv",
        }

        setCustomers([...customers, newCustomer]);
        setShowAddFilial(false);
    }

    const EditCustomers = (id) => {
        let newCustomer = {
            id: id,
            name: name.current.value,
            phone: phone.current.value,
            numberOfBooks: numberOfBooks.current.value,
            status: status.current.value==='on' ? "block" : "aktiv",
        }

        let newCustomers = [];
        customers.forEach(cutomer => {
            if (id !== cutomer.id) {
                newCustomers = [...newCustomers, cutomer];
            } else {
                newCustomers = [...newCustomers, newCustomer];
            }

        })

        setCustomers(newCustomers);
        setShowAddFilial(false);
    }

    return (
        <DROWER show={showAddFilial}>
            <DROWER.CloseBtn show={showAddFilial} onClick={() => setShowAddFilial(false)}></DROWER.CloseBtn>
            <div className="container">
                <h1>{props.input === 'edit' ? 'Filialni tahrirlash' : "Yangi filial qo'shish"}</h1>
                <div className="inp">
                    <p className="titleInp">Mijoz ismi</p>
                    <input required type="text" ref={name} name="" id="" placeholder='Mijoz ismi' />
                </div>
                <div className="inp">
                    <p className="titleInp">Telefon raqami</p>
                    <input required type="text" name="" ref={phone} id="" placeholder='+998 ...' />
                </div>
                <div className="inp">
                    <p className="titleInp">Buyurtma soni</p>
                        <input type="number" name="" ref={numberOfBooks} id="" />
                </div>
                    <div className="check">
                        <input type="checkbox" ref={status} name="filterOpt" id="statusCustomer" />
                        <label htmlFor="statusCustomer">Blocklangan mijoz</label>
                    </div>
                <div className="btn">
                    <button onClick={() => props.input === 'edit' ? EditCustomers(props.id) : AddCutomers()}>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
