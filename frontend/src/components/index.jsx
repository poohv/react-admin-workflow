import React, { Component } from "react";
import servicedata from "../service/SMpotalSerivce";
import Pagination from "../components/pagination";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datalist: [],
      gridApi: null,
      gridColumnApi: null,
      postPerPage: 5,
      currentPage: 1,
    };
  }

  componentDidMount() {
    servicedata.Smlist().then((res) => {
      this.setState({ datalist: res.data });
    });
  }
  render() {
    // ag-grid 사용법
    // const onGridReady = (params) => {
    //   this.setState({gridApi:params.api});
    //   this.setState({gridColumnApi:params.columnApi});

    //   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    //     .then((resp) => resp.json())
    // };

    // const onFirstDataRendered = (params) => {
    //   params.api.sizeColumnsToFit();
    // };

    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentdatas = this.state.datalist.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    console.log(this.state.datalist);

    return (
      <div>
        <section class="content">
          <div class="row">
            <div class="col-md-3">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">즐겨찾기</h3>

                  <div class="card-tools">
                    <button
                      type="button"
                      class="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                  </div>
                </div>

                <div class="card-body">
                  <a href="/Wochange">변경</a>
                  <br />
                  <a href="#">장애</a>
                  <br />
                  <a href="#">문제</a>
                  <br />
                  <a href="#">사용자</a>
                  <br />
                </div>
              </div>
            </div>
            <div class="card col-md-9">
              <div class="card-header border-transparent">
                <h3 class="card-title">변경 요약</h3>

                <div class="card-tools">
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="collapse"
                  >
                    <i class="fas fa-minus"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-tool"
                    data-card-widget="remove"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <div class="card-body p-0">
                <div class="table-responsive">
                  <table class="table m-0" id="example1">
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>요약</th>
                        <th>상태</th>
                        <th>작성자</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentdatas.map((datalist) => (
                        <tr>
                          <td>
                            <a href="pages/examples/invoice.html">
                              {datalist.wonum}
                            </a>
                          </td>
                          <td>{datalist.descript}</td>
                          <td>
                            <span class="badge badge-success">
                              {datalist.status}
                            </span>
                          </td>
                          <td>
                            <div
                              class="sparkbar"
                              data-color="#00a65a"
                              data-height="20"
                            >
                              {datalist.woname}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/*ag-grid 사용법
                    <div className="ag-theme-alpine" style={{height: 600}}>
                    <AgGridReact rowData={this.state.datalist} pagination="true" paginationPageSize="10" defaultColDef={{ resizable: true }}
                    onGridReady={onGridReady}
                    onFirstDataRendered={onFirstDataRendered}>
                      
                    <AgGridColumn  field="wonum" headerName="번호" resizable={true}></AgGridColumn>
                    
                      <AgGridColumn field="descript" headerName="요약"></AgGridColumn>
                      <AgGridColumn  field="status" headerName="상태"></AgGridColumn>
                      <AgGridColumn field="woname" headerName="작성자"></AgGridColumn>
                    </AgGridReact>
                  </div> */}
                </div>
                <Pagination
                  postPerPage={this.state.postPerPage}
                  totalPosts={this.state.datalist.length}
                  paginate={paginate}
                ></Pagination>
              </div>
              <div class="card-footer clearfix"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default index;
