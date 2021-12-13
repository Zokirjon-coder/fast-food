import React, { useState } from 'react'
import HeadingFoods from '../headingFoods/HeadingFoods'
import HeaderBar from '../header/HeaderBar'
import FoodListItem from '../foodListItem/FoodListItem'
import { AddFoodButton, FoodList, MAIN } from '../style/styled'
import { dataFood } from '../../utils/dataSidebar'


const Main = () => {

    const [foods, setFoods] = useState(dataFood);

    const onDelete = (id) => {
        setFoods( foods.filter(data => data.id !== id) );
    }

    const onSearch = (e) => {
        let value = e.target.value.toLowerCase();
        setFoods(
            dataFood.filter(data => data.name.toLowerCase().includes(value))
        )
    }
    return (
        <MAIN>
            <HeaderBar onSearch={onSearch} />
            <HeadingFoods />
            <FoodList>
                {foods.map(value => <FoodListItem key={value.id} info={value} onDelete={onDelete} />)}
                <AddFoodButton>yana yuklash</AddFoodButton>
            </FoodList>
        </MAIN>
    )
}

export default Main;