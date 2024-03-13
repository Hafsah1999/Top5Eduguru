import { useState, useEffect } from "react"
// import UpdateProduct from "./UpdateProduct";

const ManageSchool = () => {
    const [Data, setData] = useState([]);


    

  
    const fetchSchoolData = async () => {
        const res = await fetch('http://localhost:5000/school/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchSchoolData();
    }, [])

    //Delete func
    const deleteFun = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/school/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchSchoolData();
        }
    }


    //User Display func
    const displaySchool = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.sname}</td>
                    <td>{obj.saddress}</td>
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
                <div className="container py-3 mt-3">
                    <h1 className="text-center fs-2 font-serif">Manage School</h1>

                </div>
            </header>

            <div className="container mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr className="font-serif fs-5 ">
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaySchool()}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManageSchool