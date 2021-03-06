import { useState } from "react";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import Header from "../../components/Header/Header"


const Transactions = (props) => {
    // states
    const [numberOfTransactions, setNumberOfTransactions] = useState(6)
    const [isShowFull, setIsShowFull] = useState(false)

    const user = props.user.transactions.slice(0, numberOfTransactions)

    // functions
    const showFull = () => {
        setIsShowFull(!isShowFull)
        if (!isShowFull) {
            setNumberOfTransactions(props.user.transactions.length)
        }
        else {
            setNumberOfTransactions(7)
        }
    }
    const loadMore = () => {
        setNumberOfTransactions(numberOfTransactions + 7)
    }
    return (
        <div>
            <Header title={"übersicht"} />
            <div className="Transactions">
                <div className="header">
                    <h2>Letzte Transaktionen</h2>
                    <div className="showFull" onClick={showFull} >
                        {!isShowFull ? 'Show full' : 'Hide full'}
                    </div>
                </div>
                <div className="transactionsList">
                    {user.map(i => <TransactionItem
                        key={i.transactionId}
                        title={i.Beschreibung}
                        date={i.Datum}
                        amount={i.Geldbetrag}
                        category={i.Category}
                    />)}
                </div>
                <button className="mehr buttonBase" onClick={loadMore}>MEHR TRANSAKTIONEN</button>
            </div>
        </div>
    )
}
export default Transactions;