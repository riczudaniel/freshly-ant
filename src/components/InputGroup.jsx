
import "../styles/InputGroup.css"


import { Button, Input, Select, Space } from 'antd';

export default function InputGroup(){

    const options = [
        {
            value: 'selectGroup',
            label: 'Select Group...',
            disabled: true, 
        },
        {
            value: 'fruits',
            label: 'Fruits',
          
        },
        {
            value: 'vegetables',
            label: 'Vegetables',
        },
        {
            value: 'dairy',
            label: 'Dairy',
        },
        {
            value: 'grains',
            label: 'Grains',
        },
        {
            value: 'protein',
            label: 'Protein',
        },
        {
            value: 'sauces',
            label: 'Sauces',
        },
        {
            value: 'softDrinks',
            label: 'Soft Drinks',
        },
        {
            value: 'snacks',
            label: 'Snacks',
        },
      ];
    return(
        <>

            <div id="input-holder">
                <Space.Compact>
                    <Input className="product-inputs"  defaultValue="" placeholder='Enter Product Name' />
                </Space.Compact>
                <Space.Compact>
                    <Select className="product-inputs" defaultValue="selectGroup" options={options}  />
                </Space.Compact>
                <Space.Compact>
                    <Input className="product-inputs" defaultValue="" placeholder='Enter Expiration Date' type="date" />
                </Space.Compact>
                
            </div>
            <Button className="add-btn" type="primary">Add</Button>
        </>
    )
}