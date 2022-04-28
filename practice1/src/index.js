import React from 'react';
import ReactDom from 'react-dom';
import './App.css';


function BookStore(){
    return (
        <div className='content'>
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    )
}

function Book() {
  return (
    <div className='items'>
        <Person />
        <Title />
        <Author />
    </div>
  )
}


const Person = () => {
    return (
        <img src="https://images-eu.ssl-images-amazon.com/images/I/41TxUmdg6hL._AC_SX368_.jpg" />
    )
}

const Title = () => {
    return (
        <h3>Bruised Passports: Travelling the World as Digital Nomads</h3>
    )
}

const Author = () => {
    return (
    <p>Savi Munjal </p>
    )
}


ReactDom.render(<BookStore />, document.getElementById('root'));

export default BookStore
