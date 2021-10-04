import { useLocation, useParams } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const cat = location.state;

  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <p>Cat Name is : {cat.name}</p>
      <p>{cat.description}</p>
    </div>
  );
};
export default Details;
