import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { fetchList } from "../actions/listAction";
const Listtodo = ({ listtodo, fetchList }) => {
  useEffect(() => {
    fetchList();
  }, []);
  const renderListtodo = listtodo.map((item) => {
    return <Item key={item._id} item={item.title} ID={item._id} />;
  });

  return <div className="ui middle aligned divided list">{renderListtodo}</div>;
};
const mapstateToProps = (state) => {
  return { listtodo: state.list.listToDo };
};
export default connect(mapstateToProps, { fetchList })(Listtodo);
