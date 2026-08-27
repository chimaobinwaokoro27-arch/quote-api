import { useEffect, useState } from "react";

import QuoteDisplay from "../components/QuoteDisplay";
import QuoteGrid from "../components/QuoteGrid";

const RANDOM_QUOTE_API =
  "https://dummyjson.com/quotes/random";

const QUOTES_API =
  "https://dummyjson.com/quotes?limit=9";

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [collectionLoading, setCollectionLoading] =
    useState(true);

  const [error, setError] = useState(null);
  const [collectionError, setCollectionError] =
    useState(null);

  async function fetchRandomQuote() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(RANDOM_QUOTE_API);

      if (!response.ok) {
        throw new Error("Failed to fetch random quote.");
      }

      const data = await response.json();

      setQuote(data);
    } catch (error) {
      console.error(error);

      setError(
        "We couldn't load a new quote. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function fetchQuoteCollection() {
    setCollectionLoading(true);
    setCollectionError(null);

    try {
      const response = await fetch(QUOTES_API);

      if (!response.ok) {
        throw new Error("Failed to fetch quote collection.");
      }

      const data = await response.json();

      setQuotes(data.quotes);
    } catch (error) {
      console.error(error);

      setCollectionError(
        "We couldn't load the quote collection."
      );
    } finally {
      setCollectionLoading(false);
    }
  }

  function selectQuote(selectedQuote) {
    setQuote(selectedQuote);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    fetchRandomQuote();
    fetchQuoteCollection();
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#171717]">



      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-8 lg:px-12">

        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            Quote
          </span>
        </div>

        <span className="hidden text-xs uppercase tracking-[0.2em] text-neutral-500 sm:block">
          Words worth keeping
        </span>

      </header>


      

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-28">

    

        <QuoteDisplay
          quote={quote}
          loading={loading}
          error={error}
          onNewQuote={fetchRandomQuote}
          onRetry={fetchRandomQuote}
        />


        <QuoteGrid
          quotes={quotes}
          loading={collectionLoading}
          error={collectionError}
          onSelect={selectQuote}
          onRetry={fetchQuoteCollection}
        />


        <footer className="mt-24 flex flex-col gap-3 border-t border-neutral-300/70 pt-6 text-xs uppercase tracking-[0.15em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            Quote Machine
          </p>

          <p>
            React × DummyJSON
          </p>

        </footer>

      </div>
    </main>
  );
}