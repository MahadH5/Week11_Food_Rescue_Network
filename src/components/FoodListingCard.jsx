
import { useState } from "react";




function FoodListingCard({list}) {
  
  const isClosingSoon = false;
  const isFeatured = false;

  const closingClass = isClosingSoon ? " listing-card--closing" : "";
  const featuredClass = isFeatured ? " listing-card--featured" : "";
  const cardClassName = "listing-card" + closingClass + featuredClass;
  const [showDetails, setShowDetails] = useState(false);
  

  function handleToggleDetails() {
    setShowDetails(!showDetails);
  }


  return (
    <article className={cardClassName}>
      <div className="listing-media">
        <img src={list.imageUrl} alt={list.imageUrl} />
        <div className="listing-media-tag">{list.portions}</div>
      </div>

      <div className="listing-body">
        <h2 className="listing-title">{list.title}</h2>
        <p className="listing-provider">{list.provider}</p>

        <div className="badge-row">
          <span className="badge badge--category">{list.category}</span>
          <span className="badge badge--available">{list.status}</span>
          

          {isClosingSoon && (
            <span className="badge badge--closing">Closing Soon</span>
          )}
          {isFeatured && (
            <span className="badge badge--featured">Featured</span>
          )}
        </div>

        <div className="listing-meta">
          <span className="listing-meta-item">
            <span aria-hidden="true">📍</span>
            {list.pickupNeighborhood}
          </span>
          <span className="listing-meta-item">
            <span aria-hidden="true">🍽️</span>
            Feeds about {list.portions}
          </span>
        </div>

        <button type="button" onClick = {handleToggleDetails} className="details-button">
          Show pickup details
        </button>

        {showDetails && (
        
        
        

        <div className="listing-details">
          <div className="detail-row">
            <span className="detail-label">About</span>
            <span className="detail-value">{list.description}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Neighbourhood</span>
            <span className="detail-value">{list.pickupNeighborhood}</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Storage</span>
            <span className="detail-value">{list.storageInstructions}</span>
          </div>
        

          <div className="detail-row">
            <span className="detail-label">Allergens</span>
            {list.allergens.length > 0 ? (
              <div className="allergen-row">
                {list.allergens.map((allergen) => (
                  <span className="allergen-chip" key={allergen}>
                    {allergen}
                  </span>
                ))}
              </div>
            ) : (
              <span className="allergen-none">No listed allergens</span>
            )}
          </div>
        </div>
        )}
      </div>
    </article>
    
  );
}

export default FoodListingCard;