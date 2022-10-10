import { Icon } from "@iconify/react";
import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { modalToFalse } from "../actions/modalAction";

function Modal({ showModal }) {
  return (
    <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
      <div className="modal-content">
        <p className="modal-title">Message box</p>
        <p>Successful! Happy</p>
        <button onClick={modalToFalse}>
          <Icon
            icon="ant-design:close-square-filled"
            style={{ fontSize: "25px", color: "#087990" }}
          />
        </button>
      </div>
    </ReactModal>
  );
}
const mapstateToProps = (state) => {
  return { showModal: state.modal.showModal };
};
export default connect(mapstateToProps, { modalToFalse })(Modal);
