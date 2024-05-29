import React, { useState } from 'react';

function Form3() {
    const [employeeCode, setEmployeeCode] = useState('');
    const [message, setMessage] = useState('');
    const [employeeList, setEmployeeList] = useState([]);
    const [messageSuccess, setMessageSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessageSuccess('');
        setMessage('');

        if (employeeCode.trim() === '') {
            setMessage('Mã nhân viên không được để trống');
            return;
        }

        if (!employeeCode.startsWith('NV')) {
            setMessage('Mã nhân viên không đúng định dạng');
            return;
        }

        if (employeeCode.length < 8) {
            setMessage('Mã nhân viên không được ngắn hơn 8 ký tự');
            return;
        }

        if (employeeCode.length > 16) {
            setMessage('Mã nhân viên không được dài hơn 16 ký tự');
            return;
        }

        setEmployeeList([...employeeList, employeeCode]);
        setMessageSuccess('Thêm mã nhân viên thành công');
        setEmployeeCode('');
    };

    return (
        <div>
            <><h4>Bài 3</h4></>
            <form onSubmit={handleSubmit}>
                <label>
                    Mã nhân viên:&nbsp;
                    <input
                        type="text"
                        value={employeeCode}
                        onChange={(e) => setEmployeeCode(e.target.value)}
                    />
                </label>
                <br />
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{message && <b class="text-danger">{message}</b>}</p>
            <p>{messageSuccess && <b class="text-success">{messageSuccess}</b>}</p><br></br>
            <h4>Danh sách mã nhân viên:</h4>
            <ul>
                {employeeList.map((code, index) => (
                    <li key={index}>{code}</li>
                ))}
            </ul>
        </div>
    );
}

export default Form3;
