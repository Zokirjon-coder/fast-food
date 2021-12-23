import React, { useEffect, useState, useContext } from 'react'
import HeadingFoods from '../../components/headingFoods/HeadingFoods'
import FoodListItem from '../../components/foodListItem/FoodListItem'
import { AddFoodButton, FoodList, MAIN } from '../../components/style/styled'
// import { dataFood } from '../../utils/dataFood'
import HeaderBar from '../../components/header/HeaderBar'
import { MahsulotlarApi } from '../../context/maxsulotlar/MahsulotlarContext'



const Maxsulotlar = () => {
    const [foods, setFoods] = useContext(MahsulotlarApi)
    // const [ffoods, setFfoods] = useState(foods);
    
    // useEffect(() => {
    //     setFfoods(foods);
    //     console.log(ffoods);
    // }, [foods])

    const onDelete = (id) => {
        setFoods(foods.filter(data => data.id !== id));
    }

    return (
        <>
            <HeaderBar foods={[foods, setFoods]} />
            <HeadingFoods />
            <FoodList>
                {foods.map(value => <FoodListItem key={value.id} info={value} onDelete={onDelete} />)}
                <AddFoodButton>yana yuklash</AddFoodButton>
            </FoodList>
        </>
    )
}

export default Maxsulotlar;