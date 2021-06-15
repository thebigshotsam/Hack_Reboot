import React from 'react'

const Sales = props => {
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    return <div style={{
        width:Wwidth*0.9/(1920/1350),
        height:Wheight/(1080/470),
        backgroundColor:'white',
        borderRadius:Wwidth/(1920/59),
        paddingLeft:30,
        paddingTop:20,
        boxShadow:"0px 2px 4px #9E9E9E",
        
    }}>
        <text style={{color:'#3E42B5',fontSize:18,fontFamily:'Segoe UI Semibold'}}>Sales Summary</text>
    </div>;
}

export default Sales;