import React from 'react'

import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import NewOrders from '../../Components/NewOrders/NewOrders';
import ProductsSold from '../../Components/ProductsSold/ProductsSold';


const Products = props =>{
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:window.innerWidth,height:window.innerHeight,backgroundColor:'#F2F2F2'}}>
        <Header />
        <NavHeader />
        <div style={{
            width:'100%',
            height:'2.5%',
            alignItems:'center',
            flexDirection:'row',
            display:'flex',
            justifyContent:'flex-start'}}>

        </div>
        <div style={{
            width:'100%',
            height:'70%',
            flexDirection:'row',
            marginTop:'1.5%',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'flex-start'
        }}>
            <ProductsSold />
            <NewOrders />
        </div>
    </div>

    
}

export default Products