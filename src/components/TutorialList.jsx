import { AiFillDelete } from "react-icons/ai";
import axios from "axios";




const TutorialList = ({tutorial, url, getTutorial}) => {


const handleDelete = async (id) => {
  try {
    await axios.delete(`${url}/${id}`)
    getTutorial();
  } catch (error) {
    console.log(error)
  }
};

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
         
           {tutorial?.map(item=>{
            return (
              <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className="text-center text-nowrap">

                <AiFillDelete
                  size={22}
                  type="button"
                 
                  className="text-danger "
                  onClick={() => handleDelete(item.id)}
                />
              </td>
            </tr>
            )
           })}
             
         
       
        </tbody>
      </table>

    </div>
  );
};

export default TutorialList;
