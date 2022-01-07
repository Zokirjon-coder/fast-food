import React, { useContext, useRef } from 'react';
import { DROWER } from './style';
import { dataFood } from '../../utils/dataFood';
import UploadImage from '../../assets/images/upload-cloud.png';
import { FilialsApi } from '../../context/FilialarContext';
import Colacola from '../../assets/images/cocacola1.5.png';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export default function Drower(props) {
    let [showAddFilial, setShowAddFilial] = props.show;
    const [foods, setFoods] = useContext(FilialsApi);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyA_U0mN3C9vg2qJnvZzAPr9OCP9opJYV8E',
        id: 'ApiKey',
    })

    const foodName = useRef();
    const foodKategory = useRef();
    const foodPrice = useRef();
    const foodInfo = useRef();
    const foodImage = useRef();

    const AddFood = () => {

        let newFood = {
            id: dataFood.length + 1,
            img: Colacola,
            name: foodName.current.value,
            kategory: foodKategory.current.value,
            price: foodPrice.current.value,
            inf: foodInfo.current.value,
        }

        setFoods([...foods, newFood]);
        setShowAddFilial(false);
    }

    const EditFood = (id) => {
        let newFood = {
            id: id,
            img: Colacola,
            name: foodName.current.value,
            kategory: foodKategory.current.value,
            price: foodPrice.current.value,
            inf: foodInfo.current.value,
        }
        let newFoods = [];
        foods.forEach(food => {
            if (id !== food.id) {
                newFoods = [...newFoods, food];
            } else {
                newFoods = [...newFoods, newFood];
            }

        })

        setFoods(newFoods);
        setShowAddFilial(false);
    }

    return (
        <DROWER show={showAddFilial}>
            <DROWER.CloseBtn show={showAddFilial} onClick={() => setShowAddFilial(false)}></DROWER.CloseBtn>
            <div className="container">
                <h1>{props.input === 'edit' ? 'Maxsulotni tahrirlash' : "Yangi maxsulot qo'shish"}</h1>
                <div className="inp">
                    <p className="titleInp">Maxsulot nomi</p>
                    <input required type="text" ref={foodName} name="" id="" placeholder='maxsulot nomi' />
                </div>
                <div className="inp">
                    <p className="titleInp">Kategoriya</p>
                    <select required name="" id="" ref={foodKategory}>
                        <option value="burger">Burger</option>
                        <option value="ichimlik">Ichimlik</option>
                        <option value="lavash">Lavash</option>
                        <option value="lavash_mini">Lavash mini</option>
                    </select>
                </div>
                <div className="inp">
                    <p className="titleInp">Narxi</p>
                    <input required type="text" name="" ref={foodPrice} id="" placeholder='maxsulot narxi' />
                </div>
                <div className="inp">
                    <p className="titleInp">Qo'shimcha ma'lumot</p>
                    <input type="text" name="" ref={foodInfo} id="" placeholder='maxsulot haqda qisqacha..' />
                </div>
                <div className="inp" style={{ 'opacity': 1, border: '1px solid var(--grey)' }}>
                    {
                        isLoaded &&
                        <GoogleMap
                            id='map'
                            mapContainerStyle={{
                                width: '100%',
                                height: '150px',
                                borderRadius: '10px',
                            }}
                            zoom={5}
                            center={{ lat: 40.768810, lng: 72.236282 }}
                        >

                        </GoogleMap>
                    }
                </div>
                <div className="btn">
                    <button onClick={() => props.input === 'edit' ? EditFood(props.id) : AddFood()}>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
