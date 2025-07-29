/* eslint-disable react/prop-types */

import Sidebar from "./Sidebar"

const OverlayScreen = ({ handleOverlay }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-30"
            onClick={() => handleOverlay()}
        >
            <div className="w-[250px] bg-white min-h-[100vh]">
                <Sidebar />
            </div>
        </div>
    )
}

export default OverlayScreen