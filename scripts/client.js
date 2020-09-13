//creating table in java
function tables() {
    const table = $(`
<input id="fnm" placeholder="First Name" .>
<input id="lnm" placeholder="Last Name" .>
<input id="iD" placeholder="ID" .>
<input id="title" placeholder="Title" .>
<input id="annSal" placeholder="Aunnual Salary" .>
<button id="addInfo2Table">Submit</button>

<h2>Employees</h2>
    <table id="salary-Table">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th> </th>
        </tr>
    </thead>
    <tbody>
        <tr>
           <td>Jen</td>
           <td>Barber</td>
           <td>4521</td>
           <td>Team Lead</td>
           <td>$80,000</td>
           <td><button class="deleteEmployee">Delete</button></td>
        </tr>
        <tr>
           <td>Maurice</td>
           <td>Moss</td>
           <td>8724</td>
           <td>Support Team</td>
           <td>$58,000</td>
           <td><button class="deleteEmployee">Delete</button></td>
        </tr>
        <tr>
           <td>Roy</td>
           <td>Smith</td>
           <td>9623</td>
           <td>Quality Assurance</td>
           <td>$48,000</td>
           <td><button class="deleteEmployee">Delete</button></td>
        </tr>
    </tbody>
</table>
`);
    //appending table to DOM and synching button "addinfor2table" to DOM
    $('body').append(table);
    $('#addInfo2Table').on('click', employeeAdded);
}
// running event to add submitted fields to DOM
function employeeAdded(event) {
    const firstName = $('#fnm').val();
    const lastName = $('#lnm').val();
    const iD = $('#iD').val();
    const title = $('#title').val();
    const annualSalary = $('#annSal').val();
    console.log(firstName, lastName, "employee added");

    // making a string
    const emplElement = $(`
    <tr> 
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${iD}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button class="deleteEmployee">Delete</button></td>
    </tr>
    `);

    $('#salary-Table tbody').append(emplElement);
    $('.deleteEmployee').on('click', deleteEmp);
}

function deleteEmp(event){
    console.log('in deleteEmp');
    let removed = $(event.target);
    let targetRow = removed.closest('tr');
    targetRow.remove();
}

$(document).ready(tables);
