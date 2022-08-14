import { FC, ReactElement } from "react";
import { Button } from "./styles";

interface PrimaryButtonProps {
    text?: string
    icon?: ReactElement
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    width?: number | string
}
 
const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
    const {text, icon, type, onClick, width} = props
    return (
        <Button
            onClick={onClick}
            type={type}
            style={{
                width: width
            }}
        >{icon && icon}  {text}</Button>
    );
}
 
export default PrimaryButton;