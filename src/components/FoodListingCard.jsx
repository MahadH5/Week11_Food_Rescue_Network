/*
 * FoodListingCard — renders ONE listing. Markup and CSS are done.
 *
 * Take a listing as a prop and fill every PLACEHOLDER from it
 * (src/data/foodListings.js). Title and provider show the pattern.
 *
 * The two `false` values come from the listing too — the data file
 * exports a helper for the closing-soon rule.
 *
 * The card remembers its own open/closed state: show the panel only
 * when open, and flip the button label.
 */
function FoodListingCard() {
  const isClosingSoon = false;
  const isFeatured = false;

  const closingClass = isClosingSoon ? " listing-card--closing" : "";
  const featuredClass = isFeatured ? " listing-card--featured" : "";
  const cardClassName = "listing-card" + closingClass + featuredClass;

  return (
    <article className={cardClassName}>
      <div className="listing-media">
        <img src="PLACEHOLDER" alt="PLACEHOLDER" />
        <div className="listing-media-tag">PLACEHOLDER portions</div>
      </div>

      <div className="listing-body">
        <h2 className="listing-title">{listing.title}</h2>
        <p className="listing-provider">{listing.provider}</p>

        <div className="badge-row">
          <span className="badge badge--category">PLACEHOLDER</span>
          <span className="badge badge--available">PLACEHOLDER</span>

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
            PLACEHOLDER
          </span>
          <span className="listing-meta-item">
            <span aria-hidden="true">🍽️</span>
            Feeds about PLACEHOLDER
          </span>
        </div>

        <button type="button" className="details-button">
          Show pickup details
        </button>

        <div className="listing-details">
          <div className="detail-row">
            <span className="detail-label">About</span>
            <span className="detail-value">PLACEHOLDER</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Neighbourhood</span>
            <span className="detail-value">PLACEHOLDER</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Storage</span>
            <span className="detail-value">PLACEHOLDER</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Allergens</span>
            {listing.allergens.length > 0 ? (
              <div className="allergen-row">
                {listing.allergens.map((allergen) => (
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
      </div>
    </article>
  );
}

export default FoodListingCard;
