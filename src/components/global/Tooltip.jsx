/* eslint-disable react/prop-types */
import { useState } from "react";

const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});

  const showTooltip = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = rect.width;

    setTooltipStyle({
      left: `${rect.left - tooltipWidth / 2 + 120}px`,
      top: '-8px'
    });
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="cursor-pointer"
      >
        {children}
      </div>
      {isVisible && (
        <div
          style={tooltipStyle}
          className="absolute font-semibold bottom-full transform h-[40px] w-[150px] -translate-x-1/2 mb-2 px-4 py-2 bg-white text-sky-500 text-sm rounded shadow-lg"
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
