import React from 'react'
import { HEADER, AddFood, Flex, SearchBar, CircleBtn } from '../style/styled'
import Search from '../../assets/images/search.png'
import Path1 from '../../assets/images/Path1.png'
import Filter from '../Filter/Filter'
import Drower from '../Drower/Drower'

const HeaderBar = (props) => {
    const [hideFilter, setHideFilter] = React.useState(false);
    const [showAddFood, setShowAddFood] = React.useState(false);

    const hiden = () => {
        setHideFilter(!hideFilter);
        console.log(hideFilter);
    }

    return (
        <HEADER>
            <Flex>
                <AddFood>
                    <Drower show={[showAddFood, setShowAddFood]} />
                    <Flex className="centered">
                        <button onClick={()=>{setShowAddFood(true); console.log(showAddFood)}}>
                            <span></span>
                            <span></span>
                        </button>
                        <p>
                            Yangi maxsulot <br /> qo'shish
                        </p>
                    </Flex>
                </AddFood>
                <SearchBar>
                    <Flex>
                        <div className="search">
                            <Flex>
                                <input onChange={(e) => props.onSearch(e)} type="text" placeholder="Qidirish" maxLength="30" />
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
                            <Filter hide={hideFilter} />
                        </div>
                    </Flex>
                </SearchBar>
            </Flex>
        </HEADER>
    )
}

export default HeaderBar;