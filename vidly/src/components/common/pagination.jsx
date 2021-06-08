import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types'

const Pagination = props => {

  const { itemsCount, pageSize ,currentPage,onPageChange} = props;
  console.log("cp",currentPage)
  // console.log("total item count",itemsCount)
  // console.log("total page size",pageSize)
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // console.log("total page count",pagesCount)
  if(pagesCount===1) return null;
  const pages = _.range(1, pagesCount + 1);
  
  return (
      
    <nav>
        
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page===currentPage?'page-item active':'page-item'}>
            <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
            
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.prototype={
  itemsCount:PropTypes.number.isRequired,
   pageSize:PropTypes.number.isRequired,
   currentPage:PropTypes.number.isRequired,
   onPageChange:PropTypes.func.isRequired
}

export default Pagination;
