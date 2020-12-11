import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Banking that's intuitive, intelligent and invisible</h1>
            <div className='cards__containers'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-dbs1.jpg"
                            text="Track your account balance and view your transaction history."
                            label='Account Balance'
                            path='/app/balance'
                        />
                        <CardItem 
                            src="images/img-dbs2.jpg"
                            text='Transfer of funds from on account to another.'
                            label='Transfer'
                            path='/app/transfer'
                        />   
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-dbs3.jpg'
                            text='Bill payments and other payment services.'
                            label='Pay'
                            path='/app/transfer'
                        />
                        <CardItem
                            src='images/img-dbs4.jpg'
                            text='Credit and Debit cards Summary.'
                            label='Cards'
                            path='/app/products'
                        />
                        <CardItem
                            src='images/img-dbs5.jpg'
                            text='Investment products and services.'
                            label='Invest'
                            path='/app/sign-in'
                        />  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
