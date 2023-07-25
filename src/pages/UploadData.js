import { Row, Typography, Layout, Upload, message, Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import '../css/UploadData.css'

const { Content } = Layout;
const { Text } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;

const UploadData = () => {

  const [fileToUpload, setFileToUpload] = useState()
  const [descriptionOfFile, setDescriptionOfFile] = useState("")

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', fileToUpload);

    // You can add additional metadata to the form data
    formData.append('file_desc', descriptionOfFile);
    formData.append('upload_date', new Date().toISOString().split('T')[0]);

    try {
      const response = await fetch('https://swim-watershed.ucalgary.ca/cgi-bin/app.cgi/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log(response)
        message.success('File uploaded successfully!');
      } else {
        message.error('File upload failed.');
      }
    } catch (error) {
      console.error('Error occurred during file upload:', error);
      message.error('File upload failed.');
    }
  };

  const props = {
    name: 'file',
    multiple: false,
    maxCount:1,
    customRequest: ({ file, onSuccess, onError }) => {
      // Call your custom function to handle file upload
      handleFileUpload(file)
        .then(() => {
          onSuccess();
        })
        .catch((error) => {
          onError(error);
        });
    },
    beforeUpload: () => false, // To prevent default upload behavior
    onChange: (info) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        setFileToUpload(info.file)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    height: '30vh'
  };

  return (
    <>
      {/* Welcome to SWIM Dashboard! */}
      <Content style={{ padding: '0 1vw' }}>
        <Row style={{ marginTop: '2vh', marginBottom: '2vh' }} justify={"center"}>
          <Text className="uploadtitle">Upload File Tool</Text>
        </Row>
 
        <Dragger {...props}>
          <p className="ant-upload-text">Click or drag file to this area to select your file</p>
        </Dragger>
        <TextArea value={descriptionOfFile} onChange={e=>setDescriptionOfFile(e.target.value)} style={{margin:'24px 0px 24px 0px'}} rows={4} placeholder="Please write the file description here..." maxLength={1000}/>
        <Row>
          <Button onClick={handleFileUpload}>
            Click to Upload
          </Button>
        </Row>

      </Content>
    </>
  )
}

export default UploadData;
