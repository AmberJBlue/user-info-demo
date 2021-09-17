import React, { Fragment, useState } from 'react';
import Message from './Message';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Upload New Track');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');

  const onChange = e => {
    e.preventDefault()
    setFile(e.target.files[0]);
    console.log(file)
    setFilename(e.target.files[0].name);

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    submitData(formData)

    return false;
  };

  const submitData = async (formData) => {
    try {
        const res = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        });
        
  
        const { fileName, filePath } = res.data;
  
        setUploadedFile({ fileName, filePath });
        console.log(uploadedFile)
  
        setMessage('File Uploaded');
      } catch (err) {
        if (err.response.status === 500) {
          setMessage('There was a problem with the server');
        } else {
          setMessage(err.response.data.msg);
        }
      }
    return false;
  }

  return (
    <Fragment>
     {/* {uploadedFile ? (
        <div className='row'>
          <div className="w-100">
            {uploadedFile.filePath ? <Waveform url={uploadedFile.filePath} filename={uploadedFile.fileName}></Waveform> : null}
          </div>
        </div>
      ) : null} */}
      {message ? <Message msg={message} /> : null}
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            accept=".wav, .mp3"
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
    </Fragment>
  );
};

export default FileUpload;
