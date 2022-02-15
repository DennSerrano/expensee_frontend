import React from 'react'

const DevNav = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Welcome</Link></li>
                <li><Link to={"/addtransaction"}>Add Transaction</Link></li>
                <li><Link to={"/chart"}>Chart</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/transactions"}>Transactions</Link></li>
            </ul>
        </div>
    )
}

export default DevNav