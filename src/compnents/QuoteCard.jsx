export default function QuoteCard({
  quote,
  onClick,
}) {
  return (
    <button
      onClick={() => onClick(quote)}
      className="group flex min-h-[270px] flex-col border border-neutral-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-neutral-900/5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:p-7"
    >

    

      <div className="flex items-center justify-between">

        <span className="text-xs font-semibold tracking-[0.15em] text-orange-500">
          {String(quote.id).padStart(2, "0")}
        </span>

        <span className="text-lg text-neutral-300 transition group-hover:text-orange-500">
          ↗
        </span>

      </div>


    

      <p className="mt-8 flex-1 text-lg leading-8 tracking-[-0.01em] text-neutral-800">
        “{quote.quote}”
      </p>



      <div className="mt-8 border-t border-neutral-100 pt-5">

        <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
          {quote.author}
        </p>

      </div>

    </button>
  );
}