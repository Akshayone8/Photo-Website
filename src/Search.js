import React,{Component} from 'react';
import axios from 'axios';
import ImageResults from "./ImageResults";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Pagination from './Pagination';   //madeChanges

class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'17241914-90da7b93c0ccceb734849dcd1',
        images:[],
        totalResults:0,     //madeChanges
        currentPage:1       //madeChanges    
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
            .then(res=>{console.log(res);this.setState({images:res.data.hits,totalResults:res.data.totalHits}) }) //madCha
            .catch(err=>console.log(err));
            }
        });
    };

    nextPage=(pageNumber)=>{ //madeChangesStarted
        axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&page=${pageNumber}&safesearch=true`
            )
            .then(res=>{console.log(res);this.setState({images:res.data.hits,currentPage:pageNumber}) })
            .catch(err=>console.log(err));
    }

        ////madeChangesEnded



    render(){
       const numberPages = Math.floor(this.state.totalResults/20); //madeChanges
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

             {this.state.totalResults >20 ? <Pagination pages={numberPages}nextPage={this.nextPage} currentPage={this.state.currentPage}/>:''}    

            </div>

        )
    }
}



export default Search;