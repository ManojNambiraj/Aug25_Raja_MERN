import axios from "axios";
import React, { useEffect, useState } from "react";

function Userlist() {

    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const userdata = await axios.get(
          `https://68e3fb648e116898997aa5e6.mockapi.io/student`
        );

        setData(userdata.data);
    }    

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.password}</td>
                  </tr>
                );
            })}
          
          
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;
