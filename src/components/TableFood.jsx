
import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Group',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 6 ? 'orange' : 'green';
          if (tag === '3 days') {
            color = 'red';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    product: 'John Brown',
    group: 32,
    tags: ['> 7 days'],
  },
  {
    key: '2',
    product: 'Jim Green',
    group: 42,
    tags: ['3 days'],
  },
  {
    key: '3',
    product: 'Joe Black',
    group: 32,
    tags: ['7 DAYS'],
  },
];

const TableFood = () => <Table columns={columns} dataSource={data} />;
export default TableFood;