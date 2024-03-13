import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addCollegeSchema = Yup.object().shape({});

import toast from 'react-hot-toast';


const AddSchool = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addSchoolForm = useFormik({
        initialValues: {
            sname: "",
            title:'',
            sdetail: "",
            saddress: "",
            phone: "",
            image: "",
            email: "",
            fees: "",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/school/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                toast("Item uploaded successfully")
                Navigate("/School")
            }
            else {
                toast("Something went wrong")
            }
        },
        validationSchema: addCollegeSchema,

    });

    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }





    return (
        <>


            <p className="text-yellow-600 mb-3 font-mono bg-dark w-50 mx-auto rounded fs-1 text-center mt-3  fw-bold ">School</p>
            <form onSubmit={addSchoolForm.handleSubmit} className="mb-3 w-50 m-auto ">
                <div className="form-group ">
                    <label htmlFor="imageUrl" className="mb-2  "></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3 input"
                        required=''
                    />
                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='sname'
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.sname}

                        required="" placeholder="School" />
                    <label htmlFor="floatingInput" className='font-serif '>School Name</label>
                </div>
                <div className="form-floating ">
                    <input type="text" className="form-control input mb-2" id="floatingInput"
                        name='title'
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.title}

                        required="" placeholder="School" />
                    <label htmlFor="floatingInput" className='font-serif '>School Name</label>
                </div>
                <div className="form-floating">
                    <input
                        name="email"
                        id="floatingInput"
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.email}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Email"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif ">Email</label>

                </div>
                <div className="form-floating">
                    <input
                        name="phone"
                        id="floatingInput"
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.phone}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Phone"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Phone</label>

                </div>
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        name='sdetail'
                        id="floatingInput"
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.sdetail}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Timings"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif ">Details</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='saddress'
                        id="floatingInput"
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.saddress}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif ">Address</label>

                </div>



                <div className="form-floating">
                    <input
                        name="fees"
                        id="floatingInput"
                        onChange={addSchoolForm.handleChange}
                        value={addSchoolForm.values.fees}
                        className="form-control mb-4 input"
                        required=''
                        placeholder="Fees"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">fees</label>

                </div>

                <button type="submit" className="bg-black font-semibold py-2  text-yellow-600 fs-5 mx-auto d-block rounded mb-5 w-50">Add</button>


            </form>

        </>
    )
}


export default AddSchool