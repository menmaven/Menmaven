import React from "react";

import { variantClasses, sizeClasses } from "../../constants/buttonConstants";
import { Image } from "../Image/Image";

const Button = ({
    text,
    onClick,
    variant,
    size,
    className,
    disabled,
    type,
    icon,
    textcolor,
    textSize
}) => {
    const defaultClasses =
        "rounded focus:outline-none transition ease-in-out duration-150 flex items-center justify-center gap-2";

    const combinedClasses = `${defaultClasses} ${variantClasses[variant]} ${sizeClasses[size]
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className || ""}`;

    return (
        <button
            onClick={onClick}
            className={combinedClasses}
            disabled={disabled}
            type={type}
        >
            <span style={{ color: textcolor, fontSize: textSize ? textSize : '14px' }}>{text}</span>
            {icon && <Image src={icon} />} 
        </button>
    );
};

export default Button;

