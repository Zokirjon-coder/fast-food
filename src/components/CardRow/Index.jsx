import React, { useContext } from 'react'
import { HeaderTop, HeaderBottom, BodyTop, BodyBottom, RowCard, PriceTop, PriceBottom } from './styled'
import markImg from '../../assets/images/CardPath.png'
import clock from '../../assets/images/clock.png'
import userImg from '../../assets/images/user.png'
import clear from '../../assets/images/x.png'
import check from '../../assets/images/Check.png'
import phone from '../../assets/images/phone.png'
import priceFood from '../../assets/images/price.png'
import priceCar from '../../assets/images/car.png'
import { BooksApi } from '../../context/BuyurtmalarContext/BuyurtmalarContext'

function CardRow(props) {
    const [books, setBooks] = useContext(BooksApi)
    const { id, categoria, orderId, time, total, user, operator, fillial } = props.data;

    const onDelete = ({ categoria, id }) => {
        setBooks(
            Object.fromEntries(Object.entries(books).map(([key, data]) => [key, data.filter(value => value.id !== id || value.categoria !== categoria)]))
        )
    }

    return (
        <RowCard>
            <RowCard.Header>
                <HeaderTop>
                    <RowCard.greenEl>{orderId}</RowCard.greenEl>
                    <RowCard.mark><img src={markImg} /></RowCard.mark>
                </HeaderTop>
                <HeaderBottom>
                    <img src={clock} style={{ height: '16px', width: '16px' }} />
                    <RowCard.time>{time}</RowCard.time>
                </HeaderBottom>
            </RowCard.Header>
            <RowCard.BodyUser>
                <BodyTop>
                    <img src={userImg} alt="user" />
                    <RowCard.userName>{user.name}</RowCard.userName>
                </BodyTop>
                <BodyBottom>
                    <img src={phone} alt="phone" />
                    <RowCard.phone>{user.phone}</RowCard.phone>
                </BodyBottom>
            </RowCard.BodyUser>
            <RowCard.BodyPrice>
                <PriceTop>
                    <div className="prices">
                        <div className='center'>
                            <img src={priceFood} alt="" />
                            {Number(total) - 5000} UZS
                        </div>
                        <div className='center'>
                            <img src={priceCar} alt="" />
                            {5000} UZS
                        </div>
                    </div>
                    <div className='priceWay'>
                        <PriceTop.payme></PriceTop.payme>
                        <span style={{
                            fontSize: '14px',
                            letterSpacing: '0.466667px',
                            color: '#2D3A45',
                        }}>Payme</span>
                    </div>
                </PriceTop>
                <PriceBottom>
                        <span>Umumiy summa</span>
                        <h2>{total} <span>UZS</span> </h2>
                </PriceBottom>
            </RowCard.BodyPrice>
            <RowCard.Footer>
                <span>Operator:</span>
                <p>{operator.name}</p>
                <span>Fillial:</span>
                <p>{fillial.title}</p>
                <p>{fillial.location}</p>
                <button className='topBtn' onClick={()=>onDelete({ categoria, id })}><img src={clear} alt="clear" /></button>
                <button><img src={check} alt="check" /></button>
            </RowCard.Footer>
        </RowCard>
    )
}

export default CardRow
