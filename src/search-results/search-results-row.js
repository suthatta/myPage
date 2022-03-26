//import { useHistory } from "react-router-dom";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({project}) => {
  //const history = useHistory();
  const navigate = useNavigate();
  const setActive = () => {
    navigate(`/project/${project.id}`);
    // navigate(`/project/${}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{project.address}</td>
      <td>
        ${project.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
      </td>
      <td>{project.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
