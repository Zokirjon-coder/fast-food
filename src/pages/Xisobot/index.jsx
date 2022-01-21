import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HEADER, AddFood, Flex, SearchBar } from '../../components/style/styled'
import Search from '../../assets/images/search.png'
import { XisobotlarApi } from '../../context/XisobotlarContext/XisobotlarContext' 
import { dataXisobotList } from '../../utils/dataXisobotList' 
import { ShowType } from './style'
import Async from '../../assets/images/async.svg'
import { data } from '../../utils/dataChart'
import Charts from '../../components/Charts'
import XisobotList from '../../components/XisobotList'
import chart from '../../assets/images/chart.png'
import list from '../../assets/images/xisobotlist.png'



const Xisobot = () => {


    const [xisobot, setXisobot] = useContext(XisobotlarApi)
    const location = useLocation();
    const [showType, setShowType] = useState('charts');
    const local = (location) => {
        let localName = location.pathname.split('');
        localName.splice(0, 1);
        if (localName.join('').includes('lar')) localName.splice(localName.length - 3, 3);
        return localName.join('') === 'xisobot' ? "Ma'lumotlarni \nyangilash" : "Yangi " + (localName.join('') === '' ? 'buyurtma' : localName.join('')) + ` qo'shish`
    }

    const onSearch = ({ target }) => {
        if (showType === 'lists') {
            let value = target.value.toLowerCase();
            setXisobot(
                dataXisobotList.filter(data => data.fillianName.toLowerCase().includes(value))
            )
        }
    }


    const showTypeChange = (showType) => {
        setShowType(showType);
    }

    return (
        <>
            <HEADER>
                <Flex>
                    <AddFood>
                        <Flex className="centered">
                            <button>
                                <img src={Async} alt="" />
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
                    <ShowType>
                        <ShowType.box>
                            <ShowType.btn className="row" onClick={() => showTypeChange('charts')} isActive={showType === 'charts'}>
                                <img src={chart} style={{
                                    opacity: showType === 'charts' ? 1 : 0.5
                                }} alt="" />
                            </ShowType.btn>
                            <ShowType.btn className="column" onClick={() => showTypeChange('lists')} isActive={showType === 'lists'}>
                                <img src={list} style={{
                                    opacity: showType === 'lists' ? 1 : 0.5
                                }} alt="" />
                            </ShowType.btn>
                        </ShowType.box>
                    </ShowType>
                </Flex>
            </HEADER>
            {
                showType === "charts" ? <Charts data={data} /> : <XisobotList />
            }
        </>
    )
}

export default Xisobot
