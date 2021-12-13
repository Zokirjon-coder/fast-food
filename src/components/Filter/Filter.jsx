import React, {useState} from 'react'
import { FILTER } from '../style/styled'



const Filter = (props) => {
    
    return (
        <FILTER hide={props.hide}>
            <div><span>Kategoriya</span></div>
            <div className="select">
                <select id="foodKategory">
                    <option value="hammasi">hammasi</option>
                    <option value="ichimlik">ichimlik</option>
                    <option value="lavash">lavash</option>
                    <option value="burger">burger</option>
                </select>
            </div>
            <div className="checkboxses">
                <div className="check">
                    <input type="checkbox" name="" id="narxup" />
                    <label htmlFor="narxup">Narx bo'yicha (O'sish tartibida)</label>
                </div>
                <div className="check">
                    <input type="checkbox" name="" id="narxdown" />
                    <label htmlFor="narxdown">Narx bo'yicha(Kamayish tartibida)</label>
                </div>
                <div className="check">
                    <input type="checkbox" name="" id="nomup" />
                    <label htmlFor="nomup">Nom bo'yicha(A-Z)</label>
                </div>
                <div className="check">
                    <input type="checkbox" name="" id="nomdown" />
                    <label htmlFor="nomdown">Nom bo'yicha(Z-A)</label>
                </div>
            </div>

        </FILTER>
    )
}

export default Filter
