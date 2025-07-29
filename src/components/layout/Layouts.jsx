/* eslint-disable react/prop-types */
import { useState } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import LargeSidebar from "./LargeSidebar";
import Navbar from "./Navbar";
import OverlayScreen from "./OverlayScreen";
import SmallSidebar from "./SmallSidebar";

const Layouts = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const width = useWindowWidth();

    const handleSidebarToggle = () => {
        if (width < 1000) {
            setIsOverlayVisible(!isOverlayVisible);
        } else {
            setIsOpen(!isOpen);
        }
    };

    const handleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    return (
        <div className="bg-[#f5f5f5] min-h-[100vh] relative font-inter">
            <div className="flex">
                {/* sidebar starts here*/}
                {
                    isOpen ? <LargeSidebar /> : <SmallSidebar />
                }
                {/* <LargeSidebar /> */}


                {/* Overlay starts here*/}
                {isOverlayVisible && (
                    <OverlayScreen handleOverlay={handleOverlay} />
                )}
                {/* Overlay ends here*/}

                {/* right side starts here*/}
                <div className="w-full">
                    {/* Navbar starts here*/}
                    <Navbar handleSidebarToggle={handleSidebarToggle} />
                    {/* Navbar ends here*/}

                    {/* Main content starts here*/}
                    <div className="m-4">{children}</div>
                    {/* Main content ends here*/}
                </div>
                {/* right side ends here*/}
            </div>
        </div>
    );
};

export default Layouts;
