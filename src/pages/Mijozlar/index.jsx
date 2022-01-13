import React, { useContext } from 'react'
import { CustomersApi } from '../../context/CustomersContext'
import Headerbar from '../../components/header/HeaderBar'
import { Flex, FoodList, AddFoodButton } from '../../components/style/styled'
import { Headings } from './style'
import CustomerListItem from '../../components/customerListItem'
import { dataCustomers } from '../../utils/dataCustomers'

const Mijozlar = (props) => {
    const [customer, setCustomer] = useContext(CustomersApi)

    const headingTitle = [
        { id: 1, title: 'mijoz ismi', width: '210' },
        { id: 2, title: 'telefon raqami', width: '180' },
        { id: 3, title: 'buyurtmalar soni', width: '150' },
        { id: 4, title: 'status', width: '150' },
        { id: 5, title: 'action', width: '150' },
    ]


    return (
        <>
            <Headerbar foods={[customer, setCustomer]} />
            <Headings>
                <Flex>
                    {
                        headingTitle.map(heading => <div key={heading.id} style={{ width: `${heading.width}px` }}>{heading.title}</div>)
                    }
                </Flex>
            </Headings>
            <FoodList>
                {
                    customer.map(value => <CustomerListItem key={value.id} info={value} />)
                }
                <AddFoodButton onClick={()=>setCustomer(dataCustomers)}>yana yuklash</AddFoodButton>
            </FoodList>
        </>
    )
}

export default Mijozlar
