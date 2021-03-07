import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Pagination=(props)=>{

    const pageLinks = []
        for(let i=0;i<=props.pages+1;i++){
            let active = props.currentPage === i?'active':'';
            pageLinks.push(<li className={`waves-effect ${active} page-item`}key={i} onClick={()=>props.nextPage(i)}><a href='#'className='page-link'>{i}</a></li>)
        }
        return(
          <>
          <div className='container mt-5 d-flex justify-content-lg-center'>
            <div className='row'>
              <ul className='pagination'>
              {props.currentPage > 1 ? <li className={`waves-effect page-item`} onClick={()=>props.nextPage(props.currentPage - 1 )}><a href='#'className='page-link'>Previous Page</a></li> :''}
                {pageLinks}
              {props.currentPage < props.pages + 1 ? <li className={`waves-effect page-item`} onClick={()=>props.nextPage(props.currentPage + 1)}><a href='#'className='page-link'>Next Page</a></li> :''}
              </ul>
            </div>
          </div>
          </>
        )
}




export default Pagination;