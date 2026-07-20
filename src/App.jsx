import { useState } from "react";
import { foodListings, isListingClosingSoon } from "./data/foodListings.js";

/*
 * App.jsx — header, stats and footer are done.
 *
 * The listings are in state below. Something has to turn them into the
 * grid of cards — that component is in src/components/. Bring it in,
 * give it what it needs, then drop the placeholder box.
 *
 * Build order: card, list, then here.
 */
function App() {
  const [listings] = useState(foodListings);

  const totalPortions = listings.reduce(
    (runningTotal, listing) => runningTotal + listing.portions,
    0
  );
  const closingSoonCount = listings.filter(isListingClosingSoon).length;

  return (
    <div className="board">
      <header className="board-header">
        <p className="board-eyebrow">Community Food Board</p>

        <h1 className="board-title">Food Rescue Network</h1>

        <p className="board-subtitle">
          Good food gets thrown away every day while neighbours go without.
          Bakeries, grocers, caterers and restaurants post their surplus here;
          volunteer collectors pick it up and get it to people who need it —
          before the pickup window closes.
        </p>

        <div className="board-stats">
          <div className="stat">
            <span className="stat-value">{listings.length}</span>
            <span className="stat-label">Listings available</span>
          </div>
          <div className="stat">
            <span className="stat-value">{totalPortions}</span>
            <span className="stat-label">Portions being rescued</span>
          </div>
          <div className="stat">
            <span className="stat-value">{closingSoonCount}</span>
            <span className="stat-label">Closing within 2 hours</span>
          </div>
        </div>
      </header>

      <div className="board-empty">
        The board is empty. Build your components in{" "}
        <strong>src/components/</strong>, then render the list here — see the
        notes at the top of this file.
      </div>

      <footer className="board-footer">
        Food Rescue Network is a classroom prototype. All providers, pickup
        locations and listings on this board are fictional — please do not
        turn up anywhere expecting soup.
      </footer>
    </div>
  );
}

export default App;
