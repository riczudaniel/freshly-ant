import "../styles/InputGroup.css";
import { Button, Input, Select, Space } from 'antd';
import optionsData from '../data.json'; // Import the JSON file

export default function InputGroup() {
  const options = optionsData.options;

  return (
    <>
      <div id="input-holder">
        <Space.Compact>
          <Input className="product-inputs" defaultValue="" placeholder='Enter Product Name' />
        </Space.Compact>
        <Space.Compact>
          <Select className="product-inputs" defaultValue="selectGroup" options={options} />
        </Space.Compact>
        <Space.Compact>
          <Input className="product-inputs" defaultValue="" placeholder='Enter Expiration Date' type="date" />
        </Space.Compact>
      </div>
      <Button className="add-btn" type="primary">Add</Button>
    </>
  );
}