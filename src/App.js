import React, { useState } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import ImageCard from './components/ImageCard';
import getUrl from './utils/getUrl';
import './App.css';


const props = {
  name: 'file',
  action: getUrl(),
  accept: "image/*;capture=camera"
};

const App = () => {
  const [image, setImageStatus] = useState({
    width: "",
    url: "",
    height: "",
  });
  const [disabled, setDisabled] = useState(false)
  //Onfile Change
  const onChange = (info) => {
    setDisabled(true);
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info.file)
      setDisabled(false);
      message.success(`${info.file.name} file uploaded successfully`);
      setImageStatus(info.file.response)
    } else if (info.file.status === 'error') {
      setDisabled(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  //On retrying 
  const handleClick = () => {
    setImageStatus({
      width: "",
      url: "",
      height: "",
    })
  }
  let { url } = image;
  return (
    <div className="App">


      {!url && <Upload {...props} disabled={disabled} onChange={onChange} className="flex-center">
        <Button shape="circle" icon="upload" className="upload-btn">
          Take a photo
        </Button>

      </Upload>}
      {
        url && <ImageCard image={image} handleClick={handleClick} />
      }


    </div>
  );
}



export default App;
