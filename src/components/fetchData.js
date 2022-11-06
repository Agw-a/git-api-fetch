import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { RenderLoadingState, RepositoryAtGlance, } from "../modules/modules";
import Footer from "./footer";
import RepoDeatils from "./repoDetails";



const GetApiData = () => {
  const [items, setItems] = useState([]);
  const [User] = useState("Agw-a");
  const [pageNumber, setPageNumber] = useState(0);
  const [toggleView, setToggleView] = useState(false)


  

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
        <div><h2>Viewing {User}'s repositories.</h2></div>
        
        <div id="total-repos">
        <h3>{items.length} total repositories</h3>
        </div>
        <div id='followers'>
          <h3> 3 Followers</h3>
        </div>
        <div id="following"><h3>14 Following</h3></div>
        
        </div>
      </div>
      {/* <div className="view-card">
        <button onClick={() =>setToggleView(!toggleView)}>{toggleView ? <>grid</> : <>List</>}List View</button>
        <button>Card View</button>
      </div> */}
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
    
   
 <Footer />
  </div>
  )
  ;
};

export default GetApiData;
