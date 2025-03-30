import React from "react";
import clsx from "clsx"; // cn helper की जगह clsx use किया

const NavItem = ({ icon, label, active, count, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{borderRadius:'10px', color:'var(--text-color)'}}
      className={clsx(
        "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-blue-500 text-white font-medium shadow-md" // Active item styling
          : "text-gray-300 hover:text-black hover:bg-gray-500"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {count !== undefined && (
        <span className="shrink-0 rounded-full px-1.5 py-0.5 text-xs bg-gray-300 text-gray-800" style={{ fontSize: '0.75rem', backgroundColor:'var(--blur-bgcolor)', color:'var(--text-color)' }}>
          {count}
        </span>
      )}
    </button>
  );
};

export default NavItem;
