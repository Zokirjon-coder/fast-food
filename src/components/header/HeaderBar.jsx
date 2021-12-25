import React, {useState} from 'react'
import { HEADER, AddFood, Flex, SearchBar, CircleBtn } from '../style/styled'
import Search from '../../assets/images/search.png'
import Path1 from '../../assets/images/Path1.png'
import Filter from '../Filter/Filter'
import Drower from '../Drower/Drower'
import { useLocation } from 'react-router-dom'

const HeaderBar = (props) => {
    const [hideFilter, setHideFilter] = useState(false);
    const [showAddFood, setShowAddFood] = useState(false);
    const [foods, setFoods] = props.foods;
    const [dataFood] = useState(foods);

    const hiden = () => {
        setHideFilter(!hideFilter);
    }

    
    const location = useLocation();
    const local = (location) =>{
        let localName = location.pathname.split('');
        localName.splice(0,1);
        if(localName.join('').includes('lar')) localName.splice(localName.length - 3, 3);
        return  localName.join('') === 'xisobot' ? "Ma'lumotlarni \nyangilash": "Yangi " + localName.join('')  + ` qo'shish`
    }

    const onSearch = (e) => {
        let value = e.target.value.toLowerCase();
        setFoods(
            dataFood.filter(data => data.name.toLowerCase().includes(value))
        )
    }

    return (
        <HEADER>
            <Flex>
                <AddFood>
                    <Drower show={[showAddFood, setShowAddFood]} />
                    <Flex className="centered">
                        <button onClick={()=>setShowAddFood(true)}>
                            <span></span>
                            <span></span>
                        </button>
                        <p>
                            {
                                local(location)
                            } 
                        </p>
                    </Flex>
                </AddFood>
                <SearchBar>
                    <Flex>
                        <div className="search">
                            <Flex>
                                <input onChange={(e) => onSearch(e)} type="text" placeholder="Qidirish" maxLength="30" />
                                <img src={Search} alt="" />
                            </Flex>
                        </div>
                        <div style={{
                            position: 'relative',
                        }}>
                            <CircleBtn onClick={() => hiden()} param={{ diametr: "45", borderWidth: "5" }}>
                                <Flex className="centered">
                                    <img src={Path1} alt="" />
                                </Flex>
                            </CircleBtn>
                            <Filter hide={hideFilter} foods={[foods, setFoods]} />
                        </div>
                    </Flex>
                </SearchBar>
            </Flex>
        </HEADER>
    )
}

export default HeaderBar;