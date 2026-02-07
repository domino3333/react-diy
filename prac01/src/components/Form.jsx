import { useState } from 'react';

export default function Form() {


    const [person, setPerson] = useState({
        name: "김철수",

        wallet: {
            money: 3000,
            brand: "루이비통",
            balance: 200
        },

    })

    const onChangePersonName = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        })

    }

    const onChangeWalletMoney = (e) => {

        setPerson({
            ...person,
            wallet: { ...person.wallet, [e.target.name]: e.target.value }
        })
    }

    const onChangeWalletBrand = (e)=>{
        setPerson({...person,wallet:{
            ...person.wallet,
            brand:e.target.value
        }})
    }

    return (<>

        <label htmlFor="name">이름:
            <input onChange={onChangePersonName} id="name " name="name" type="text" value={person.name} />
        </label>
        <p>이름 랜더링 확인:{person.name}</p>


        <label htmlFor="wallet">지갑 머니:
            <input type="text" name="money" id="money" value={person.wallet.money} onChange={onChangeWalletMoney} />
        </label>
        <p>money 랜더링 확인:{person.wallet.money}</p>

        <label htmlFor="wallet">지갑 브랜드:
            <input type="text" name="brand" id="brand" value={person.wallet.brand} onChange={onChangeWalletBrand} />
        </label>
        <p>brand 랜더링 확인:{person.wallet.brand}</p>

    </>)

}