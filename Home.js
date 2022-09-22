let empParrollList;

window.addEventListener('DOMContentLoaded',(event)=>
{
    empParrollList=getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector('.emp-count').textContent=empParrollList.length;
});

const getEmployeePayrollDataFromStorage=()=>
{
    return localStorage.getItem('EmployeePayrollList')?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml=()=>
{
    const headerHTml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml=`${headerHTml}`;
    // empParrollList=createEmployeePayrollJSON();
    for(const empParrollData of empParrollList)
     { 

        innerHtml=`${innerHtml}

    
    <tr>
    <td><img class = "profile" alt="" src=${empParrollData._profilePic}></td>
    <td>${empParrollData._name}</td>
    <td>${empParrollData._gender}</td>  
    
    <td>${getDepthtml(empParrollData._department)}</td>
    
    
    
    <td>${empParrollData._salary}</td>
    <td>${empParrollData._startDate}</td>
    <td>
        <button name="${empParrollData._id} onclick = "remove(this)">Delete</button>
        <button name="${empParrollData._id} onclick = "edit(this)">Edit</button>   
    </td>  
    </tr>
    `};
    document.querySelector('#display').innerHTML=innerHtml;
     
}

const getDepthtml=(depList)=>
{
    let depHtml='';
    for(const dept of depList)
    {
        depHtml=`${depHtml}<div class ='dept-label'>${dept}</div>`

    }
    return depHtml;
}

/*
const createEmployeePayrollJSON=()=>
{
    let empPayrollListLocal=
    [
    {
        _name: 'Milan',
        _gender: 'Male',
        _department: ['Engineering', ' ','Finance'],
        _salary: '50000',
        _startDate:'29 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile5.png'

    },
    {
        _name: 'Chaitra',
        _gender: 'female',
        _department: ['HR' ,'Finance'],
        _salary: '60000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'Sagar',
        _gender: 'Male',
        _department: ['HR' ,'Sales'],
        _salary: '40000',
        _startDate:'05 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile5.png'

    },

    {
        _name: 'Megha',
        _gender: 'female',
        _department: ['HR' ,'Quality'],
        _salary: '600000',
        _startDate:'20 Nov 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile4.png'

    },

    {
        _name: 'Rani',
        _gender: 'female',
        _department: ['Sales' ,'Finance'],
        _salary: '60000',
        _startDate:'15 Dec 2021',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile6.png'

    },

    {
        _name: 'Raj',
        _gender: 'Male',
        _department: ['HR' ,'Engineering'],
        _salary: '80000',
        _startDate:'30 Oct 2019',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'profile5.png'

    }

];
return empPayrollListLocal;

}

*/