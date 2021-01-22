// const root = (window.location.hostname === "localhost") ? 
//             "http://localhost:4000/api" : 
//             "https://asdllab.herokuapp.com/api";
const root = "https://asdllab.herokuapp.com/api";

export const getDepartment = async () => {
    const res = await fetch(`${root}/department`);
    return await res.json();
}

export const getRole = async () => {
    const res = await fetch(`${root}/role`);
    return await res.json();
}

export const getEmployee = async () => {
    const res = await fetch(`${root}/employee`);
    return await res.json();
}

export const getEmployeeFilter = async (name, role) => {
    const res = await fetch(`${root}/employee/filter?roleid=${role}&firstname=${name}`);
    return await res.json();
}

export const getEmployeeDetails = async (id) => {
    const res = await fetch(`${root}/employee/id/${id}`);
    return await res.json();
}

export const deleteEmployee = async (id) => {
    const res = await fetch(`${root}/employee/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    return await res.json();
}

export const editEmployee = async (data) => {
    const res = await fetch(`${root}/employee/edit`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await res.json();
}

export const addEmployee = async (data) => {
    const res = await fetch(`${root}/employee/add`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await res.json();
}

export const addRole = async (data) => {
    const res = await fetch(`${root}/role/add`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await res.json();
}

export const addDepartment = async (data) => {
    const res = await fetch(`${root}/department/add`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    return await res.json();
}