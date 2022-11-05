import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { RenderLoadingState, RepositoryAtGlance, } from "../modules/modules";
import RepoDeatils from "./repoDetails";



const GetApiData = () => {
  const [items, setItems] = useState([]);
  const [User] = useState("Agw-a");
  const [pageNumber, setPageNumber] = useState(0);


  

  const url = `https://api.github.com/users/${User}/repos?page=1&per_page=60&sort=updated`;

  const requestData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    requestData();
  }, []);

  const userPerPage = 5;
  const pagesVisited = pageNumber * userPerPage

  // const DisplayDetails = items.filter(item => item.title === title).map((item) => {
  //   return (
  //     <RepoDeatils key={item.id} {...item}/>
  //   )
  // })

  const DisplayRepos = items.slice(pagesVisited, pagesVisited + userPerPage).map((item) => {
    return (
      <div className="repository-container">
          <RepositoryAtGlance key={item.id} {...item}/>
    </div>
    )
  })

  const pageCount = Math.ceil(items.length / userPerPage);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }



  return (
    <div className="main-page-holder">
      <div className="profile-wrap">
      <div className="profile-summary">
        <h2>Viewing {User}'s repositories.</h2>
        <div>
        {items.length}
        </div>
        <div>
          Followers
        </div>
        <div>Following</div>
        
        </div>
      </div>
      <div className="view-card">
        <div>List View</div>
        <div>Card View</div>
      </div>
      {!items ? <RenderLoadingState /> :
      <div>
        <div className='individual-cards'>{DisplayRepos}</div>
        
        <ReactPaginate 
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagnationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextLinkButton"}
                    disabledClassName={"pagnationDisabled"}
                    activeClassName={"pagnationactive"}
        />
        </div>
        }
    
   
 
  </div>
  )
  ;
};

export default GetApiData;
