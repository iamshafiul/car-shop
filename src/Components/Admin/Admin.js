import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";



const AddEvents = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setIMageURL] = useState(null)

  const onSubmit = data => {
    
    const eventData = {
      name: data.name,
      price: data.price,
      quantity:data.quantity,
      imageURL: imageURL
    }
    console.log(eventData)
    const url= `http://localhost:5000/addEvent`;
    fetch(url,{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(eventData)
    })
    .then(res =>console.log('server side res',res))
  };

    const handleImageUpload = event  => {
        const imgData = new FormData()
        imgData.set('key','10f4eabf2470f1da1842c8325e51e3e9')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', 
        imgData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-dark  text-white p-5 w-50 m-auto border border-white shadow rounded" >
   
    <input name="name" defaultValue="Car Name" type="text" ref={register} />
    <input name="quantity" defaultValue="Quantity" type="text" ref={register} />
    <input name="price" defaultValue="price" type="text" ref={register} />
   
    <input name="newproduct" type="file"   onChange={handleImageUpload}/>
    
    <input type="submit" />
  </form>
  );
};

export default AddEvents;
