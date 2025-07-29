import { useState } from "react";

const useSidebarToggle = (width) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  let toggleSidebarStyle;
  let navBarStyle;
  if (isOpen && width > 999) {
    toggleSidebarStyle = "w-[320px]";
    navBarStyle = "w-10/12";
  } else {
    toggleSidebarStyle = "hidden";
    navBarStyle = "w-full";
  }

  return {
    toggleSidebarStyle,
    navBarStyle,
    handleSidebarToggle,
    isOpen,
  };
};

export default useSidebarToggle;
