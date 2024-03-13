import { useState, useEffect } from "react"
// import UpdateReviews from "./UpdateReviews";
// import { Link } from "react-router-dom";
// import UpdateReviews from "../UpdateReviews";


const ManageReviews = () => {
    const [Data, setData] = useState([]);


    

  
    const fetchReviewsData = async () => {
        const res = await fetch('http://localhost:5000/reviews/getall');

        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    }

    useEffect(() => {
        fetchReviewsData();
    }, [])

    //Delete func
    const deleteFun = async (id) => {
        console.log(id);

        const res = await fetch('http://localhost:5000/reviews/delete/' + id, { method: 'DELETE' })

        if (res.status === 200) {
            fetchReviewsData();
        }
    }


    //User Display func
    const displayReviews = () => {
        return Data.map((obj) => (
            <>
                <tr>
                    <td>{obj.name}</td>
                    <td>{obj.comment}</td>
    <td>{obj.rating}</td>
                
                    <td>
                        <button className="btn btn-danger" onClick={() => { deleteFun(obj._id) }}>Delete</button>
                    </td>
                    {/* <td>
                      <Link to ="/Admin/UpdateReviews"> <button className="btn btn-success">Update</button></Link> 
                    </td> */}
                    <td>
                        {/* <UpdateReviews><button className="btn bg-green-500">Update</button></UpdateReviews> */}
                    </td>
                </tr>
            </>
        ))
    }



    return (
        <>

         

            <header className=' rounded mx-auto mt-3 text-red-200 ' style={{background:"linear-gradient(to bottom,orange,black"}}>
                <div className="container py-3 mt-2">
                    <h1 className="text-center fs-2 font-serif">Manage Reviews</h1>

                </div>
            </header>

            <div className="container mt-4">
                <table className="table table-warning">
                    <thead>
                        <tr className="font-serif fs-5 ">
                            <th>Name</th>
                            <th>Comment</th>
                            <th>Rating</th>
                           <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayReviews()}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ManageReviews