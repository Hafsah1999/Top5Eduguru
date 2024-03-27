import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Manage = () => {
    const [Data, setData] = useState([]);


    //User fetch func
    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/college/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    //Delete func
    const deleteFuction = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/college/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchUserData();
        }
    }


    //User Display func
    const displayUsers = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.cname}</td>
                    <td>{obj.caddress}</td>
                    <td>{obj.courses}</td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>

                    <td>
                        <button className="btn btn-danger" onClick={() => { deleteFuction(obj._id) }}>Delete</button>
                    </td>
                    <td>
                        <Link className="btn btn-success" to={`/Admin/UpdateCollege/${obj._id}`} >Update</Link>
                    </td>
                </tr>
            </>
        ))
    }




    return (
        <>

            <header className=" rounded mx-auto mt-3 text-red-200 " style={{ background: "linear-gradient(to bottom,orange,black" }}>
                <div className="container py-3">
                    <h1 className="text-center font-serif fs-2">Manage College</h1>

                </div>
            </header>

            <div className="container mt-3">
                <table className="table table-dark">
                    <thead>
                        <tr className="font-serif fs-5 ">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Courses</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers()}
                    </tbody>
                </table>
            </div>





        </>
    )
}

export default Manage