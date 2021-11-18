import React, { Component } from "react";
import servicedata from "../service/SMpotalSerivce";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datalist: [],
    };
  }

  componentDidMount() {
    servicedata.Smlist().then((res) => {
      this.setState({ datalist: res.data });

      console.log(this.state.datalist);
    });
  }

  render() {
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
                  <table class="table m-0">
                    <thead>
                      <tr>
                        <th>번호</th>
                        <th>요약</th>
                        <th>상태</th>
                        <th>작성자</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.datalist.map((datalist) => (
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
                </div>
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
