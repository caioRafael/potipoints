import { FC, useState } from "react";
import { ChangeButton, PrimaryButton } from "../../../../components";
import Dropdown, { DropdownItem } from "../../../../components/Dropdown";
import { Container } from "./styles";

 
const HeaderContent:FC = () => {
    const [item, setItem] = useState<DropdownItem>(
        {
            name: 'Fibonacci',
            value: 1
        }
    )
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