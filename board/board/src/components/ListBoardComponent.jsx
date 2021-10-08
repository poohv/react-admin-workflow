import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component {
    constructor(props){
        super(props)
    
    this.state = {
        boards : []
    }

    this.createBoard = this.createBoard.bind(this);
 
    }
    componentDidMount(){
        BoardService.getBoards().then(
            (res)=> {           
                this.setState({boards : res.data.data });            
            }   
        )           
    }

    createBoard(){
        this.props.history.push(`/create-board`);

    }

    readBoard(bno)  {
        
        this.props.history.push(`/read-board/${bno}`);
        
    }
   
    render() {
        return (
            
            <div className="dataTables_wrapper dt-bootstrap4">
                <h2 className="text-center">Boards List</h2>
                <div class="card-header">
                    <a href="/create-board" class="btn btn-primary">글쓰기</a>
                    <button class="btn btn-primary" onClick={this.createBoard}>글쓰기2</button>
                </div>
                <div className ="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>글번호</th>
                                <th>타이틀</th>
                                <th>작성자</th>                            
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.bno}>
                                        <td> <a href="#" onClick={e =>{
                                            e.preventDefault();
                                            this.readBoard(board.bno)}}>{board.bno}</a> </td>
                                        <td> {board.writer} </td>
                                        <td> {board.content} </td>
                                    </tr>
                                )
                            }                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;