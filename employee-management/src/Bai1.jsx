import React, { useState } from 'react';

function Form1() {
  const [employeeCodes, setEmployeeCodes] = useState([
    'NV01', 'NV02', 'NV03', 'NV04', 'NV05',
    'NV06', 'NV07', 'NV08', 'NV09', 'NV10'
  ]);

  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [messageSuccess, setMessageSuccess] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setMessage('')
    setMessageSuccess('')
    e.preventDefault();
    if (inputValue.trim() === '') {
      setMessage('Mã nhân viên không được để trống');
    } else if (employeeCodes.includes(inputValue.trim())) {
      setMessage('Mã nhân viên đã tồn tại trong hệ thống');
    } else {
      setEmployeeCodes([...employeeCodes, inputValue.trim()]);
      setMessageSuccess('Thêm mã nhân viên thành công');
      setInputValue('');
    }
  };

  return (
    <div>
      <h4>Bài 1</h4>
      <form onSubmit={handleSubmit}>
        <label>Mã nhân viên:&nbsp; </label>
        <input type="text" value={inputValue} onChange={handleChange} /><br />
        <p>{message && <b class="text-danger">{message}</b>}</p>
        <p>{messageSuccess && <b class="text-success">{messageSuccess}</b>}</p>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
