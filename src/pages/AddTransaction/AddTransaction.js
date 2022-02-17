import { useState } from "react"
import { submitTransactionForm } from "../../api/postTransactionApi"
import Header from "../../components/Header/Header"
let temp = new Date().toISOString().substring(0, (new Date().toISOString().indexOf("T") | 0) + 6 | 0)

const AddTransaction = () => {
    // states
    const [kategorie, setKategorie] = useState('')
    const [beschreibung, setBeschreibung] = useState('')
    const [geldbetrag, setGeldbetrag] = useState(0)
    const [datum, setDatum] = useState(temp)
    const sendTransactionForm = (e) => {
        e.preventDefault();
        if (kategorie !== "Einkommen" && kategorie !== "Sparen") {
            setGeldbetrag(geldbetrag * -1)
        }
        console.log(kategorie, beschreibung, geldbetrag, datum)
        const newTransaction = { kategorie, beschreibung, geldbetrag, datum }
        submitTransactionForm('add', newTransaction)
    }
    return (
        <div>
            <Header title={""} />
            <div className="AddTransaction">
                <h2>Umsätze</h2>
                <form action="">
                    <select name="Kategorie" id="" className="buttonBase transactionInput" onChange={e => setKategorie(e.target.value)}>
                        <option value="" disabled selected hidden>Kategorie</option>
                        <option value="Einkommen">Einkommen</option>
                        <option value="Lebensmittel">Lebensmittel</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Wohnung">Wohnung</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Sparen">Sparen</option>
                        <option value="Sonstiges">Sontiges</option>
                    </select>
                    <input type="text" className="buttonBase transactionInput" placeholder="Beschreibung" className="buttonBase transactionInput" onChange={e => setBeschreibung(e.target.value)} />
                    <input type="number" className="buttonBase transactionInput" placeholder="Geldbetrag" className="buttonBase transactionInput" onChange={e => setGeldbetrag(e.target.value)} />
                    <input type="datetime-local" defaultValue={temp} className="buttonBase transactionInput" placeholder="Datum" className="buttonBase transactionInput" onChange={e => setDatum(e.target.value)} />
                    <input type="submit" className="buttonBase " value="Abschicken" onClick={sendTransactionForm} />
                </form>
            </div>
        </div>

    )
}

export default AddTransaction