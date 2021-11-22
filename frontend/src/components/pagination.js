import React from 'react';

const pagination = ({postPerPage,totalPosts,paginate}) => {

    const pageNumber =[];

    for (let i = 1; i <=Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
        
    }
    return (
        <nav>
            <ul className="pagination pagination-month justify-content-center">
                {pageNumber.map(num => 
                    <li key={num} className="page-item">

                        <a className="page-link" onClick={()=>paginate(num)} href="#">{num}</a>
                    </li>
                    )}

            </ul>
        </nav>
        
    );
};

export default pagination;