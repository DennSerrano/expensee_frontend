const testUser = {
    id: 0,
    email: 'bdr@super.de',
    passwordHash: '0',
    isAuth: true,
    authCode: '0',
    EASS: {
        einkommen: 12345.09,
        ausgaben: 124587.98,
        sparen: 12345.33,
        sonstiges: 9876.99,
    },
    transactions: [
        {
            transactionId: 0,
            Category: 'einkommen',
            Beschreibung: 'Gehalt',
            Geldbetrag: 120.5,
            Datum: '15.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 1,
            Category: 'Lebensmittel',
            Beschreibung: 'Milch',
            Geldbetrag: -1.5,
            Datum: '16.2.2022, 10:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 4,
            Category: 'Sontiges',
            Beschreibung: 'Steuer',
            Geldbetrag: -450,
            Datum: '11.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 6,
            Category: 'Sparen',
            Beschreibung: 'Lamborgini',
            Geldbetrag: 300,
            Datum: '22.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36' // new Date().toLocaleString()
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36' // new Date().toLocaleString()
        },
    ]
}

export default testUser
