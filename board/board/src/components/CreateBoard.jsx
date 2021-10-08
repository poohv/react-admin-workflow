import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class CreateBoard extends Component {
    constructor(props){
        super(props);

        this.state= {
            writer : '',
            content: ''

        }
    }

    changewriterHandler = (event) =>{
        this.setState({writer : event.target.value});
        
    }

    changecontentHandler = (event) =>{
        this.setState({content : event.target.value});
    }

    crboard = (event) =>{
        event.preventDefault();

        let board = {
            writer : this.state.writer,
            content :  this.state.content

        };
        BoardService.createBoard(board).then( res =>{
            this.props.history.push('/board');
        })


    }

    render() {
        return (      
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Quick Example</h3>
                </div>
                <form>
                    <div class="card-body">
                    <div class="form-group">
                        <label for="exampleInputEmail1">writer</label>
                        <input type="text"  value ={this.state.writer}class="form-control" id="exampleInputEmail1" placeholder="Enter writer" onChange={this.changewriterHandler}/>
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">content</label>
                        <input type="text" value ={this.state.content} class="form-control" id="exampleInputPassword1" placeholder="title" onChange={this.changecontentHandler}/>
                    </div>
                    </div>
                    <div class="card-footer">
                     <button type="submit" class="btn btn-primary" onClick={this.crboard}>Submit</button>
                    </div>
              </form>
            </div>     
        );
    }
}

export default CreateBoard;