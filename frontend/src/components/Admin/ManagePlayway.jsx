import { useState, useEffect } from "react"
// import UpdateProduct from "./UpdateProduct";

const ManagePlayway = () => {
    const [Data, setData] = useState([]);


    

  
    const fetchPlaywayData = async () => {
        const res = await fetch('http://localhost:5000/playway/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchPlaywayData();
    }, [])

    //Delete func
    const deleteFun = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/playway/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchPlaywayData();
        }
    }


    //User Display func
    const displayPlayway = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.pname}</td>
                    <td>{obj.paddress}</td>
                    <td>{obj.padetail}</td>
                    <td>{obj.timings}</td>
    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                
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
                <div className="container py-3 mt-5">
                    <h1 className="text-center fs-2 font-serif">Manage Playway</h1>

                </div>
            </header>

            <div className="container mt-4">
                <table className="table table-dark">
                    <thead>
                        <tr className="font-serif fs-5 ">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Detail</th>
                            <th>Timings</th>

                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayPlayway()}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManagePlayway