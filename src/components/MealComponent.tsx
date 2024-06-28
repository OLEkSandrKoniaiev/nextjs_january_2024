import React, {FC} from 'react';

interface IProps {
    meal: IMeal
}

const MealComponent: FC<IProps> = ({meal}) => {
    return (
        <div>
            <p>{meal.id}. <b>{meal.title}</b> - made by: {meal.creator}</p>
            <p><img alt={meal.title} src={meal.image} sizes={'500x500'}/></p>
            <p>{meal.instructions}</p>
            <hr/>
        </div>
    );
};

export default MealComponent;