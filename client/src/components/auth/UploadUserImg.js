import React, { Component } from 'react';

class UploadUserImg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form action="/upload/photo" enctype="multipart/form-data" method="POST"> 
                <input type="file" name="myImage" accept="image/*" />
                <input type="submit" value="Upload Photo"/>
            </form>
         );
    }
}
 
export default UploadUserImg;