import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 

const styles = {
  flexed: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nomargin: {
    margin: 0
  }
}

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      preview: localStorage.getItem('preview') || "",
      file: "",
      imagePreviewUrl: ""
    }
  }
  componentDidMount = () =>{
    if (localStorage.getItem('preview') !== undefined){
      this.state
    }
  }
  
  handleChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)

    //handle file select and show a preview of the current selected image
    //https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL

  }

    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }

      return (
        <form name="submitform" className="card-content" onSubmit={this.props.handleSubmit}>
          <div style={styles.flexed}>
            <h4 style={styles.nomargin}>Create a post:</h4>
            <div className="form-group">
              <input className="btn green accent-2" type="submit" value="Submit"/>
            </div>
          </div>
          <div className="form-group">
            <label className="w-100">
              Name:
              <input className="form-control" id="name" onChange={this.props.handleChange} />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100">
              Content:
              <textarea id="content" className="materialize-textarea" onChange={this.props.handleChange} />
            </label>
          </div>
           <input
            onChange={this.handleChange}
            type="file"
            ref="file"
          />
          <img src={this.state.preview} id="image"/>
          <div className="imgPreview">
            {imagePreview}
          </div>
        </form>
    )
  }
};

CreatePost.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
}

/* {input => {
  this.fileInput = input;
}} */