import React, { useState } from 'react';

function Form2() {
    const [employeeCode, setEmployeeCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageCode, setMessageCode] = useState('');
    const [messageEmail, setMessageEmail] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageCode('');
        setMessageEmail('');
        setMessagePassword('');
        setMessageSuccess('');

        if (employeeCode.trim() === '') {
            setMessageCode('Mã không được để trống');
            return;
        }

        if (!employeeCode.startsWith('NV')) {
            setMessageCode('Mã không đúng định dạng');
            return;
        }

        if (employeeCode.length < 8) {
            setMessageCode('Mã không được nhỏ hơn 8 ký tự');
            return;
        }

        if (employeeCode.length > 16) {
            setMessageCode('Mã không được lớn hơn 16 ký tự');
            return;
        }

        if (email.trim() === '') {
            setMessageEmail('Email không được để trống');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setMessageEmail('Email không đúng định dạng');
            return;
        }

        if (password.length < 8) {
            setMessagePassword('Mật khẩu không được nhỏ hơn 8 ký tự');
            return;
        }

        setMessageSuccess('Đăng ký thành công');
    };

    return (
        <div>
            <h4>Bài 2</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Mã nhân viên:&nbsp;
                    <input
                        type="text"
                        value={employeeCode}
                        onChange={(e) => setEmployeeCode(e.target.value)}
                    />
                    <p>{messageCode && <b class="text-danger">{messageCode}</b>}</p>
                </label>
                <br />
                <label>
                    Email:&nbsp;
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>{messageEmail && <b class="text-danger">{messageEmail}</b>}</p>
                </label>
                <br />
                <label>
                    Mật khẩu:&nbsp;
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p>{messagePassword && <b class="text-danger">{messagePassword}</b>}</p>
                </label>
                <p>{messageSuccess && <b class="text-success">{messageSuccess}</b>}</p>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Form2;
