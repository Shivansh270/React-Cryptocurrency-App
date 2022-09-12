import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Coins from './Components/Coins';
import CoinItem from './Components/CoinItem';
import Navbar from './Components/Navbar';
import Coin from './routes/Coin';
import './App.css';

function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((respose) => {
      setCoins(respose.data)
    }).catch((error) => {
      console.log(error);
    })
  
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <Routes>
        <Route path='/' element={<Coins coins={coins}></Coins>} />
        <Route path='/coin' element={<Coin></Coin>}>
        <Route path=':coinId' element={<Coin/>}></Route>
        </Route>
    </Routes>

    </>
  );
}

export default App;
