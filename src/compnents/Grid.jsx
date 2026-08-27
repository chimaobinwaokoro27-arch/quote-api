import QuoteCard from "./QuoteCard";

export default function QuoteGrid({
  quotes,
  loading,
  error,
  onSelect,
  onRetry,
}) {
  return (
    <section>

      

      <div className="mb-8 flex flex-col gap-3 border-b border-neutral-300/70 pb-5 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-orange-500">
            The collection
          </p>

          <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            More words to explore
          </h2>

        </div>

        <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
          09 quotes
        </p>

      </div>


      

      {loading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-[270px] animate-pulse border border-neutral-200 bg-white p-6"
            >
              <div className="h-3 w-8 rounded bg-neutral-200" />

              <div className="mt-10 h-4 w-full rounded bg-neutral-200" />

              <div className="mt-3 h-4 w-5/6 rounded bg-neutral-200" />

              <div className="mt-3 h-4 w-2/3 rounded bg-neutral-200" />

              <div className="mt-20 h-3 w-24 rounded bg-neutral-200" />
            </div>
          ))}

        </div>
      )}



      {!loading && error && (
        <div className="border border-red-200 bg-red-50 p-6">

          <p className="text-sm text-red-700">
            {error}
          </p>

          <button
            onClick={onRetry}
            className="mt-5 rounded-full bg-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Try again
          </button>

        </div>
      )}




      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onClick={onSelect}
            />
          ))}

        </div>
      )}

    </section>
  );
}