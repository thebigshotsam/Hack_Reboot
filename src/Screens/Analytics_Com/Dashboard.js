import React from 'react'
import Back from "../../Assets/back.png"
import Sear from "../../Assets/sear.png"
import Sli from "../../Assets/slider.png"
import Bell from "../../Assets/bell.png"
import Sett from "../../Assets/sett.png"
import User from "../../Assets/dummy.png"
import Header from '../../Components/Headers/Header'
import NavHeader from '../../Components/Headers/NavHeader'
import Sales from '../../Components/Graphs/Sales'
import TopSellingProducts from '../../Components/TopSellingProducts'
import Preview from '../../Components/Preview'
import Order from '../../Assets/order.png'
import Inco from '../../Assets/inco.png'
import Feed from '../../Assets/feed.png'
import Prof from '../../Assets/prof.png'
import Up from '../../Assets/tri.png'
import Down from '../../Assets/down.png'
const Dashboard = props =>{
    const Wwidth=window.innerWidth*0.95;
    const Wheight=window.innerHeight;
    console.log(window.innerWidth  + "  "+ window.innerHeight)
    return <div style={{width:window.innerWidth,height:'100%',paddingBottom:10,backgroundColor:'#F2F2F2'}}>
        <Header />
        <NavHeader />
        <div style={{
            width:'100%',
            paddingLeft:10,
            paddingRight:10,
            marginTop:'2%',
            flexDirection:'row',
            justifyContent:'space-evenly',
            alignItems:'flex-start',
            display:'flex'
        }}>
            <Sales />
            <TopSellingProducts />
            
        </div>
        <div style={{
            width:'100%',
            marginTop:'2%',
            flexDirection:'row',
            alignItems:'center',
            display:'flex',
            justifyContent:'space-evenly'
        }}>
            <Preview
            src={Order}
            backgroundColor='#FDF4E9'
            borderColor='#EDAF60'
            previewTitle='Total Orders'
            previewTitleData='1000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Inco}
            backgroundColor='#EAF0FE'
            borderColor='#376BF0'
            previewTitle='Total Income'
            previewTitleData='2000'
            previewAnalytics='1.2%'
            analyticsColor='#EC4815'
            analyticsSrc={Down}
             />
             <Preview
            src={Prof}
            backgroundColor='#EDEEF8'
            borderColor='#5356BD'
            previewTitle='Total Profits'
            previewTitleData='3000'
            previewAnalytics='1.2%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
             <Preview
            src={Feed}
            backgroundColor='#F4FAF5'
            borderColor='#219434'
            previewTitle='Feedbacks'
            previewTitleData='1000'
            previewAnalytics='2.9%'
            analyticsColor='#4DEC15'
            analyticsSrc={Up}
             />
        </div>
        <div style={{
            width:'100%',
            height:'40%', 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            display:'flex',
            marginTop:'3%'
        }}> 
            <div style={{
                width:Wwidth*0.85/(1920/729),
                height:Wheight*0.9/(1080/439),
                backgroundColor:'white',
                borderRadius:Wwidth*0.85/(1920/57),
                boxShadow:"0px 2px 4px #9E9E9E",
            }}>
            </div>
            <div style={{
                width:Wwidth*0.85/(1920/729),
                height:Wheight*0.9/(1080/439),
                backgroundColor:'white',
                borderRadius:Wwidth*0.85/(1920/57),
                boxShadow:"0px 2px 4px #9E9E9E",
            }}>
            </div>
        </div>
        <div style={{ 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            display:'flex',
            marginTop:'3%'
        }}> 
            <div style={{
                width:Wwidth*0.85/(1920/729),
                height:Wheight*0.9/(1080/439),
                backgroundColor:'white',
                borderRadius:Wwidth*0.85/(1920/57),
                boxShadow:"0px 2px 4px #9E9E9E",
            }}>
            </div>
            <div style={{
                width:Wwidth*0.85/(1920/729),
                height:Wheight*0.9/(1080/439),
                backgroundColor:'white',
                borderRadius:Wwidth*0.85/(1920/57),
                boxShadow:"0px 2px 4px #9E9E9E",
            }}>
            </div>
        </div>
    </div>

    
}

export default Dashboard