
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
        {
            value: 'grains',
            label: 'Grains',
        },
      ];
    return(
        <div>
            <Space.Compact>
                <Input defaultValue="" placeholder='Enter Product Name' />
            </Space.Compact>
            <Select defaultValue="selectGroup" options={options}  />
            <Space.Compact>
                <Input defaultValue="" placeholder='Enter Expiration Date' />
            </Space.Compact>
            
        </div>
    )
}