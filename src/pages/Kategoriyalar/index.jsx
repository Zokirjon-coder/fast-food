import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HEADER, AddFood, Flex, SearchBar, FoodList } from '../../components/style/styled'
import DrowerKategory from '../../components/DrowerKategory'
import Search from '../../assets/images/search.png'
import { KategoriaApi } from '../../context/Bategorialar/KategorialarContex'
import HeadingKategoria from '../../components/headingKategoria'
import KategoryListItem from '../../components/KategoryListItem'
import { dataKategoria } from '../../utils/datakategoria'

const Kategoriyalar = (props) => {
    const [showAddFood, setShowAddFood] = useState(false);
    const [kategoria, setKategoria] = useContext(KategoriaApi)
    const location = useLocation();
    const local = (location) => {
        let localName = location.pathname.split('');
        localName.splice(0, 1);
        if (localName.join('').includes('lar')) localName.splice(localName.length - 3, 3);
        return localName.join('') === 'xisobot' ? "Ma'lumotlarni \nyangilash" : "Yangi " + (localName.join('') === '' ? 'buyurtma' : localName.join('')) + ` qo'shish`
    }

    const onSearch = ({target}) => {
        let value = target.value.toLowerCase();
        setKategoria(
            dataKategoria.filter(data => data.kategoriaUz.toLowerCase().includes(value))
        )
    }

    return (
        <>
        <HEADER>
            <Flex>
                <AddFood>
                    <DrowerKategory lengthData={dataKategoria.length} input='add' show={[showAddFood, setShowAddFood]} />
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
                        </div>
                    </Flex>
                </SearchBar>
            </Flex>
        </HEADER>
        <HeadingKategoria />
        <FoodList>
            {
                kategoria.map(value => <KategoryListItem key={value.id} info={value} />)
            }
        </FoodList>
        </>
    )
}

export default Kategoriyalar;
