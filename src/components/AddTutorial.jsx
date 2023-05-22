import axios from "axios";
import { useState } from "react";

const AddTutorial = ({getTutorial, url}) => {

  const [newTutorial, setNewTutorial] = useState({
    title: "",
    description : ""
  })

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(url, newTutorial )
    getTutorial();
    setNewTutorial({title:"", description:""})
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="title"
            placeholder="Enter your title"
            onChange={(e)=>setNewTutorial({...newTutorial, title: e.target.value})}
            value ={newTutorial.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="desc"
            onChange={(e)=>setNewTutorial({...newTutorial, description: e.target.value})}
            value ={newTutorial.description}
            placeholder="Enter your Description"


            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
