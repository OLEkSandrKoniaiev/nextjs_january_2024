import React from 'react';
import {getMeals} from "@/services/db/db";
import FormComponent from "@/components/FormComponent";
import MealComponent from "@/components/MealComponent";

const MealsPage = async () => {
    let meals = await getMeals();
    return (
        <div>
            <FormComponent/>
            {
                meals.map(meal => <MealComponent key={meal.id} meal={meal}/>)
            }
        </div>
    );
};

export default MealsPage;