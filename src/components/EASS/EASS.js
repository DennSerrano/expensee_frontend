import { useState } from "react";
const EASS = ({ title, amount, detailList, backColor }) => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className="EASS">
            <div className='buttonBase'
                style={{ background: backColor }}
                onClick={() => setIsClicked(!isClicked)} >
                {title}: {amount} €
            </div>
            {isClicked &&
                <div className="details">
                    {detailList.map(i =>
                        <div className="transactionDetails">
                            <p>{i.Beschreibung}</p>
                            <p>{i.Geldbetrag}€</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
export default EASS;



