export default function QuoteDisplay({
  quote,
  loading,
  error,
  onNewQuote,
  onRetry,
}) {
  return (
    <section className="mb-28">

      <div className="grid gap-10 lg:grid-cols-[140px_1fr]">


        <div className="hidden lg:block">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            01
          </span>
        </div>



        <div>

          <div className="mb-8 flex items-center gap-3">

            <span className="h-px w-8 bg-orange-500" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Featured thought
            </span>

          </div>


          {loading && (
            <div className="max-w-4xl animate-pulse">

              <div className="mb-4 h-10 w-full rounded bg-neutral-200 sm:h-14 lg:h-16" />

              <div className="mb-4 h-10 w-11/12 rounded bg-neutral-200 sm:h-14 lg:h-16" />

              <div className="h-10 w-8/12 rounded bg-neutral-200 sm:h-14 lg:h-16" />

              <div className="mt-8 h-5 w-40 rounded bg-neutral-200" />

            </div>
          )}


          

          {!loading && error && (
            <div className="max-w-xl border border-red-200 bg-red-50 p-6">

              <p className="text-sm leading-6 text-red-700">
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


        

          {!loading && !error && quote && (
            <>
              <blockquote className="max-w-[18ch] text-[2.7rem] font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">

                “{quote.quote}”

              </blockquote>


              <div className="mt-8 flex items-center gap-4">

                <div className="h-px w-10 bg-neutral-300" />

                <p className="text-sm text-neutral-500 sm:text-base">
                  {quote.author}
                </p>

              </div>
            </>
          )}



          {!error && (
            <button
              onClick={onNewQuote}
              disabled={loading}
              className="group mt-10 inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-40"
            >

              {loading
                ? "Loading..."
                : "New quote"}

              {!loading && (
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              )}

            </button>
          )}

        </div>

      </div>

    </section>
  );
}