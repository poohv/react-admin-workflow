import React, { Component } from 'react';

class Wochage extends Component {
    render() {
        return (
            
            <div class="content">
            <div class="container-fluid">          
                <div class="row">
                <div class="col-12">
                
                    <div class="card card-primary card-outline card-outline-tabs">
                    <div class="card-header p-0 border-bottom-0">
                                <a class="btn  bg-secondary float-right" href="/wonew">
                                    <i class="fas fa-edit"></i>신규
                                </a>  
                        <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#custom-tabs-one-home" role="tab" 
                            aria-controls="custom-tabs-one-home" aria-selected="true">목록</a>
                        </li>   
                            
                        </ul>
                       
                    </div>
                    <div class="card-body">
                        <div class="tab-content">
                        <div class="tab-pane active" id="custom-tabs-one-home">
                        <div class="card-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>변경</th>
                                        <th>요약</th>
                                        <th>작성자</th>
                                        <th>구성 품목</th>
                                        <th>상태</th>
                                        <th>계획 시작 시간</th>
                                        <th>계획 완료 시간</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Trident</td>
                                        <td>Internet
                                        Explorer 4.0
                                        </td>
                                        <td>Win 95+</td>
                                        <td> 4</td>
                                        <td>X</td>
                                        <td>X</td>
                                        <td>X</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>             
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
}

export default Wochage;