import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://serene-headland-52528.herokuapp.com/addProduct', {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
          if(result.insertedId){
            alert('Product create Successfully')
            reset()
          }
        })
      };
    return (
        <div>
            <h3>Add a product</h3>
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("country_name")} placeholder="country_name"/>
            <br />
            <input {...register("title")} placeholder="title"/>
            <br />
            <input {...register("price")} placeholder="price"/>
            <br />
            <input {...register("image")} placeholder="image"/>
            <br />
            <textarea {...register('description')} placeholder="description"/>
            <br />
            <input type="submit" className="btn btn-info" />
            </form>
        </div>
    );
};

export default AddProduct;