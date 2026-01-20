import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phone, setPhone] = useState("");
    //console.log(">>>check fullname", fullName, email, passWord, phone)
    const handleClick = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            passWord: passWord,
            email: email,
            phone: phone
        }
        // const URL_BACKEND = "http://localhost:8080/api/v1/auth/login";

        // axios.get(URL_BACKEND, {
        //     headers: {
        //         Authorization: `Bearer ${accessToken}`
        //     }
        // });
        axios.post(URL_BACKEND, data);

        console.log(">>>check value: ", { fullName, email, passWord, phone })
    }
    return (
        <div className="user-form">

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
            <div>
                <Button
                    onClick={handleClick}
                    type="primary">Create User</Button>
            </div>
        </div>
    )
}
export default UserForm;
