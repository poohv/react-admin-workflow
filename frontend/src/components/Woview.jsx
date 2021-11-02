import React, { useEffect, useState } from "react";

import "../App.css";

function Woview() {
  const [inputs, setInputs] = useState({
    wonum: "",
    status: "",
    woname: "",
    wophone: "",
  });

  const changehandler = (e) => {
    const { value, name } = e.target;
    console.log(name);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onsummit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onsummit}>
      <div class="card">
        <div class="col-12">
          <a class="btn btn-danger float-right" href="/Wochange">
            <i class="fas"></i> Close
          </a>
          <button type="submit" class="btn btn-success float-right">
            <i class="fas fa-save"></i> Save
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card card-primary card-outline card-outline-tabs">
            <div class="card-header p-0 border-bottom-0">
              <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
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
                          value={inputs.wonum}
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
                          value={inputs.status}
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
                          placeholder="변경 번호"
                          name="woname"
                          value={inputs.woname}
                          onChange={changehandler}
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
                          value={inputs.wophone}
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
                          placeholder="작성자"
                          name="worequ"
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
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label for="exampleInputEmail1">작성일</label>
                        <input
                          type="text"
                          class="form-control"
                          id="wocrdt"
                          placeholder="날짜"
                          name="wocrdt"
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
    </form>
  );
}

export default Woview;
