import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import React from "react";
import { useState } from "react";
import NewUser from "./components/NewUser";


function App() {

  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  const logNewUser = () => {
    setUser(newUser);
  }

  return (

    <main className="content">
      <div className="container mt-3">
        {user && <div>"Logged in as "`${user}`</div>}

        {!user && (<div className="card w-100 text-center border-white">
          <div className="row">
            <div className="col-12">
              <h5>Enter Username</h5>
            </div>

            <div className="d-flex justify-content-center py-1">
              <div className="col-4">
                <input type="text" name="usename" value={newUser} className="form-control mb-3" placeholder="Username" autoComplete="off" onChange={(e) => handleChange(e)} onKeyDown={(e) => (e.code == "Enter" ? logNewUser() : null)} />
                <button className="btn btn-success w-100" onClick={()=> logNewUser()}>Join!</button>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </main>


  );
}

export default App;
