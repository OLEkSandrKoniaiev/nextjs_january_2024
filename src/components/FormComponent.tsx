import React from 'react';
import {addMeal} from "@/services/db/db";

const FormComponent = () => {
    return (
        <form action={addMeal}>
            <input type={'text'} name={'title'} placeholder={'title'}/>
            <input type={'text'} name={'creator'} placeholder={'creator'}/>
            <input type={'text'} name={'image'} placeholder={'image'}/>
            <input type={'text'} name={'slug'} placeholder={'slug'}/>
            <input type={'text'} name={'summary'} placeholder={'summary'}/>
            <input type={'text'} name={'instructions'} placeholder={'instructions'}/>
            <input type={'text'} name={'creator_email'} placeholder={'creator_email'}/>
            <button>save meal</button>
        </form>
    );
};

export default FormComponent;