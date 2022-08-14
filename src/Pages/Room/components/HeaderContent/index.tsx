import { FC, useEffect, useState } from "react";
import { ChangeButton, PrimaryButton } from "../../../../components";
import Dropdown, { DropdownItem } from "../../../../components/Dropdown";
import decimal from "../../../../utils/decimal";
import fibonacci from "../../../../utils/fibonacci";
import { Container } from "./styles";

interface HeaderContentProps{
    setList: (list: number[]) => void
}
 
const HeaderContent:FC<HeaderContentProps> = (props) => {
    const {setList} = props

    const [item, setItem] = useState<DropdownItem>(
        {
            name: 'Fibonacci',
            value: 1
        }
    )

    useEffect(() => {
        if(item.value === 1){
            setList(fibonacci())
        }else if(item.value === 2){
            setList(decimal())
        }
    }, [item])
    return (
    <Container>
        <section>
            <PrimaryButton
                width={100}
                text="Revelar"
            />
            <ChangeButton
                width={100}
                text="Reset"
            />
        </section>

        <Dropdown
            list={ListItems}
            item={item}
            setItem={setItem}
        />
    </Container>
    );
}
 
export default HeaderContent;

const ListItems: DropdownItem[] = [
    {
        name: 'Fibonacci',
        value: 1
    },
    {
        name: 'Decimal',
        value: 2
    }
]