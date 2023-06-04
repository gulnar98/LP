import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 export default function Button(props) {
  const [isHover, setIsHover] = useState(false);

  const {
    btncolor,
    btncolorHover,
    text,
    border,
    textColor,
    height,
    textColorHover,
    borderRadius,
    padding,
    margin,
    fontSize,
    onClick,
    fontWeight,
    fontFamily,
    icon,
    iconPosition,
    href, 
  } = props;

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = {
    backgroundColor: isHover ? btncolorHover : btncolor,
    borderRadius,
    color: isHover ? textColorHover : textColor,
    border,
    padding,
    margin,
    height,
    fontSize,
    fontWeight,
    transition: "all 0.2s ease", 
  };

  return (
    <>
      <button
        onClick={handleClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}
        fontFamily="Arial"
        padding="2000px"


      >
        {text}
        {icon && iconPosition === "right" && (
          <FontAwesomeIcon icon={icon} style={{ marginLeft: "0.5em" }} />
        )}
      </button>
    </>
  );
}

