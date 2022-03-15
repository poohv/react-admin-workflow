import React, { useEffect, useState } from "react";
import servicedata from "../service/SMpotalSerivce";
import Pagination from "../components/pagination";
import ReactPaginate from "react-paginate";

function Wochage({ history }) {
  const [datalist, setDatalist] = useState([]);
  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = datalist.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  useEffect(() => {
    async function fetchData() {
      await servicedata.Smlist().then(function (res) {
        setDatalist(res.data);
      }).catch((error)=>{
        switch (error.response.status) {
          case 403:
              history.push("/login");       
          default:
              break
       }
  
      });
    }
    fetchData();
  }, []);

  function clikeapinum(no) {
    no.preventDefault();
    const { name } = no.target;
    history.push("/detail/" + name);
  }

  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card card-primary card-outline card-outline-tabs">
              <div class="card-header p-0 border-bottom-0">
                <a class="btn btn-success float-right" href="/wonew">
                  <i class="fas fa-edit"></i>신규
                </a>
                <ul
                  class="nav nav-tabs"
                  id="custom-tabs-one-tab"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="custom-tabs-one-home-tab"
                      data-toggle="pill"
                      href="#custom-tabs-one-home"
                      role="tab"
                      aria-controls="custom-tabs-one-home"
                      aria-selected="true"
                    >
                      목록
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="tab-pane active" id="custom-tabs-one-home">
                    <div class="card-body">
                      <table
                        id="example1"
                        class="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>변경</th>
                            <th>요약</th>
                            <th>작성자</th>
                            <th>구성 품목</th>
                            <th>상태</th>
                            <th>작성 시간</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((datalist) => (
                            <tr>
                              <td>
                                <a
                                  href="#"
                                  onClick={clikeapinum}
                                  name={datalist.wonum}
                                >
                                  {datalist.wonum}
                                </a>
                              </td>
                              <td>{datalist.descript}</td>
                              <td>{datalist.woname}</td>
                              <td>{datalist.woclass}</td>
                              <td>{datalist.status}</td>
                              <td>{datalist.wocrdt}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      postPerPage={postPerPage}
                      totalPosts={datalist.length}
                      paginate={paginate}
                    ></Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wochage;
