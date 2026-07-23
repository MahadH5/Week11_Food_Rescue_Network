import FoodListingCard from "./FoodListingCard";



/*
 * FoodListingList — App hands it the whole array; it renders one card
 * per listing inside the .board-grid below.
 *
 * You need the card component in here, each card needs its own listing,
 * and React needs a stable way to tell the cards apart (the array
 * position is not it).
 *
 * Replace the placeholder box. Write this after the card.
 */


function FoodListingList(props) {
  return (
    <div className="board-grid">
      {/* <div className="board-empty"> */}
        {props.listings.map((food) =>(
          <FoodListingCard list={food}/>
        ))}
      {/* </div> */}
    </div>
  );
}

export default FoodListingList;
