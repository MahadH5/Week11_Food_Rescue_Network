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
function FoodListingList() {
  return (
    <div className="board-grid">
      <div className="board-empty">
        FoodListingList is still showing its placeholder.
      </div>
    </div>
  );
}

export default FoodListingList;
