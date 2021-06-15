import React, { useState } from 'react'
import Back from "../../Assets/back.png"
import Sear from "../../Assets/sear.png"
import Sli from "../../Assets/slider.png"
import Bell from "../../Assets/bell.png"
import Sett from "../../Assets/sett.png"
import User from "../../Assets/dummy.png"
const Header = props =>{
    const [hover,setHover]=useState(false)
    const Wwidth=window.innerWidth;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{
        width:'100%',
        height:(Wwidth)/(1920/122)}}>
        <div style={{
            width:'100%',
            height:'100%',
            backgroundImage:`url(${Back})`,
            flexDirection:'row',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            alignItems:'center',
            display:'flex'
        }}>
            <div style={{width:'10%',height:'100%',display:'flex',flexDirection:'row',
            alignItems:'center',justifyContent:'flex-start',marginLeft:'5%'}}>
            <text style={{userSelect:'none',fontFami5ly:'Segoe UI',color:'white',fontSize:18}}>App name</text>
            </div>
            <div style={{width:'85%',height:'100%',justifyContent:'space-around',flexDirection:'row',
            alignItems:'center',
            display:'flex'}}>
            <div style={{width:'15%',marginRight:'50%',height:'100%',justifyContent:'center',flexDirection:'row',
            alignItems:'center',
            display:'flex'}}>
            <div style={{
                width:Wwidth*0.9/(1920/200),
                height:Wheight*0.9/(1080/65),
                borderRadius:16,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around',
                display:'flex',padding:5}}>
                    <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:15,marginLeft:'5%'}}>Search...</text>
                    <div style={{
                        width:Wwidth*0.9/(1920/35),
                        height:Wwidth*0.9/(1920/35),
                        padding:2
                    }}>
                        <img src={Sear} style={{width:'100%',height:'100%',fill:'yellow'}} />

                    </div>
            </div> 
            </div>
            <div style={{height:'100%',width:'30%',flexDirection:'row',justifyContent:'center',alignItems:'center',display:'flex'}}>          
            <div style={{
                width:Wwidth*0.85/(1920/173),
                height:Wheight*0.85/(1080/63),
                borderRadius:50,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginRight:'6%',
                justifyContent:'space-around',
                display:'flex',padding:5}}>
                    <text style={{userSelect:'none',fontFamily:'Segoe UI',color:'#707070',fontSize:15,marginLeft:'5%'}}>Amazon</text>
                    <div style={{
                        width:Wwidth*0.8/(1920/35),
                        height:Wwidth*0.8/(1920/35),
                        padding:2
                    }}>
                        <img src={Sli} style={{width:'100%',height:'100%',transform:"rotate(180deg)"}} />

                    </div>
            </div>           
            <div style={{
                width:Wwidth*0.8/(1920/59),
                height:Wheight*0.9/(1080/63),
                borderRadius:16,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginRight:'5%',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*0.8/(1920/60),
                        height:Wwidth*0.8/(1920/60),
                        padding:2
                    }}>
                        <img src={Bell} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>           
            <div style={{
                width:Wwidth*.8/(1920/59),
                height:Wheight*.9/(1080/63),
                borderRadius:16,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginRight:'5%',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*.8/(1920/60),
                        height:Wwidth*.8/(1920/60),
                        padding:2
                    }}>
                        <img src={Sett} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>   
            <div style={{
                width:Wwidth*.8/(1920/70),
                height:Wwidth*.8/(1920/70),
                borderRadius:Wwidth*.8/(1920/70),
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                marginLeft:'3%',
                overflow:'hidden',
                justifyContent:'center',
                display:'flex'}}>
                 <div style={{
                        width:Wwidth*.8/(1920/60),
                        height:Wwidth*.8/(1920/60),
                        overflow:'hidden',
                        padding:2
                    }}>
                        <img src={User} style={{width:'100%',height:'100%'}} />

                    </div>
            </div>   
            </div>
            </div>
            </div>      
        </div>

    
    
}

export default Header