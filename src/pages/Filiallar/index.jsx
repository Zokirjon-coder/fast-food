import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HEADER, AddFood, Flex, SearchBar, FoodList } from '../../components/style/styled'
import DrowerFilial from '../../components/DrowerFilial'
import Search from '../../assets/images/search.png'
import HeadingFilials from '../../components/headingFilials'
import FilialListItem from '../../components/filialListItem'
import { dataFilial } from '../../utils/dataFilial'
import { FilialsApi } from '../../context/FilialarContext'

const Filiallar = (props) => {
    const [showAddFilial, setShowAddFilial] = useState(false);
    const [filials, setFilials] = useContext(FilialsApi)
    const location = useLocation();
    const local = (location) => {
        let localName = location.pathname.split('');
        localName.splice(0, 1);
        if (localName.join('').includes('lar')) localName.splice(localName.length - 3, 3);
        return localName.join('') === 'xisobot' ? "Ma'lumotlarni \nyangilash" : "Yangi " + (localName.join('') === '' ? 'buyurtma' : localName.join('')) + ` qo'shish`
    }

    const onSearch = ({target}) => {
        let value = target.value.toLowerCase();
        setFilials(
            dataFilial.filter(data => data.filialnameuz.toLowerCase().includes(value))
        )
    }

    return (
        <>
        <HEADER>
            <Flex>
                <AddFood>
                    <DrowerFilial location={[41.316441, 69.294861]} lengthData={dataFilial.length} input='add' show={[showAddFilial, setShowAddFilial]} />
                    <Flex className="centered">
                        <button onClick={()=>setShowAddFilial(true)}>
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
                        </div>
                    </Flex>
                </SearchBar>
            </Flex>
        </HEADER>
        <HeadingFilials />
        <FoodList>
            {
                filials.map(value => <FilialListItem key={value.id} info={value} />)
            }
        </FoodList>
        </>
    )
}

export default Filiallar;

