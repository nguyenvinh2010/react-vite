import { Input, notification, Modal } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import api from '../token/api';
import { createUserAPI } from '../../services/api.service';
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    //console.log(">>>check fullname", fullName, email, passWord, phone)
    const handleSubmitBtn = async () => {
        const rest = await createUserAPI(fullName, email, passWord, phone);
        //console.log("check rest", rest)

        if (rest.data) {
            notification.success({
                message: "create user",
                description: "tạo user thành công"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(rest.message)
            })
        }

        //console.log("check res>>>", rest.data.data);
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3> Table User</h3>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    type="primary">Create User</Button>
            </div>
            <Modal
                title="Create User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={(isModalOpen)}
                onOk={() => handleSubmitBtn()}
                onCancel={() => { setIsModalOpen(false) }}
                maskClosable={false}
                okText={"Create"}
            >
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                        placeholder="Basic usage" />

                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Pass</span>
                    <Input.Password
                        value={passWord}
                        onChange={(event) => { setPassWord(event.target.value) }}
                        placeholder="Basic usage" />
                </div>
                <div>
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </Modal>
        </div >
    )
}
export default UserForm;
