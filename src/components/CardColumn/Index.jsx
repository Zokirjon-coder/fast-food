import React, { useContext } from 'react'
import { CircleBtn, Flex } from '../style/styled'
import { ColumnCard } from './styled'
import markImg from '../../assets/images/CardPath.png'
import clock from '../../assets/images/clock.png'
import userImg from '../../assets/images/user.png'
import clear from '../../assets/images/x.png'
import check from '../../assets/images/Check.png'
import { BooksApi } from '../../context/BuyurtmalarContext/BuyurtmalarContext'

function CardColumn(props) {
    const [books, setBooks] = useContext(BooksApi)
    const { id, categoria, orderId, time, total, user, operator, fillial } = props.value;

    const onDelete = ({ categoria, id }) => {
        setBooks(
            Object.fromEntries(Object.entries(books)
                .forEach(value => value[1]
                    .filter(data => data.categoria !== categoria && data.id !== id)
                )
            )
        )
    }

    return (
        <ColumnCard key={id}>
            <ColumnCard.header>
                <Flex.spaceBtwn>
                    <Flex>
                        <ColumnCard.greenEl>{orderId}</ColumnCard.greenEl>
                        <ColumnCard.mark><img src={markImg} /></ColumnCard.mark>
                    </Flex>
                    <Flex>
                        <img src={clock} />
                        <ColumnCard.time>{time}</ColumnCard.time>
                    </Flex>
                </Flex.spaceBtwn>
            </ColumnCard.header>
            <ColumnCard.body>
                <ColumnCard.userInf>
                    <ColumnCard.userImg>
                        <img src={userImg} alt="user" />
                    </ColumnCard.userImg>
                    <div>
                        <ColumnCard.userName>{user.name}</ColumnCard.userName>
                        <ColumnCard.phone>{user.phone}</ColumnCard.phone>
                    </div>
                </ColumnCard.userInf>
                <ColumnCard.price>
                    <div className='infoPrice'>
                        <ColumnCard.title>Umumiy summa</ColumnCard.title>
                        <div>
                            <ColumnCard.payme></ColumnCard.payme>
                            <span style={{
                                fontSize: '14px',
                                letterSpacing: '0.466667px',
                                color: '#2D3A45',
                            }}>Payme</span>
                        </div>
                    </div>
                    <h1>{total} <span>UZS</span> </h1>
                </ColumnCard.price>
            </ColumnCard.body>
            <ColumnCard.footer>
                <Flex.spaceBtwnHA>
                    <div>
                        <span>Operator:</span>
                        <p>{operator.name}</p>
                    </div>
                    <CircleBtn onClick={() => onDelete({ categoria, id })} param={{ diametr: "40", borderWidth: "3" }}>
                        <Flex className="centered">
                            <img style={{ borderRadius: 0 }} src={clear} alt="" />
                        </Flex>
                    </CircleBtn>
                </Flex.spaceBtwnHA>
                <div style={{ height: '16px' }}></div>
                <Flex.spaceBtwnHA>
                    <div>
                        <span>Fillial:</span>
                        <p>{fillial.title}</p>
                        <p>{fillial.location}</p>
                    </div>
                    <CircleBtn param={{ diametr: "40", borderWidth: "3" }}>
                        <Flex className="centered">
                            <img style={{ borderRadius: 0 }} src={check} alt="" />
                        </Flex>
                    </CircleBtn>
                </Flex.spaceBtwnHA>
            </ColumnCard.footer>
        </ColumnCard>
    )
}

export default CardColumn
