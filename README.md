# Week 11 — Food Rescue Network 🥕

Bakeries and kitchens post the food they have spare. Collectors browse the board and pick it up before it goes to waste. You're building that board.

The design is already done — the stylesheet, the layout, the illustrations, the data. **You're writing the React**, and every line of it is a concept from class.

This is what every React app is underneath: **data → components → screen.**

## Setup

1. **Fork** this repo to your account.
2. Clone it locally and open it in your editor.
3. Install and run it:

```bash
npm install
npm run dev
```

4. Open the URL Vite prints (usually `http://localhost:5173`).

You should see a finished header, three live stat boxes, and a dashed **"the board is empty"** box below them. That's the correct starting point — it's not broken. That box is where your work goes.

## The data

Open `src/data/foodListings.js` and read it. **Never edit it.** It exports eight listings, and each one looks like this:

```js
{
  id: 1,
  title: "Day-End Bread & Pastries",
  provider: "Sunrise Bakery",
  category: "Bakery",
  portions: 24,
  pickupNeighborhood: "Riverside",
  availableUntil: "2026-01-15T16:30:00",
  allergens: ["Wheat", "Eggs"],
  storageInstructions: "Keep dry; room temperature is fine today.",
  description: "Fresh loaves, rolls and pastries from this morning's bake.",
  imageUrl: "/images/bread.svg",
  status: "Available",
  featured: false,
}
```

That same file also exports `isListingClosingSoon()` — a ready-made helper that tells you whether a listing's pickup window is nearly up. Use it. Don't write the date maths yourself.

## What's yours

| File | Your job |
|---|---|
| `src/components/FoodListingCard.jsx` | one listing → one card *(start here)* |
| `src/components/FoodListingList.jsx` | the array → a grid of cards |
| `src/App.jsx` | put the grid on the board |

Everything else is provided. **You write no CSS this week, and you don't build any markup** — the layout and every class name are already in place. You'll add imports, props, state, and the few lines that wire them together. Each of those three files has a short note at the top telling you what it needs to do.

> 💡 Three of the tasks need something imported at the top of the file. React won't guess for you — if you use a name you never imported, you'll get `X is not defined`.

---

## Tasks

### Task 1 — Give the Card a Prop 🎁

`FoodListingCard` doesn't accept anything yet, but its JSX already reads `listing.title`. Give the component a `listing` prop so that variable exists.

> 💡 Do this one **first**. Skip it and you'll get a blank white page — and `npm run build` will still pass, which makes it a horrible bug to chase.

---

### Task 2 — Fill In the Card 🏷️

The card is full of `PLACEHOLDER` text — ten of them. Each one is a piece of the listing: its photo, what the food is, the neighbourhood, the portions, the lines in the details panel.

Work down the file and swap each one for the right field. `title` and `provider` are already done — follow that pattern.

> 💡 Nothing on a finished card should be typed in by hand. If you find yourself writing the word `"Available"`, there's a field for that.

---

### Task 3 — Light Up the Badges ✨

Near the top of the card are two values set to `false`. They decide whether the **Closing Soon** and **Featured** badges appear, and both answers come from the listing.

One of them is the helper from the data file — you'll need to import it here, and note the path from `src/components/` isn't the same one `App.jsx` uses. The other is a field you can read straight off the listing.

> 💡 These are recalculated every time the card renders — they're not state, and they don't need to be.

---

### Task 4 — Remember If It's Open 🔘

Each card has a button and a details panel. Right now the panel is always visible and the button does nothing.

The card needs to **remember** whether its own panel is open:

1. Import `useState` and add a piece of state that starts closed
2. Write a named handler that flips it
3. Give the button an `onClick`
4. Make the label say what the next click will do
5. Show the panel only when it's open

> 💡 Open one card and watch the others. If they all open together, that memory is in the wrong component.

---

### Task 5 — Build the List 🔁

`FoodListingList` receives the whole array and has to render one card per listing, inside the `.board-grid` that's already there. Replace the dashed placeholder box sitting inside that grid.

You'll need to import the card into this file, each card needs its own listing handed to it, and React needs a stable way to tell the cards apart between renders.

> 💡 The array position works today and breaks the moment a list gets sorted or filtered. There's a better field for the job.

---

### Task 6 — Put It On the Board 🚀

In `App.jsx`, import your list component, render it, and give it the listings. Then delete the dashed placeholder box in this file too — there's one in each of the two files.

The board goes live here. Eight cards, all from the data file.

---

## ✅ When you're done

- Eight cards fill the board
- Every word on a card comes from the data — no `PLACEHOLDER` anywhere
- Exactly **three** cards show Closing Soon, and **three** show Featured
- Clicking one card's button opens only that card, and the label flips
- The stats at the top read **8 listings · 335 portions · 3 closing soon**
- One column on a phone, a grid on a laptop
- The console is clean and `npm run build` passes

## Submitting

```bash
git add .
git commit -m "Complete Week 11 Food Rescue Network board"
git push
```

Submit your repo link.

**In your README, answer this in 3–6 sentences:** which information on a card arrived through props, and what did each card remember for itself? Why does that split make sense?

## 🆘 Stuck?

| What you see | What it means |
|---|---|
| Blank white page, `ReferenceError: listing is not defined` | Task 1 isn't done — the card has no `listing` prop |
| `useState is not defined` (or any other `X is not defined`) | You used something you never imported at the top of that file |
| `Each child in a list should have a unique "key" prop` | Your `.map()` is missing a key |
| `Too many re-renders` | You called your handler instead of passing it — check for `()` |
| `Element type is invalid … but got: undefined` | An import problem: default exports come in without curly braces |
| `Adjacent JSX elements must be wrapped…` | You returned two things side by side; wrap them in one |
| A card renders but looks unstyled | A misspelled class name — check `src/index.css` |

Still stuck? Open the console — React names the component that broke. And `console.log` your prop at the top of the component: if it prints `undefined`, the bug is in the **parent**, not the file you're staring at.

## 🚀 Stretch (optional)

- Sort the board so Closing Soon listings come first
- Add each card's pickup deadline in a friendly format — the data has `availableUntil`, and nothing on the card shows it yet (this one does mean adding a little markup)
- Add a small "8 listings from 8 providers" line under the stats
- Make the whole card keyboard-focusable, not just the button
