import { useState, useEffect } from 'react';
import "../wrapper.css";
const Wrapper = () => {
    type User = {
        id?: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        address: Address;
        company: company;
        password?: string;
    };
    type Address = {
        hnumber: string;
        street: string;
        city: string;
        pincode: string;
    }
    type company = {
        companyname: string;
        companywebsite: string;
        role: string;
    }
    const [users, updateUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/users');
            const data = await response.json();
            updateUsers(data);
        }
        fetchData()
    }, []);
    console.log(users);
    return (
        <>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>USER <b>MANAGEMENT</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal">
                                        <span>Add New Employee</span></a>
                                    <a href="#profileModal" className="btn btn-success profileModal" data-toggle="modal">
                                        <span>Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover no-user">
                            <thead id="tableHead">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Company Name</th>
                                    <th>Role</th>
                                    <th>Website</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                                {
                                    users.map((user: User, index) => {
                                        const slno = 1;
                                        return (
                                            <tr key={index}>
                                                <td>{slno}</td>
                                                <td>{user.first_name + user.last_name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.address.hnumber + ", " + user.address.street + ", " + user.address.city + " " + user.address.pincode}</td>
                                                <td>{user.company.companyname}</td>
                                                <td>{user.company.role}</td>
                                                <td><a href="${user.company.companywebsite
                        }" target="_blank">{user.company.companywebsite
                                                    }</a></td>
                                                <td>
                                                    <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                                                        <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                                                        <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wrapper;