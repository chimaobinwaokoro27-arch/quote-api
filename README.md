# Quote Machine

A single-page quote machine built with React, Vite, Tailwind CSS, and the DummyJSON Quotes API.

The app displays one quote at a time as the main focus, while providing a collection of quotes that users can browse and select.

## Features

* Fetches a random quote when the page loads
* Displays the quote and author prominently
* Fetches a new random quote using the **New Quote** button
* Disables the button while a request is loading
* Displays a loading state while fetching data
* Displays an error message with a retry option when a request fails
* Fetches and displays a collection of 9 quotes
* Allows users to click a quote card to promote it to the main display
* Responsive layout for mobile, tablet, and desktop screens
* Designed to remain usable down to 375px wide

## API

This project uses the DummyJSON Quotes API.

### Random Quote

```text
https://dummyjson.com/quotes/random
```

Returns a single quote object:

```text
{
  id,
  quote,
  author
}
```

### Quote Collection

```text
https://dummyjson.com/quotes?limit=9
```

Returns an object containing the quotes collection:

```text
{
  quotes: [...],
  total,
  skip,
  limit
}
```

## Technologies

* React
* Vite
* React Router
* Tailwind CSS
* JavaScript
* DummyJSON API
* Google Fonts

## Design Reference

### Dribbble Reference
https://dribbble.com/shots/10842266-Quotes-App-UI-Design

The design direction was inspired by the selected Dribbble reference.

I used the reference for its typography, spacing, visual hierarchy, whitespace, and minimal approach to presenting quotes.

The design was adapted for this project rather than copied directly. The main focus of the interface is the quote itself, with the supporting information and controls kept visually quieter.

## Design Decisions

### Typography

The quote is the largest element on the page so that it immediately becomes the visual focus.

The author is displayed at a smaller size underneath the quote, while the quote collection uses a separate but consistent type scale.

A Google Font is used instead of relying on the default Tailwind font.

### Colour

The interface uses a restrained neutral colour palette with one orange accent colour.

The orange accent is used for important interactive and supporting elements without competing with the quote.

### Spacing

Generous whitespace is used around the main quote and between sections.

The main quote also has a controlled maximum width to keep longer lines readable.

### Responsive Design

The quote collection uses:

* One column on mobile
* Two columns on medium screens
* Three columns on large screens

The layout was designed and tested for smaller screens, including 375px wide displays.

## Component Structure

```text
app/
├── components/
│   ├── QuoteDisplay.jsx
│   ├── QuoteCard.jsx
│   └── QuoteGrid.jsx
│
├── routes/
│   └── home.jsx
│
├── root.jsx
└── app.css
```

### QuoteDisplay

Handles the main quote display, author, loading state, error state, and New Quote button.

### QuoteCard

Displays an individual quote from the collection.

### Grid

Displays the collection of 9 quotes as a responsive grid.

### Home

Handles fetching the random quote and quote collection and manages the application state.

## Data Handling

The project uses the native JavaScript `fetch` API.

The application checks `response.ok` before processing API responses and uses `finally` to stop loading states after requests finish.

The random quote endpoint and collection endpoint return different response shapes, so they are handled separately.

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## Project Goal

The goal of this project is to demonstrate the use of React, API fetching, component-based development, responsive design, and thoughtful visual design in a small real-world application.

## Assignment

RAD5 TECH HUB
Frontend Engineering Program

**Assignment:** Quote Machine

**API:** DummyJSON Quotes API

**Work:** Individual
