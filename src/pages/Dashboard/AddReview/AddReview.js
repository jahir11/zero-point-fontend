import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css'
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addReview', {
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
          if(result.insertedId){
            alert('Review create Successfully')
            reset()
          }
        })
      };
    return (
        <div>
            <h2>Add a Review</h2>
            <form className="review-form" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")} placeholder="Your name"/>
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

export default AddReview;