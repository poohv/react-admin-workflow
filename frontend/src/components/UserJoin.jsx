import React, { useEffect, useState } from "react";
import axios from "axios";
 function UserJoin ({ history }) {

    const [username, setUsername] = useState([]);

    const changehandler = (e) => {
        const { value, name } = e.target;
        setUsername({
          ...username,
          [name]: value,
        });
    }

    function login(e){
        e.preventDefault();
        axios.post("http://localhost:8080/api/join",username).then(
            history.push('/login')

        );
     }   

    return (
        <div>
            <div class="card card-primary">
                <div class="card-header">
                <h3 class="card-title">Quick Example</h3>
                </div>

                <form onSubmit={login}>
                <div class="card-body">
                    <div class="form-group">
                    <label for="exampleInputEmail1">ID</label>
                    <input
                        type="text"
                        class="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter id"
                        onChange={changehandler}
                        
                    />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={changehandler}
                       
                    />
                    </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">name</label>
                    <input
                        type="text"
                        name="woname"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="name"
                        onChange={changehandler}
                       
                    />
                    </div>

                    <div class="form-group">
                    <label for="exampleInputPassword1">phone</label>
                    <input
                        type="text"
                        name="wophone"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="phone"
                        onChange={changehandler}
                       
                    />
                    </div>

                    <div class="form-group">
                    <input
                        type="text"
                        name="role"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="role"
                        value="ROLE_USER"
                        onChange={changehandler}
                        hidden="true"
                       
                    />
                    </div>
                   
                    <div class="form-check">
                    <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                    </div>
                </div>

                <div class="card-footer">
                    <button onClick={login} type="submit" class="btn btn-primary">
                    가입하기
                    </button>
                </div>
                
                </form>
            </div>
        </div>
    );
};

export default UserJoin;