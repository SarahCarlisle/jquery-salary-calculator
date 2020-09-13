//creating table in java
function tableSetup() {
    const table = $(`
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
           <td><button>Delete</button></td>
        </tr>
        <tr>
           <td>Maurice</td>
           <td>Moss</td>
           <td>8724</td>
           <td>Support Team</td>
           <td>$58,000</td>
           <td><button>Delete</button></td>
        </tr>
        <tr>
           <td>Roy</td>
           <td>Smith</td>
           <td>9623</td>
           <td>Quality Assurance</td>
           <td>$48,000</td>
           <td><button>Delete</button></td>
        </tr>
    </tbody>
</table>
`);
    $('body').append(table);
}


$(document).ready(tableSetup);