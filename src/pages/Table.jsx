import Layouts from "../components/layout/Layouts"

const Table = () => {
    return (
        <>
            <Layouts>
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <h1>Table Layout</h1>
                        <div>
                            {"Konrix > layout > Table Layout"}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="bg-white p-2 md:p-4 rounded-md shadow-lg w-full">
                            {/* Filter section */}
                            <div className="flex justify-between items-center space-x-7 mb-3">
                                <div className="flex space-x-5">
                                    <div className="flex items-center space-x-1 text-sm sm:text-base">
                                        <label htmlFor="sort" className="text-gray-500 font-xs w-14">Sort By</label>
                                        <select id="sort" className="border border-gray-300 rounded px-1 py-[6px] sm:p-2 focus:outline-none focus:ring-1 focus:ring-blue-300">
                                            <option value="name">Name</option>
                                            <option value="status">Status</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center space-x-1 text-sm sm:text-base">
                                        <label htmlFor="sort" className="text-gray-500 font-xs w-10">Row</label>
                                        <select id="sort" className="border border-gray-300 rounded px-1 py-[6px] sm:p-2 focus:outline-none focus:ring-1 focus:ring-blue-300">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md py-1 sm:py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-300" />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Filter section ends here*/}

                            {/* Table section */}
                            <div className="">
                                <table className="min-w-full text-xs md:text-sm">
                                    <thead className="text-gray-400 bg-gray-100 border-y-[1px]">
                                        <tr>
                                            <th className="py-3 pl-3 pr-1">#SL</th>
                                            <th className="py-3 px-5 text-left">Name</th>
                                            <th className="py-3 px-5 text-left">Address</th>
                                            <th className="py-3 px-5 text-left">Status</th>
                                            <th className="py-3 px-5 text-left">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-500 ">
                                        <tr className="hover:text-blue-700 border-b-[1px] hover:bg-blue-100/50">
                                            <td className="py-2 pl-3 pr-1 text-center">1</td>
                                            <td className="py-2 px-5">John Doe</td>
                                            <td className="py-2 px-5">123 Main St</td>
                                            <td className="py-2 px-5">
                                                <span className="text-blue-700 bg-blue-100 py-1 px-3 rounded-full">Active</span>
                                            </td>
                                            <td className="py-2 px-5">
                                                <div className="flex space-x-1 sm:space-x-3">
                                                    <button className="text-blue-700 bg-blue-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </button>
                                                    <button className="text-red-700 bg-red-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="hover:text-blue-700 border-b-[1px] hover:bg-blue-100/50">
                                            <td className="py-2 pl-3 pr-1 text-center">2</td>
                                            <td className="py-2 px-5">Jane Smith</td>
                                            <td className="py-2 px-5">456 Elm St</td>
                                            <td className="py-2 px-5">
                                                <span className="text-red-700 bg-red-100 py-1 px-3 rounded-full">Inactive</span>
                                            </td>
                                            <td className="py-2 px-5">
                                                <div className="flex space-x-1 sm:space-x-3">
                                                    <button className="text-blue-700 bg-blue-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </button>
                                                    <button className="text-red-700 bg-red-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="hover:text-blue-700 border-b-[1px] hover:bg-blue-100/50">
                                            <td className="py-2 pl-3 pr-1 text-center">3</td>
                                            <td className="py-3 px-5">John Doe</td>
                                            <td className="py-2 px-5">123 Main St</td>
                                            <td className="py-2 px-5">
                                                <span className="text-blue-700 bg-blue-100 py-1 px-3 rounded-full">Active</span>
                                            </td>
                                            <td className="py-2 px-5">
                                                <div className="flex space-x-1 sm:space-x-3">
                                                    <button className="text-blue-700 bg-blue-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>
                                                    </button>
                                                    <button className="text-red-700 bg-red-100 rounded-md p-2 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>

                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            {/* Table section end here */}

                            {/* Pagination starts here */}
                            <div className="flex justify-between items-center mt-4 text-gray-500">
                                <div>
                                    <p className="text-xs sm:text-base">Showing 1 to 10 of 50 entries</p>
                                </div>
                                <nav className="inline-flex -space-x-px text-sm sm:text-base">
                                    <button className="pagination-button">Previous</button>
                                    <button className="pagination-button">1</button>
                                    <button className="active-pagination-button">2</button>
                                    <button className="pagination-button">3</button>
                                    <button className="pagination-button">4</button>
                                    <button className="pagination-button">...</button>
                                    <button className="pagination-button">10</button>
                                    <button className="pagination-button">Next</button>
                                </nav>
                            </div>
                            {/* Pagination ends here */}
                        </div>
                    </div>
                </div>
            </Layouts>
        </>
    )
}

export default Table