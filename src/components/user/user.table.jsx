import { Flex, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserApi } from '../../services/api.service';

const UserTable = () => {
    const [dataUser, setDataUser] = useState([]);
    // useEffect(() => {
    //     loadUser();
    // })
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'age',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'address',
        }
    ];
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        console.log("???res", res.data);
        //setDataUser(res.data?.data ?? res.data ?? []);

        // nếu API trả về res.data là array
        // if (Array.isArray(res.data)) {
        //     setDataUser(res.data);
        // }

        // // nếu API trả về res.data.data
        // else if (Array.isArray(res.data?.data)) {
        //     setDataUser(res.data.data);
        // }

        // // fallback
        // else {
        //     setDataUser([]);
        // }

    }
    loadUser();

    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}
export default UserTable;