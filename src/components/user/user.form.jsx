import { Input } from 'antd';
import { Button, Flex } from 'antd';
const UserForm = () => {

    return (
        <div className="user-form">

            <div>
                <span>FullName</span>
                <Input placeholder="Basic usage" />

            </div>
            <div>
                <span>Email</span>
                <input />
            </div>
            <div>
                <span>Pass</span>
                <Input.Password placeholder="Basic usage" />
            </div>
            <div>
                <span>Phone</span>
                <input />
            </div>
            <div>
                <Button type="primary">Create User</Button>
            </div>
        </div>
    )
}
export default UserForm;
