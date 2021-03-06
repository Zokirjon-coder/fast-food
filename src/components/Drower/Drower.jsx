import React, { useContext, useRef } from 'react';
import { DROWER } from './style';
import { dataFood } from '../../utils/dataFood';
import UploadImage from '../../assets/images/upload-cloud.png'
import { MahsulotlarApi } from '../../context/maxsulotlar/MahsulotlarContext';
import Colacola from '../../assets/images/cocacola1.5.png'

export default function Drower(props) {
    let [showAddFood, setShowAddFood] = props.show;
    const [foods, setFoods] = useContext(MahsulotlarApi);

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
        setShowAddFood(false);
    }

    const FindeIndex = () => foods.indexOf(props.item);


    const EditFood = (id) => {
        let index = FindeIndex();
        let newFood = {
            id: id,
            img: Colacola,
            name: foodName.current.value,
            kategory: foodKategory.current.value,
            price: foodPrice.current.value,
            inf: foodInfo.current.value,
        }
        let newFoods = [...foods];
        newFoods.splice(index, 1, newFood)

        setFoods(newFoods);
        setShowAddFood(false);
    }

    return (
        <DROWER show={showAddFood}>
            <DROWER.CloseBtn show={showAddFood} onClick={() => setShowAddFood(false)}></DROWER.CloseBtn>
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
                    <input required type="file" ref={foodImage} name="" id="file" />
                    <img src={UploadImage} alt="" />
                    <span>Maxsulot rasmini yuklang!</span>
                </div>
                <div className="btn">
                    <button onClick={() => props.input === 'edit' ? EditFood(props.id) : AddFood()}>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
