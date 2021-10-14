import React, { Component } from 'react';

class Woview extends Component {
    render() {
        return (
            <div>
                <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">변경</h3>

            <div class="card-tools">
              <button type="button" class="btn btn-tool" data-card-widget="collapse">
                <i class="fas fa-minus"></i>
              </button>
              <button type="button" class="btn btn-tool" data-card-widget="remove">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
         <form>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                  </div>
                  
              </div>
              <div class="col-sm-6">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
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
          <div class="card-footer">
            
          </div>
        </div>
            </div>
        );
    }
}

export default Woview;