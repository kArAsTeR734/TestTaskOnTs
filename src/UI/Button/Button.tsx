import React, {FC} from "react";

interface ButtonProps {
    children?: React.ReactNode,
    className?: string,
    onClick: () => void,
}

const Button:FC<ButtonProps> = ({children,className, ...props}) => {
    return (
        <button
            {...props}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;