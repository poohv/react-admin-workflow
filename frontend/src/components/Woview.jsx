import React, { Component } from 'react';

class Woview extends Component {
    render() {
        return (
            
              
        <div class="card">       
            <div class="card-header">
              <div class="post">사용자 정보</div>
            </div>
         <form>
         
          <div class="card-body">
          
            <div class="row">
              <div class="col-sm-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">변경 번호</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="변경 번호"/>
                  </div>
                  
              </div>
              <div class="col-sm-3">
                  <div class="form-group">
                    <label for="exampleInputEmail1">요약</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="요약"/>
                  </div>
                  
              </div>
              <div class="col-sm-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">작성자</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="작성자"/>
                  </div>      
              </div>        
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Minimal</label>
                  <select class="form-control select2" style={{width: '100%'}}>
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
            
              <div class="col-md-6">
                <div class="form-group">
                  <label>Multiple</label>
                  <select class="select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>California</option>
                    <option>Delaware</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Washington</option>
                  </select>
                </div>
                
                
              </div>
            </div>    
          </div>
         </form>
         <div class="card-header">
            <div class="post">상세 정보</div>
         </div>
               
          <div class="card-body">
            <div class="row">
              <div class="col-sm-2">
                  <div class="form-group">
                    <label for="exampleInputEmail1">변경 번호</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="변경 번호"/>
                  </div>
                  
              </div>
              </div>
              </div>
        </div>
    
           
        );
    }
}

export default Woview;