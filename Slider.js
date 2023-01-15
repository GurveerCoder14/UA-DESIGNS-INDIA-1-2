import React from "react";
 const imgArr = [
    {title:"SUMMER COLLECTIONS" , title2:"STYLE UPTO 40% OFF" , src:"https://th.bing.com/th/id/R.fd5c327b1c2f2148e6e8ff4dd59cced9?rik=bb%2f50XW4H11%2bAg&riu=http%3a%2f%2fallhdwallpapers.com%2fwp-content%2fuploads%2f2017%2f05%2fBugatti-Veyron-5.jpg&ehk=Xisiy0Z3httYDpVgza1ecLhsJ6YzS9hz4a9wvShr718%3d&risl=&pid=ImgRaw&r=0"},
    {title:"SUMMER COLLECTIONS" , title2:"STYLE UPTO 30% OFF" , src:"https://images.unsplash.com/photo-1543854589-fdd815f176e0?ixlib=rb-1.2.1&w=1000&q=80"},
    {title:"AUTMUN COLLECTIONS" , title2:"STYLE UPTO 50% OFF" , src:"https://media.autoexpress.co.uk/image/private/s--vWd8qMSJ--/v1598954380/autoexpress/2020/09/Rolls-Royce%20Ghost%202020%20-4.jpg"},
    {title:"SPRING COLLECTIONS" , title2:"STYLE UPTO 60% OFF" , src:"https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/714/2020-porsche-taycan_100714962.jpg"}
]
class Slider extends React.Component{
    constructor(){
        super();
        this.state={
            src:'https://autodius.com/wp-content/uploads/2020/05/ferrari-roma-2020-red-pictures-images.jpg',
            title:'',
            title2:''
        }
    }
    


    componentDidMount(){
    let index=0
    setInterval(()=>{
        index+=1;
        if(index>imgArr.length-1){
            index=0;
        }
        else if(index<0){
            index=imgArr.length-1
        }
      this.setState({src:imgArr[index].src});
    //   this.setState({title:data[index].title});    
    //     this.setState({title2:data[index].title2});


    },6000)
}


    render(){
   
    return(
        <main className="main">
            <div className="slider-container">
        <img src={this.state.src}   />
            </div>
            <div className="slider-details">
                <h1 id="titleh1"></h1>
                <h2 id="titleh2"></h2>
                <button id="checkout">CHECKOUT</button>
            </div>

        </main>
    )
    }
}

export default Slider;