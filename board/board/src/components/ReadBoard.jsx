import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class ReadBoard extends Component {
    constructor(props){
        super(props)

       this.state ={
            boards : []  
       }
    }
    componentDidMount(){
        const { params } = this.props.match;
        BoardService.readBoard(params).then(
                res => {this.setState({
                  
                    boards :  res.data

                });
            }
        )
    }
    render() {
        
        return (     
             <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">상세내용</h3>
                </div>
                <form>
                    <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">글번호</label>
                        <input type="text" value={this.state.boards.map(res => res.bno)} class="form-control" id="exampleInputwriter" placeholder="Enter writer" />
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">작성자</label>
                        <input type="text" value ={this.state.boards.map(res => res.writer)} class="form-control" id="exampleInputtitle" placeholder="title" />
                    </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">내용</label>
                        <input type="text" value ={this.state.boards.map(res => res.content)} class="form-control" id="exampleInputcontent" placeholder="content" />
                    </div>
                    </div>
                    <div class="card-footer">
                     <button type="submit" class="btn btn-primary" >수정</button>
                    </div>
              </form>
            </div>     
            
        );
    }
}

export default ReadBoard;