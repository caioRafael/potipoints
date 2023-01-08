import { useState } from 'react';

export interface IRightClickMenu{
    x: number,
    y: number,
}

interface RightClickMenuProps{
    position: IRightClickMenu
    visible: boolean
}

export default function RightClickMenu(props: RightClickMenuProps){
    const { position, visible} = props
    return(
        <>
            {   visible && 
                <h1>Ola mundo</h1>
            }
        </>
    )
}