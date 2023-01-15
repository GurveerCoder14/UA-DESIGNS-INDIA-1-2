import React from "react";
import Card from "./Card";
const cardData=[
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 0,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/yC-Yzbqy7PY"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 1,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/LNRyGwIJr5c"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 2,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/N7XodRrbzS0"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 3,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/Dl6jeyfihLk"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 4,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/y83Je1OC6Wc"
    },
    {
      "format": "jpeg",
      "width": 5245,
      "height": 3497,
      "filename": `https://robohash.org/`,
      "id": 5,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/LF8gK8-HGSg"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 6,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/tAKXap853rY"
    },
    {
      "format": "jpeg",
      "width": 4728,
      "height": 3168,
      "filename": `https://robohash.org/`,
      "id": 7,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/BbQLHCpVUqA"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3744,
      "filename": `https://robohash.org/`,
      "id": 8,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/xII7efH1G6o"
    },
    {
      "format": "jpeg",
      "width": 5616,
      "height": 3672,
      "filename": `https://robohash.org/`,
      "id": 9,
      "author": "Alejandro Escamilla",
      "author_url": "https://unsplash.com/@alejandroescamilla",
      "post_url": "https://unsplash.com/photos/ABDTiLqDhJA"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 10,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/6J--NXulQCs"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 11,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/Cm7oKel-X2Q"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 12,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/I_9ILwtsl_k"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 13,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/3MtiSMdnoCo"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 14,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/IQ1kOQTJrOQ"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 15,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/NYDo21ssGao"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 16,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/gkT4FfgHO5o"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 17,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/Ven2CV8IJ5A"
    },
    {
      "format": "jpeg",
      "width": 2500,
      "height": 1667,
      "filename": `https://robohash.org/`,
      "id": 18,
      "author": "Paul Jarvis",
      "author_url": "https://unsplash.com/@pjrvs",
      "post_url": "https://unsplash.com/photos/Ps2n0rShqaM"
    },
 ]
class CardList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cardArr:[]
        }
    }
    componentDidMount(){
  
    if((document.getElementById(this.props.id).scrollLeft)===0){
        document.getElementById(this.props.prev).style.display="none"
    }
}


render(){

   
        return(
         
            <div style={{display:"flex",flexDirection:"column",gap:"30px"}}>     

            <div style={{textAlign:"center"}}>
             <h1 style={{color:"black" , fontFamily:"Lexend" , fontSize:"40px" }}>Featured Products</h1>
        <div id={this.props.id} style={{display:"flex",overflowX:"scroll",gap:"20px"}}>
            {cardData.map((card,i)=>{
                return <Card key={i} src={cardData[i].filename + cardData[i].id} id={cardData[i].id} productPage={this.props.productPage}/>
            })}
        </div>
        <div style={{display:"flex" , justifyContent:"space-between" , width:"100%" }}> 
              <button className='product-btn w-10' onClick={(event)=>{
          
            //    document.getElementById(this.props.id).scrollBy(-2000,0);
                     
               document.getElementById(this.props.id).scrollBy(-(document.getElementById(this.props.id).scrollWidth)/4,0);
           
                console.log((document.getElementById(this.props.id).scrollLeft))
                console.log((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft))

            
                if((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft)!=document.getElementById(this.props.id).scrollWidth){
               document.getElementById(this.props.next).style.display="block"
                   }
                   if((document.getElementById(this.props.id).scrollLeft)===0){
                    event.target.style.display="none"
                   }
                   

              }} style={{display:"none"}} id={this.props.prev}>Previous</button>
              <div style={{width:"100%"}}></div>
              <button className='product-btn w-10' id={this.props.next} onClick={(event)=>{
               
           
               document.getElementById(this.props.id).scrollBy((document.getElementById(this.props.id).scrollWidth)/4,0);
                console.log((document.getElementById(this.props.id).scrollLeft))
               console.log((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft))
              if((document.getElementById(this.props.id).offsetWidth + document.getElementById(this.props.id).scrollLeft)===document.getElementById(this.props.id).scrollWidth){
                event.target.style.display="none"
              }
              if(( document.getElementById(this.props.id).scrollLeft)!==0){
                document.getElementById(this.props.prev).style.display="block"
                         }
         
                        
              }} >Next</button>

              </div>
        </div>
                 
               </div>
 )
    }
}
export default CardList;