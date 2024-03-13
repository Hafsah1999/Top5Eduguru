import { useState, useEffect } from "react"
// import UpdateProduct from "./UpdateProduct";

const Manageuser = () => {
    const [Data, setData] = useState([]);


    

  
    const fetchuserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchuserData();
    }, [])

    //Delete func
    const deleteFun = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchuserData();
        }
    }


    //User Display func
    const displayuser = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj._id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.password}</td>
                
                    <td>
                        <button className="btn btn-danger" onClick={() => { deleteFun(obj._id) }}>Delete</button>
                    </td>
                    {/* <td>
                        <UpdateProduct><button className="btn btn-success">Update</button></UpdateProduct>
                    </td> */}
                </tr>
            </>
        ))
    }



    return (
        <>

         

            <header className=' rounded mx-auto mt-3 text-red-200 ' style={{background:"linear-gradient(to bottom,orange,black"}}>
                <div className="container py-2 mt-3">
                    <h1 className="text-center fs-2 font-serif">Manage user</h1>

                </div>
            </header>

            <div className="container mt-5">
                <table className="table table-warning">
                    <thead>
                        <tr className="font-serif fs-5 ">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayuser()}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Manageuser