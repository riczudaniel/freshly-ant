import { useState } from 'react';
import { Button, Divider, Flex, Radio } from 'antd';

export default function ButtonGroup() {

    const [size, setSize] = useState('large'); // default is 'middle'

    return(
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Radio.Button value="large">Fridge</Radio.Button>
            <Radio.Button value="default">Freezer</Radio.Button>
            <Radio.Button value="small">Pantry</Radio.Button>
        </Radio.Group>
    )
}

