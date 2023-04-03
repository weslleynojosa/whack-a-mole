import { useState } from "react"
import { Hammer, MoleBtn, MoleImg } from "./styles/Mole.styled"

interface IMole {
    showMole: boolean,
    score: Function
}

const Mole = (props: IMole) => {
    const [hit, setHit] = useState<boolean>(false)
    const handleClick = () => {
        if (props.showMole) {
            setHit(true)
            setTimeout(() => {
                props.score()
            }, 100) 
        }

        setTimeout(() => {
            setHit(false)
        }, 200)
    }
    return (
        <MoleBtn onClick={handleClick}>
            {hit ? <Hammer src={'/assets/WAM_Hammer.png'}/> : ''}
            <MoleImg src={props.showMole ? '/assets/WAM_Mole.png' : '/assets/WAM_Hole.png'}/>
        </MoleBtn>
    )
}

export default Mole