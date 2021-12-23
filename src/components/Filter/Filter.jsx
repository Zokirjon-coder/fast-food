import React, { useContext } from 'react'
import { FILTER } from '../style/styled'
// import { dataFood } from '../../utils/dataFood'
import { MahsulotlarApi } from '../../context/maxsulotlar/MahsulotlarContext'

const Filter = (props) => {

    const [foods, setFoods] = useContext(MahsulotlarApi);

    const onFilter = ({target})=>{
        let {id, value} = target;
        setFoods(
            foods.sort((item1, item2)=>{
                if (id==='priceup' && value==='on'){
                    let firstEl = Number(item1['price'].replace(',',''));
                    let secondEl = Number(item2['price'].replace(',',''));

                    if (firstEl > secondEl) return 1;
                    if (firstEl < secondEl) return -1;
                    return 0;
                }
                if (id==='pricedown' && value==='on'){
                    let firstEl = Number(item1['price'].replace(',',''));
                    let secondEl = Number(item2['price'].replace(',',''));
                    
                    if (firstEl < secondEl) return 1;
                    if (firstEl > secondEl) return -1;
                    return 0;
                }
                if (id==='nameup' && value==='on'){
                    let firstEl = item1['name'].toUpperCase();
                    let secondEl = item2['name'].toUpperCase();
                    
                    if (firstEl > secondEl) return 1;
                    if (firstEl < secondEl) return -1;
                    return 0;
                }
                if (id==='namedown' && value==='on'){
                    let firstEl = item1['name'].toUpperCase();
                    let secondEl = item2['name'].toUpperCase();
                    
                    if (firstEl < secondEl) return 1;
                    if (firstEl > secondEl) return -1;
                    return 0;
                }
            })
        )
        // console.clear()
        console.table(foods)
    }

    const onFilterKetogriya = ()=>{
        console.log('filter kategoriya')
    }
    
    return (
        <FILTER hide={props.hide}>
            <div><span>Kategoriya</span></div>
            <div className="select">
                <select id="foodKategory" onChange={(e)=> onFilterKetogriya(e)} >
                    <option value="hammasi">hammasi</option>
                    <option value="ichimlik">ichimlik</option>
                    <option value="lavash">lavash</option>
                    <option value="burger">burger</option>
                </select>
            </div>
            <div className="checkboxses">
                <div className="check">
                    <input type="radio" name="filterOpt" id="priceup" onClick={(e)=> onFilter(e)} />
                    <label htmlFor="priceup">Narx bo'yicha (O'sish tartibida)</label>
                </div>
                <div className="check">
                    <input type="radio" name="filterOpt" id="pricedown" onChange={(e)=> onFilter(e)} />
                    <label htmlFor="pricedown">Narx bo'yicha(Kamayish tartibida)</label>
                </div>
                <div className="check">
                    <input type="radio" name="filterOpt" id="nameup" onChange={(e)=> onFilter(e)} />
                    <label htmlFor="nameup">Nom bo'yicha(A-Z)</label>
                </div>
                <div className="check">
                    <input type="radio" name="filterOpt" id="namedown" onChange={(e)=> onFilter(e)} />
                    <label htmlFor="namedown">Nom bo'yicha(Z-A)</label>
                </div>
            </div>

        </FILTER>
    )
}

export default Filter
