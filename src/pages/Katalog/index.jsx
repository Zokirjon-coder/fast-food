import React, { useState, useContext } from 'react'
import { HEADER, AddFood, Flex, SearchBar } from '../../components/style/styled'
import Search from '../../assets/images/search.png'
import { XisobotlarApi } from '../../context/XisobotlarContext/XisobotlarContext'
import { dataXisobotList } from '../../utils/dataXisobotList'
import { NotiContainer, Noti } from './style'
import Upload from '../../assets/images/Upload.png'

const Katalog = () => {

    const [xisobot, setXisobot] = useContext(XisobotlarApi)

    const onSearch = ({ target }) => {
        let value = target.value.toLowerCase();
        setXisobot(
            dataXisobotList.filter(data => data.fillianName.toLowerCase().includes(value))
        )
    }


    return (
        <>
            <HEADER>
                <Flex>
                    <AddFood>
                        <Flex className="centered">
                            <button>
                                <span></span>
                                <span></span>
                            </button>
                            <p>
                                Bildirishnoma qo'shish
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
            <NotiContainer>
                <Noti>
                    <form action="">

                        <Noti.Header>
                            <input type="text" className="NotiHeading" placeholder='Sarlavha' />
                            <div className="selectBox">
                                <select name="" id="">
                                    <option value="barchaga">barchaga</option>
                                    <option value="xodimlarga">xodimlarga</option>
                                    <option value="mijozlarga">mijozlarga</option>
                                </select>
                                <select name="" id="">
                                    <option value="yakshanba">yakshanba</option>
                                    <option value="dushanba">dushanba</option>
                                    <option value="seshanba">seshanba</option>
                                    <option value="chorshanba">chorshanba</option>
                                    <option value="payshanba">payshanba</option>
                                    <option value="juma">juma</option>
                                    <option value="shanba">shanba</option>
                                </select>
                                <select name="" id="">
                                    <option value="9:00">9:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="18:00">18:00</option>
                                </select>
                            </div>
                        </Noti.Header>
                        <Noti.Comment>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Izoh'></textarea>
                        </Noti.Comment>
                        <Noti.Upload >
                            <input type="file" name="" id="" />
                            <div className="heading">
                                <img src={Upload} alt="" />
                                <span>Rasm yuklash</span>
                            </div>
                        </Noti.Upload>
                        <Noti.Btns>
                            <button type='reset'>Bekor qilish</button>
                            <button type='button'>Saqlash</button>
                        </Noti.Btns>
                    </form>
                </Noti>
            </NotiContainer>
        </>
    )
}

export default Katalog
