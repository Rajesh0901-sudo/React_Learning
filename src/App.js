import React from 'react';
import BlogItem from './BlogCards';
import { isArrayEmpty,dumpLogs } from './isEmpty';
import './App.css';





class App extends React.Component {

  state = {
    showBlog: true,
    tag:'Hide',
    objCard : [{
        id:1,
        title : 'Rajesh Sahu',
        description : "Hello! I am Rajesh Sahu",
        likeCount:0
      },
      {
        id:2,
        title : 'Rajesh Sahu',
        description : "Hello! I am Rajesh Sahu",
        likeCount:0
      },
      {
        id:3,
        title : 'Rajesh Sahu',
        description : "Hello! I am Rajesh Sahu",
        likeCount:0
      },
      {
        id:4,
        title : 'Rajesh Sahu',
        description : "Hello! I am Rajesh Sahu",
        likeCount:0
      }
    ]
  }

  
  onLikeButtonClick = (pos)=> {
       
    const updatedBlogList = this.state.objCard;
    const updatedBlogObj = updatedBlogList[pos];
    updatedBlogObj.likeCount+=1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({objCard:updatedBlogList});

  }
    

  onHideButtonClick = ()=>{
    //let updatedState = !this.state.showBlog
    this.setState((prevState,prevProps) =>{
      
      return {showBlog: !prevState.showBlog,
              }
    })
    
  }

  render(){
    const blogCardss =  isArrayEmpty(this.state.objCard)? dumpLogs('Array is empty'): this.state.objCard.map((item,pos)=>{
        console.log(item);
        return (
          <BlogItem title={item.id} position ={pos} likeCount={item.likeCount} onLikeButtonClick={()=>this.onLikeButtonClick(pos)} />
        )
            
    });
    return (
      <div className="App">
        <button onClick={this.onHideButtonClick}>{this.state.showBlog ?'Hide' : 'show'} List</button>
        <br></br><br></br>
        {         
          this.state.showBlog ?  blogCardss : null
        }
         
      </div>
    );
  }
  
}

export default App;
