import { ChangeButton, Dropdown, PrimaryButton } from "../../../../components";
import { DropdownItem } from "../../../../components/Dropdown";
import { Content, HeaderContent } from "./styles";
import { useState } from 'react';
import {MainContent} from "../";

 
const ContentRoom = () => {
    const [item, setItem] = useState<DropdownItem>(
        {
            name: 'Fibonacci',
            value: 1
        }
    )

    return (
        <Content>
            <HeaderContent>
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
            </HeaderContent>
            <MainContent/>
        </Content>
    );
}
 
export default ContentRoom;

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