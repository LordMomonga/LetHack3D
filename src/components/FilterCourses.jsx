import { BiSearch } from "react-icons/bi";
import { PiSlidersHorizontalFill } from "react-icons/pi";

export default function FilterCourses() {
    return (
        <>
            <form className="flex items-center w-full max-w-lg mx-auto mb-8 gap-2">
                <label htmlFor="journey-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input
                        type="text"
                        id="journey-search"
                        className="bg-gray-200 outline-none text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-gray-500 block w-full p-3  dark:bg-dark-accent dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary"
                        placeholder="Search..."
                        required
                    />
                    <button
                        type="submit"
                        className="outline-none absolute inset-y-0 end-0 flex items-center pe-3 focus:ring-2 focus:ring-gray-500 dark:focus:ring-primary"
                    >
                        <BiSearch />
                    </button>
                </div>
                <button
                    type="button"
                    className="outline-none py-2 px-4 h-12 rounded-xl text-lg bg-gray-300 text-writing dark:text-white dark:bg-dark-accent focus:ring-2 focus:ring-gray-500 dark:focus:ring-primary"
                >
                    <PiSlidersHorizontalFill />
                </button>
            </form>
        </>
    )
}