import axios from 'axios';
import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {GridList,GridTile} from 'material-ui/GridList';


const Dublicate=()=>{
  const [photo,setPhoto] = useState(" ");

  const [clientId,setClientId]=useState("20537535-df6fe9d8bd05edb777971a409");

  const [result,setResult] = useState([]);

  function handleChange(e){
    setPhoto(e.target.value);
  }

  function handleSubmit(){
    // alert(photo);
    const url = "https://pixabay.com/api/?key="+clientId+"&q="+photo+"&image_type=photo";
    console.log(url);
    

    axios.get(url)
    .then((response)=>{
      console.log(response);
      setResult(response.data.hits);
    })
  }


  return(
    <>
      <div className='container'>
        <h1 className='text-center mb-4 head'>Shutter Up</h1>

          <div className='form-inline sub_container_one d-flex justify-content-center '>
            <div className='form-group '>
              <label className='sr-only'>Search</label>
              <input type='text'className='form-control'placeholder='Search for Photos'onChange={handleChange}/>
            </div>
              <button type='submit'onClick={handleSubmit}className='btn btn-primary ml-3'>Search</button>
          </div>

          <div className='sub_container_two bg-red mt-5'>
            <GridList cols={3}>
              { result.map((photo,index)=>(
              <GridTile>
               <img src={photo.largeImageURL} key={index}alt='images'/>
              </GridTile>
          ))}
          </GridList>   
          </div>
        </div>
    </>
  )
}


export default Dublicate;