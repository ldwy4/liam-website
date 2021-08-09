import React, { Component } from "react";
import "../style.css";
import sheetImage from "../images/sheets.png";

class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        update: false,
    };
    this.UpdateOnClick = () => {
        if (this.state.update) {
            this.setState({ update: false });
        } else {
            this.setState({ update: true });
            this.props.onChangeId()
        }
    };
    this.UnUpdateOnClick = () => {
        this.setState({ update: false });
    };
  }
  render() {
    let { title, id, onChangeId } = this.props;
        return (
            <div className="mb-2 mt-2 sheet">
                <div className="card" id={id} >
                    <button
                      className={ !this.props.active ? 'btn' : 'btn btn-info' }
                      onClick={onChangeId}
                      type="button"
                      style={{ Color: "#FFF" }}
                      value={id}
                        // onClick={onChangeId}
                    >
                    <div className="card-horizontal">
                        <div className='image-wrapper'> <img src={sheetImage} height='40px'></img></div>
                        
                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        {/* <div className="mb-3 card-text">
                            <div>{id}</div>
                        </div> */}
                        </div>
                    </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Sheet;
