import avatar from "../../assets/avatar.jpg";

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleSidebarToggle }) => {
    return (
        <>
            <div className="bg-white border-b-[1px] border-l-[1px] px-6 py-[14px] flex flex-row items-center justify-between text-[#6C757D]">
                <div className="overflow-hidden rounded">
                    <button onClick={handleSidebarToggle} className="p-3 hover:bg-blue-500/20 hover:text-blue-500 hover:rounded-full transition-all duration-500 ease-out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center gap-4 mr-2">
                    <img className="w-10 h-10 rounded-full" src={avatar} alt="avatar" />
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
                            <path d="M4.75 2A2.75 2.75 0 0 0 2 4.75v6.5A2.75 2.75 0 0 0 4.75 14h3a2.75 2.75 0 0 0 2.75-2.75v-.5a.75.75 0 0 0-1.5 0v.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-6.5c0-.69.56-1.25 1.25-1.25h3C8.44 3.5 9 4.06 9 4.75v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 0 7.75 2h-3Z" />
                            <path d="M8.03 6.28a.75.75 0 0 0-1.06-1.06L4.72 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H7.06l.97-.97Z" />
                        </svg>
                    </button>

                </div>
            </div>
        </>
    )
}

export default Navbar