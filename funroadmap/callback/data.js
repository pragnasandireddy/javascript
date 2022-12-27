let employee=[{"id":1,"first_name":"Angel","last_name":"Bennell","email":"abennell0@ocn.ne.jp","gender":"Bigender"},
{"id":2,"first_name":"Kelila","last_name":"Brayshaw","email":"kbrayshaw1@pbs.org","gender":"Female"},
{"id":3,"first_name":"Perrine","last_name":"Kirman","email":"pkirman2@tinypic.com","gender":"Female"},
{"id":4,"first_name":"Maribelle","last_name":"Coveley","email":"mcoveley3@blogs.com","gender":"Female"}
]
 let create_employee=(a,callback)=>{
    setTimeout(()=>{
        employee.push(a)
        callback()
    },3000);

 }

let get_employee=()=>{
    setTimeout(()=>{
        let row=""
        employee.forEach((emp)=>{
            row =row+`<tr>
                    <td>${emp.id}</td>
                    <td>${emp.first_name}</td>
                    <td>${emp.last_name.toUpperCase()}</td>
                    <td>${emp.email}</td>
                    <td>${emp.gender.substr(0,1)}</td>
                    <td><img src="${emp.picture}"/></td>
                    </tr>`
        })
        document.getElementById("tbody_data").innerHTML=row
    },1000)
}
create_employee({id:5,first_name:"rahul",last_name:"gandhi",email:"rahgan@gamil.com",gender:"m"},get_employee); //this will join the above data
