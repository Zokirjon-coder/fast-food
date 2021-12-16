import React, { useState } from 'react'
import HeadingFoods from '../../components/headingFoods/HeadingFoods'
import FoodListItem from '../../components/foodListItem/FoodListItem'
import { AddFoodButton, FoodList, MAIN } from '../../components/style/styled'
import { dataFood } from '../../utils/dataFood'


const Maxsulotlar = () => {

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
        <>
            <HeadingFoods />
            <FoodList>
                {foods.map(value => <FoodListItem key={value.id} info={value} onDelete={onDelete} />)}
                <AddFoodButton>yana yuklash</AddFoodButton>
            </FoodList>
        </>
    )
}

export default Maxsulotlar;