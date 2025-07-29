import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const buttonStyles = {
  normal: {
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
    border: '2px solid #121212',
    boxShadow: '0 4px 20px rgba(29, 185, 84, 0.3)'
  },
  hover: {
    background: 'linear-gradient(135deg, #1ed760 0%, #1db954 100%)',
    boxShadow: '0 6px 25px rgba(29, 185, 84, 0.5)'
  },
  centerNormal: {
    background: 'linear-gradient(135deg, #535353 0%, #282828 100%)'
  },
  centerExpanded: {
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)'
  }
};

type NavItem = {
  label: string;
  path: string;
};

type RadialNavigationButtonProps = {
  items: NavItem[];
  radius?: number;
};

const RadialNavigationButton: React.FC<RadialNavigationButtonProps> = ({
  items,
  radius = 80,
}) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const angleStep = (2 * Math.PI) / items.length;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      style={{ 
        position: "relative", 
        width: radius * 2 + 120, 
        height: radius * 2 + 120,
        transition: "all 0.3s ease"
      }}
    >
      {/*navigation items*/}
      {items.map((item, idx) => {
        const angle = idx * angleStep - Math.PI / 2;
        const x = Math.cos(angle) * radius + radius + 60;
        const y = Math.sin(angle) * radius + radius + 60;

        return (
          <button
  key={item.path}
  style={{
    ...buttonStyles.normal,
    position: "absolute",
    left: x,
    top: y,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    width: 80,
    height: 80,
    color: "#121212",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    opacity: isExpanded ? 1 : 0,
    scale: isExpanded ? 1 : 0.5,
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transitionDelay: isExpanded ? `${idx * 0.1}s` : "0s",
    zIndex: 10,
  }}
  onClick={() => navigate(item.path)}
  onMouseEnter={(e) => {
    if (isExpanded) {
      e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)";
      Object.assign(e.currentTarget.style, buttonStyles.hover);
    }
  }}
  onMouseLeave={(e) => {
    if (isExpanded) {
      e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
      Object.assign(e.currentTarget.style, buttonStyles.normal);
    }
  }}
>
  {item.label}
</button>
        );
      })}

      {/*menu button in center*/}
      <button
  style={{
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 120,
    height: 120,
    borderRadius: "50%",
    ...(isExpanded ? buttonStyles.centerExpanded : buttonStyles.centerNormal),
    color: "#fff",
    border: "3px solid #121212",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 18,
    boxShadow: "0 6px 25px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
    zIndex: 20,
  }}
  onClick={toggleExpanded}
>
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "16px", marginBottom: "4px" }}>
      {isExpanded ? "Close" : "Explore"}
    </div>
    <div style={{ fontSize: "24px", lineHeight: "1" }}>
      {isExpanded ? "🥸" : "🤓"}
    </div>
  </div>
</button>
    </div>
  );
};

export default RadialNavigationButton;