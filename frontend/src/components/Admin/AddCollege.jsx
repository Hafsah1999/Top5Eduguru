import {  useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addCollegeSchema = Yup.object().shape({});
import { MultiSelect } from "react-multi-select-component";
import toast from 'react-hot-toast';

const options = [
    { label: "MCA"},
    { label: "BCA" },
    { label: "Btech" },
  ];

const AddCollege = () => {
    const [selected, setSelected] = useState([]);

    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addCollegeForm = useFormik({
        initialValues: {
            cname: "",
            cdetail: "",
            caddress: "",
            phone: "",
            image: "",
            email:"",
            fees:"",
            courses:""
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:5000/college/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
            toast("Item uploaded successfully")
                Navigate("/College")
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
          

          <p className="text-yellow-600 mb-3 font-mono bg-dark w-50 mx-auto rounded fs-1 text-center mt-3  fw-bold ">College</p>
            <form onSubmit={addCollegeForm.handleSubmit} className="mb-3 w-50 m-auto ">
                <div className="form-group ">
                    <label htmlFor="imageUrl" className="mb-2 font-serif"></label>
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
                        name='cname'
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.cname}

                        required="" placeholder="College" />
                    <label htmlFor="floatingInput" className='font-serif'>College Name</label>
                </div>
                <div className="form-floating">
                    <input
                        name="email"
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.email}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Email"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Email</label>

                </div>
                <div className="form-floating">
                    <input
                        name="phone"
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.phone}
                        className="form-control mb-2 input"
                        required=''
                        placeholder="Phone"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">Phone</label>

                </div>
                <div className="form-floating mb-2">
                    <input
                        type="text"
                        name='cdetail'
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.cdetail}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Timings"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Detail</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='caddress'
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.caddress}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Address</label>

                </div>
                <div className="form-floating">
                    <input
                        type="text"
                        name='courses'
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.courses}
                        className="form-control mb-2 input"
                        required=""
                        placeholder="Address"
                    />
                    <label htmlFor="floatingInput" className=" mb-2 font-serif">Courses</label>

                </div>



                <div className="form-floating">
                    <input
                        name="fees"
                        id="floatingInput"
                        onChange={addCollegeForm.handleChange}
                        value={addCollegeForm.values.fees}
                        className="form-control mb-4 input"
                        required=''
                        placeholder="Fees"
                    />
                    <label htmlFor="floatingInput" className="mb-2 font-serif">fees</label>

                </div>

                <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>

                <button type="submit" className="bg-black font-semibold py-2  text-yellow-600 fs-5 mx-auto d-block rounded mb-5 w-50">Add</button>


            </form>

           
        </>
    )
}


export default AddCollege