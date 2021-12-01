import React, { useEffect, useState } from "react";
import Smsr from "../service/SMpotalSerivce";

function Wodetail({ match }) {
  const [datalist, setDatalist] = useState([]);
  const [userinputs, setUserinputs] = useState({});
  const params = match.params;
  const input = document.querySelectorAll("input");
  const [workflow, setWorkflow] = useState("승인요청");

  useEffect(() => {
    async function fetchData() {
      await Smsr.Detail(params).then(function (res) {
        setDatalist(res.data[0]);
      });
    }
    console.log("1");
    fetchData();
  }, []);

  useEffect(function () {
    console.log("2");
    if (datalist.status != "NEW") {
      if (datalist.status == "승인요청") {
        setWorkflow("승인완료");
      }

      if (datalist.status == "승인완료") {
        setWorkflow("검토요청");
      }

      if (datalist.status == "검토요청") {
        setWorkflow("검토완료");
      }

      for (let i = 0; i < input.length; i++) {
        input[i].setAttribute("readOnly", "readOnly");
      }
    }
  });

  const changehandler = (e) => {
    const { value, name } = e.target;
    setDatalist({
      ...datalist,
      [name]: value,
    });
  };

  const onsummit = (e) => {
    e.preventDefault();
    //상태가 NEW 일때 컬럼수정 저장(업데이트) 가능
    if (datalist.status == "NEW") {
      Smsr.update(datalist);
    }
  };

  function workflowclick(e) {
    if ((datalist.status = "NEW")) {
      const list = { wonum: datalist.wonum, status: workflow };
      setDatalist({
        status: workflow,
      });
      Smsr.update(list);
    }
  }

  return (
    <form onSubmit={onsummit}>
      {/* {datalist.map((datalist) => ( */}
      <div>
        <div class="card">
          <div>
            <div class="btn-group">
              <a class="btn btn-danger" href="/Wochange">
                <i class="fas"></i> Close
              </a>
            </div>

            <div class="btn-group">
              <button
                type="submit"
                class="btn btn-success  "
                onsummit={onsummit}
              >
                <i class="fas fa-save"></i> Save
              </button>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-warning "
                id="workflowcancel"
                onClick={workflowclick}
              >
                <i class="fas fa-save"></i> {workflow.substring(0, 2)}취소
              </button>
            </div>

            <div class="btn-group">
              <button
                type="button"
                class="btn btn-info "
                id="workflow"
                onClick={workflowclick}
              >
                <i class="fas fa-save"></i> {workflow}
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card card-primary card-outline card-outline-tabs">
              <div class="card-header p-0 border-bottom-0">
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

                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="custom-tabs-one-home-tab"
                      data-toggle="pill"
                      href="#custom-tabs-one-home"
                      role="tab"
                      aria-controls="custom-tabs-one-home"
                      aria-selected="true"
                    >
                      승인자
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card-body">
                <div class="card">
                  <div class="card-header">
                    <div class="post">현재 할당 내역</div>
                  </div>

                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">변경</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="변경 번호"
                            name="wonum"
                            readOnly="readOnly"
                            value={datalist.wonum}
                            onChange={changehandler}
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">상태</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            placeholder="요약"
                            name="status"
                            readOnly="readOnly"
                            value={datalist.status}
                            onChange={changehandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <div class="post">사용자 정보</div>
                  </div>

                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="form-group">
                          <label for="exampleInputEmail1">작성자</label>
                          <input
                            type="text"
                            class="form-control"
                            id="woname"
                            placeholder="작성자"
                            name="woname"
                            value={datalist.woname}
                            onChange={changehandler}
                            readOnly="readOnly"
                          />
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="form-group">
                          <label for="exampleInputEmail1">휴대폰 번호</label>
                          <input
                            type="text"
                            class="form-control"
                            id="wophone"
                            placeholder="요약"
                            name="wophone"
                            value={datalist.wophone}
                            onChange={changehandler}
                          />
                        </div>
                      </div>
                      <div class="col-sm-2">
                        <div class="form-group">
                          <label for="exampleInputEmail1">요청자</label>
                          <input
                            type="text"
                            class="form-control"
                            id="worequ"
                            placeholder="요청자"
                            name="worequ"
                            value={datalist.worequ}
                            onChange={changehandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-header">
                    <div class="post">상세 정보</div>
                  </div>

                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <div class="form-group">
                          <label for="exampleInputEmail1">변경 개요</label>
                          <input
                            type="text"
                            class="form-control"
                            id="descript"
                            placeholder="변경 개요"
                            name="descript"
                            value={datalist.descript}
                            onChange={changehandler}
                          />
                        </div>

                        <div class="form-group">
                          <label>구성품목</label>
                          <select
                            class="form-control select2"
                            style={{ width: "70%" }}
                          >
                            <option selected="selected">Alabama</option>
                            <option>Alaska</option>
                            <option>California</option>
                            <option>Delaware</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Washington</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-sm-3">
                        <div class="form-group">
                          <label for="exampleInputEmail1">분류</label>
                          <input
                            type="text"
                            class="form-control"
                            id="woclass"
                            placeholder="분류"
                            name="woclass"
                            value={datalist.woclass}
                            onChange={changehandler}
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">등급</label>
                          <input
                            type="text"
                            class="form-control"
                            id="wolevel"
                            placeholder="등급"
                            name="wolevel"
                            value={datalist.wolevel}
                            onChange={changehandler}
                          />
                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">변경 유형</label>
                          <input
                            type="text"
                            class="form-control"
                            id="wotype"
                            placeholder="변경 유형"
                            name="wotype"
                            value={datalist.wotype}
                            onChange={changehandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-header">
                    <div class="post">날 짜</div>
                  </div>

                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1">작성일</label>
                          <input
                            type="text"
                            class="form-control"
                            id="wocrdt"
                            placeholder="날짜"
                            name="wocrdt"
                            readOnly="readOnly"
                            value={datalist.wocrdt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </form>
  );
}

export default Wodetail;
