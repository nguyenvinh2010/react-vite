import { Flex, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserApi } from '../../services/api.service';

const UserTable = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        console.log(">>>run ef 1")
        loadUser();
    }, [])
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
        //console.log("???res", res.data);
        setDataUser(res.data?.data ?? res.data ?? []);

        // nếu API trả về res.data là array
        // if (res.data?.data !== null && res.data?.data !== undefined) {
        //     setDataUser(res.data.data);
        // } else if (res.data !== null && res.data !== undefined) {
        //     setDataUser(res.data);
        // } else {
        //     setDataUser([]);
        // }

    }
    //loadUser();
    console.log(">>>run ef 000")
    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
    )
}
export default UserTable;