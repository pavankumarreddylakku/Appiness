import React, { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { Table, Tag, Space } from 'antd';

const Dash = () => {
    const [data, setData] = useState({user: [{
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
    },
    {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
    },
    {
        "id": 3,
        "name": "test3",

        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
    },
    {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
    },
    {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
    },
    {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
    }
    ]});
    const dataSource = data.user;
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'phoneNo',
            dataIndex: 'phoneNo',
            key: 'phoneNo',
        },
    ];
    return(
        <Table dataSource={dataSource} columns={columns} />
    );
}
export default Dash;