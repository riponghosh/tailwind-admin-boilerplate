import useWindowWidth from "../../hooks/useWindowWidth";
import Sidebar from "./Sidebar";

const LargeSidebar = () => {
    const width = useWindowWidth();
    return (
        <div className={`bg-white min-h-[100vh] ${width > 999 ? 'w-[250px]' : 'hidden'} text-white`}>
            <Sidebar />
        </div>
    )
}

export default LargeSidebar