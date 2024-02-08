export default function Banner() {
    return (
        <>
            {/* Top Banner */}
            <a href="/company" className="hover:font-extrabold focus:font-extrabold active:font-extrabold">
                <div className="text-xs text-[#F2F2F2] text-center py-2 bg-[#D17B49]">
                    <span className="inline-flex items-center justify-center">
                        Same Day CPI is now serving Los Angeles/OC
                        <span className="text-gray-300 text-xs mx-2">|</span>
                        Read more
                        <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-1 h-2.5 w-2.5 opacity-60 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)]">
                            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                        </svg>
                    </span>
                </div>
            </a>
        </>
    )
}