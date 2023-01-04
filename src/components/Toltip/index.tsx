import { FC, ReactNode } from "react";
import { TooltipBox, TooltipCard, TooltipText } from './styles'

interface ToltipProps {
    children: ReactNode,
    message: string,
    isVisible?: boolean
}
 
const Toltip: FC<ToltipProps> = (props) => {
    const {children, message, isVisible = false} = props

    return (
        <TooltipCard>
            <TooltipText>{children}</TooltipText>
            {isVisible && 
                <TooltipBox>
                    {message}
                </TooltipBox>
             } 
        </TooltipCard>
    );
}
 
export default Toltip;

