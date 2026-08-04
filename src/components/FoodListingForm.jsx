import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import{LISTING_CATEGORIES} from "../data/listingOptions"







// Build the whole form here. Replace the placeholder with your fields.
//   1. useForm() -> register, handleSubmit, reset, errors. Add a Zod schema
//      with zodResolver for validation.
//   2. Schema: title, provider, pickupNeighborhood are required strings; category
//      is required (options from LISTING_CATEGORIES in ../data/listingOptions.js);
//      portions is z.coerce.number().min(1); description is optional.
//   3. Fields go inside <form>: {...register("name")}, a <label>, and an
//      {errors.name && ...} message. Classes: form-field (+ --full), form-label,
//      form-input, form-select, form-textarea, field-error.
//   4. onValid(data): onAddListing(data) then reset() — it appears on the board.



const listingSchema = z.object({
    title: z .string() .min(2, "Title is required"), 
    provider: z .string() .min(2, "Provider is required"),
    portions: z .coerce.number() .min(1, "Must be at least 1"),
    category: z .string() .min(2, "Chose The  Right category"),
    pickupNeighborhood: z .string() .min(3, "Location is required")



    
  });

function FoodListingForm({ onAddListing }) {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(listingSchema)
      });


      function onValid(data) {
        onAddListing(data)
        reset()
      }







  return (

    <section className="post-panel">
      <h2 className="post-panel-title">Post surplus food</h2>
      <p className="post-panel-intro">
        Fields marked * are required. Your listing goes straight onto the board.
      </p>

      


<form className="FoodListingForm" onSubmit={handleSubmit(onValid)} noValidate>
      <h2>Add your List HERE</h2>

      <div className="form--field--full">
        <label className="form-label" htmlFor="provider">Your Name</label>
        <input id="provider" type="text" className="form-input" placeholder="e.g. Mahad" {...register("provider")} />
        {errors.provider && (
            <p className="field-error" role="alert">{errors.provider.message}</p>
        )}
      </div>

      <div className="form-field--full">
        <label className="form-label" htmlFor="title"> Title </label>
        <input id="title" type="text"className="form-input" placeholder="Title of the Food"{...register("title")}/>
        {errors.title && (
            <p className="field-error" role="alert">{errors.title.message}</p>
        )}
      </div>
      <div className="form-field--full">
        <label className="form-label" htmlFor="pickupNeighborhood">Pick-UP Location</label>
        <input id="pickupNeighborhood" type="text" className="form-input" placeholder="Pick-Up Area"{...register("pickupNeighborhood")}/>
        {errors.pickupNeighborhood && (
            <p className="form-error" role="alert">{errors.pickupNeighborhood.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="">Food Type</label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Choose The Type </option>
          {LISTING_CATEGORIES.map((category) => ( 
            <option  key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
            <p className="form-error" role="alert">{errors.category.message}</p>
        )}
      </div>

      <div className="form-field">
        <label className="fom-label" htmlFor="portion">Portion</label>
        <input id="Portions" type="number" className="form-input" placeholder="How Many Portions ?" {...register("portions", {valueAsNumber: true})} />
        {errors.portions && (
            <p className="form-error" role="alert">{errors.portions.message}</p>
        )}
      </div>

      <div className="form-field form-field--full">
        <label className="form-label" htmlFor="description">Description</label>
        <textarea className="form-textarea" id="description" placeholder="Tell us More About The Food" {...register("description")}></textarea>
        {errors.description && (
            <p className="form-error" role="alert">{errors.description.message}</p>
        )}
      </div>

      

      <div className="form-actions">
        <button type="submit" className="submit-button" > Post Here</button>
       
      </div>

    </form>

   

      
    </section>


    
  );
}

export default FoodListingForm;
