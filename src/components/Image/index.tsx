import { FC } from "react";
import { Container } from "./styles";
import { CgProfile } from "react-icons/cg"

interface ImageProps {
    url?: string
    name?: string
    borderColor?: string
}

const Image: FC<ImageProps> = (props) => {
    const {
        url,
        name,
        borderColor = '#fff'
    } = props
    return (
        <>
            {(url || name) ?
                <Container src={url} alt={name} /> :
                <CgProfile size={50} color={borderColor} />
            }
        </>
    );
}

export default Image;