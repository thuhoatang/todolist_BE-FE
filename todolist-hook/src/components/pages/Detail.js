import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";

import { snipperToFalse, snipperToTrue } from "../../actions/spinnerAction";

const Detail = ({ snipperToFalse, snipperToTrue }) => {
  const [title, setTitle] = useState("");
  let params = useParams();

  useEffect(() => {
    showItem();
  }, []);
  const showItem = async () => {
    snipperToTrue();
    axios
      .get("http://localhost:3001/tasks/" + params.id, {})
      .then((response) => {
        snipperToFalse();
        setTitle(response.data.title);
      });
  };

  return <div>{<h3>detail name: {title}</h3>}</div>;
};

export default connect(null, { snipperToFalse, snipperToTrue })(Detail);
// export default Detail;
