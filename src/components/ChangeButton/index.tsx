import { FC, ReactElement } from "react";
import { Button } from "./styles";

interface ChangeButtonProps {
    text?: string
    icon?: ReactElement
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
    width?: number | string
}
 
const ChangeButton: FC<ChangeButtonProps> = (props) => {
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
 
export default ChangeButton;