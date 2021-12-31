import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HEADER, AddFood, Flex } from '../../components/style/styled'
import Drower from '../../components/Drower/Drower'
import { ShowType, TypeBook, Conatiner, Wrapper, ColumnName, CradSumm } from './style'
import { BooksApi } from '../../context/BuyurtmalarContext/BuyurtmalarContext';
import CardColumn from '../../components/CardColumn/Index'

const Buyurtmalar = (props) => {
    const [showAddFood, setShowAddFood] = useState(false);
    const [books, setBooks] = useContext(BooksApi);
    const [type, setType] = useState('yangi');
    const [showType, setShowType] = useState('column');
    const location = useLocation();
    const local = (location) => {
        let localName = location.pathname.split('');
        localName.splice(0, 1);
        if (localName.join('').includes('lar')) localName.splice(localName.length - 3, 3);
        return localName.join('') === 'xisobot' ? "Ma'lumotlarni \nyangilash" : "Yangi " + (localName.join('') === '' ? 'buyurtma' : localName.join('')) + ` qo'shish`
    }

    const activeType = (type) => {
        setType(type);
    }

    const showTypeChange = (showType) => {
        setShowType(showType);
    }

    // console.log(Object.entries(books))
    const columnCard = (dataBooks) => {
        return (
            <>
                {
                    Object.entries(dataBooks).map(([key, data]) => (
                        <Wrapper.column key={key}>
                            <ColumnName>{key}<ColumnName.length>{data.length}</ColumnName.length> </ColumnName>
                            <CradSumm> <CradSumm.indikator bg={'green'}></CradSumm.indikator> {data.reduce((summ, value) =>
                                summ += Number(value.total), 0)} UZS </CradSumm>
                            {
                                data.map(value => <CardColumn key={value.id} value={value} />)
                            }
                        </Wrapper.column>
                    ))
                }
            </>
        );
    }
    const rowCard = () => {
        return (
            <>
                <CardColumn />
            </>
        );
    }

    return (
        <>
            <HEADER>
                <Flex>
                    <AddFood>
                        <Drower input='add' show={[showAddFood, setShowAddFood]} />
                        <Flex className="centered">
                            <button onClick={() => setShowAddFood(true)}>
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
                    <TypeBook>
                        <TypeBook.type isDisabled={showType === "column"}>
                            <Flex style={{
                                alignItems: 'center',
                                justifyContent: 'space-beatween'
                            }}>
                                <TypeBook.name isDisabled={showType === "column"} onClick={() => activeType('yangi')} active={type === 'yangi'}>Yangi</TypeBook.name>
                                <TypeBook.name isDisabled={showType === "column"} onClick={() => activeType('qabul qilingan')} active={type === "qabul qilingan"}>Qabul qilingan</TypeBook.name>
                                <TypeBook.name isDisabled={showType === "column"} onClick={() => activeType("jo'natilgan")} active={type === "jo'natilgan"}>Jo'natilgan</TypeBook.name>
                                <TypeBook.name isDisabled={showType === "column"} onClick={() => activeType('yopilgan')} active={type === "yopilgan"}>Yopilgan</TypeBook.name>
                            </Flex>
                        </TypeBook.type>
                    </TypeBook>
                    <ShowType>
                        <ShowType.box>
                            <ShowType.btn className="row" onClick={() => showTypeChange('row')} isActive={showType === 'row'}>
                                <span></span>
                                <span></span>
                            </ShowType.btn>
                            <ShowType.btn className="column" onClick={() => showTypeChange('column')} isActive={showType === 'column'}>
                                <span></span>
                                <span></span>
                            </ShowType.btn>
                        </ShowType.box>
                    </ShowType>
                </Flex>
            </HEADER>
            <Conatiner>
                <Wrapper style={{
                    flexDirection: showType === 'row' ? 'column' : 'row'
                }}>

                    {

                        showType === 'row' ? rowCard() : columnCard(books)

                    }
                    
                </Wrapper>
            </Conatiner>
        </>
    )
}

export default Buyurtmalar
