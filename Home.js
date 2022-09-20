window.addEventListener('DOMContentLoaded',(event)=>
{
    createInnerHtml();
});

const createInnerHtml=()=>
{
    const headerHTml="<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml=`${headerHTml}
    <tr>
    <td><img class = "profile" alt="" src="profile3.png"></td>
    <td>Narayan</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
    <div class = "dept-label">Finance</div></td>
    <td>30000</td>
    <td>1 Nov 2020</td>
    <td>
        <button onclick = "remove(this)">Delete</button>
        <button onclick = "edit(this)">Edit</button>   
    </td>  
    </tr>
    `;
    document.querySelector('#display').innerHTML=innerHtml;
}