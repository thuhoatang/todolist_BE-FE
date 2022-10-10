import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteList } from "../actions/listAction";
import { changeToEditInput } from "../actions/inputAction";

const Item = ({ item, ID, deleteList, changeToEditInput }) => {
  return (
    <>
      <div className="item">
        <div className="right floated content">
          <div
            className="ui button"
            onClick={async () => {
              // await editItem(ID);
              changeToEditInput(ID);
            }}
          >
            EDIT
          </div>

          <div
            className="ui button"
            onClick={() => {
              deleteList(ID);
            }}
          >
            DELETE
          </div>
        </div>
        <Link to={`/detail/${ID}`} className="content">
          {item}
        </Link>
      </div>
    </>
  );
};
export default connect(null, { deleteList, changeToEditInput })(Item);
// export default Item;
