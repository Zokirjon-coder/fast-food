import React from 'react';
import {DROWER} from './style';
import UploadImage from '../../assets/images/upload-cloud.png'

export default function Drower(props) {
    let [showAddFood, setShowAddFood] = props.show;
    return (
        <DROWER show={ showAddFood }>
            <DROWER.CloseBtn show={showAddFood} onClick = {()=>setShowAddFood(false)}></DROWER.CloseBtn>
            <div className="container">
                <h1>Yangi maxsulot qo'shish</h1>
                <div className="inp">
                <p className="titleInp">Maxsulot nomi</p>
                    <input type="text" name="" id="" placeholder='maxsulot nomi' />
                </div>
                <div className="inp">
                <p className="titleInp">Kategoriya</p>
                    <select name="" id="">
                        <option value="burger">Burger</option>
                        <option value="ichimlik">Ichimlik</option>
                        <option value="lavash">Lavash</option>
                        <option value="lavash_mini">Lavash mini</option>
                    </select>
                </div>
                <div className="inp">
                <p className="titleInp">Narxi</p>
                    <input type="text" name="" id="" placeholder='maxsulot nomi' />
                </div>
                <div className="inp">
                <p className="titleInp">Qo'shimcha ma'lumot</p>
                    <input type="text" name="" id="" placeholder='maxsulot nomi' />
                </div>
                <div className="inp" style={{'opacity': 1, border: '1px solid var(--grey)'}}>
                    <input type="file" name="" id="file" />
                    <img src={UploadImage} alt="" />
                    <span>Maxsulot rasmini yuklang!</span>
                </div>
                <div className="btn">
                    <button>Saqlash</button>
                </div>
            </div>
        </DROWER>
    )
}
