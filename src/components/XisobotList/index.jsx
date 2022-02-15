import React, {useContext} from 'react'
import { Flex, FoodList, AddFoodButton } from '../../components/style/styled'
import { Headings } from './style'
import { dataXisobotList } from '../../utils/dataXisobotList'
import XisobotListItem from '../XisobotListItem'
import { XisobotlarApi } from '../../context/XisobotlarContext/XisobotlarContext'

const XisobotList = () => {

    const [xisobot, setXisobot] = useContext(XisobotlarApi)
    const headingTitle = [
    {id: 1, title: 'fillial', width: '25' },
    {id: 2, title: 'buyurtma summasi', width: '23.8' },
    {id: 3, title: 'mijoz', width: '23.8' },
    {id: 4, title: 'sana', width: '17.8' },
    {id: 5, title: 'action', width: '10' },
    ];

    const onDelete = (id) => {
        setXisobot(
            xisobot.filter(list => list.id !== id)
        )
    }

    return (
        <>
            <Headings>
                <Flex>
                    {
                        headingTitle.map(heading => <div key={heading.id} style={{ width: `${heading.width}%` }}>{heading.title}</div>)
                    }
                </Flex>
            </Headings>
            <FoodList>
                {
                    xisobot.map((value, index) => <XisobotListItem key={index} onDelete={onDelete} info={value} />)
                }
                <AddFoodButton onClick={() => setXisobot(dataXisobotList)}>yana yuklash</AddFoodButton>
            </FoodList>
        </>
    )
}

export default XisobotList
