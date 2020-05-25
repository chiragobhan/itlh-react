import React, { useState, useEffect } from "react";

function CrudHooks() {

    let [record, setRecord] = useState({ name: '', email: '', locality: '', age: '' });
    let [recordList, setRecordList] = useState([]);

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "age") {
            if (value < 0 || value > 120) {
                alert('The age should be between 0 - 120');
            }
        }
        setRecord({
            ...record,
            [name]: value
        });
    }

    function addRecord() {
        if (record.name !== '' && record.email !== '' && record.locality !== '' && record.age !== '') {
            if ((record.age > -1) && (record.age <= 120)) {
                record = { name: record.name, email: record.email, locality: record.locality, age: record.age }
                let currentRecordList = recordList;
                currentRecordList.push(record);
                setRecord({ name: '', email: '', locality: '', age: '' });
                setRecordList(currentRecordList);
            }
            else {
                alert('The age should be between 0 - 120');
            }
        }
        else {
            alert('Please Enter all Details');
        }
    }

    function editRecord(record) {
        let currentRecordList = recordList;
        for (let i = 0; i < currentRecordList.length; i++) {
            if (currentRecordList[i] === record) {
                currentRecordList.splice(i, 1);
                break;
            }
        }
        setRecord({ name: record.name, email: record.email, locality: record.locality, age: record.age });
    }

    function deleteRecord(record) {
        let currentRecordList = recordList;
        for (let i = 0; i < currentRecordList.length; i++) {
            if (currentRecordList[i] === record) {
                currentRecordList.splice(i, 1);
                break;
            }
        }
        setRecordList(currentRecordList);
        setRecord({ name: '' });
    }

    return (
        <div style={{ display: 'table', margin: '0 auto' }}>
            <h1>Covid-19 Survey Form by Hooks</h1>
            <h4>Please enter the details below:</h4>
            <form>
                <input type="text" name="name" placeholder="Name" value={record.name} onChange={handleChange} required /> &nbsp;&nbsp;
                <input type="email" name="email" placeholder="Email" value={record.email} onChange={handleChange} required /> &nbsp;&nbsp;
                <input type="text" name="locality" placeholder="Locality" value={record.locality} onChange={handleChange} required /> &nbsp;&nbsp;
                <input type="number" name="age" placeholder="Age" min="0" max="120" value={record.age} onChange={handleChange} required /> &nbsp;&nbsp;
                <button type="button" onClick={addRecord}>Submit</button> <br /><br />
            </form>
            <ul>
                <table>
                    <thead><tr><th>{recordList.length > 0 ? "Records:" : null}</th></tr></thead> <br />
                    {recordList.length > 0 ? <tbody>
                        < tr >
                            <th style={{ padding: '10px' }}>Sr. No.</th>
                            <th style={{ padding: '10px' }}>Name</th>
                            <th style={{ padding: '10px' }}>Email</th>
                            <th style={{ padding: '10px' }}>Locality</th>
                            <th style={{ padding: '10px' }}>Age</th>
                            <th style={{ padding: '10px' }} colSpan="2">Actions</th>
                        </tr>
                        {recordList.map((record, index) =>
                            <tr>
                                <td style={{ padding: '10px' }}> <li> {index + 1} </li> </td>
                                <td style={{ padding: '10px' }}>{record.name} </td>
                                <td style={{ padding: '10px' }}>{record.email} </td>
                                <td style={{ padding: '10px' }}>{record.locality} </td>
                                <td style={{ padding: '10px' }}>{record.age} </td>
                                <td style={{ padding: '10px' }}><button onClick={() => editRecord(record)}>Edit</button>&nbsp;&nbsp;</td>
                                <td><button onClick={() => deleteRecord(record)}>Delete</button></td>
                            </tr>
                        )
                        }
                    </tbody> : null}
                </table>
            </ul>
        </div>
    )
}

export default CrudHooks;