import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "./ImageResults";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'17241914-90da7b93c0ccceb734849dcd1',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
       
        return(
          <div className='container'>
            <h1 className='head text-center'>Shutter Up</h1>
            <div className='row py-3  d-flex justify-content-lg-center'>
              <div className='col-md-6 '>
              <div className='form-group '>
              <input type="text" 
              placeholder="Search for images"
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChange}
              className='form-control'
             />
             </div>
             </div>
             </div>
<br />

{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}



export default Search;