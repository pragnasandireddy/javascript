let employee=[{id:101,name:"rahul",sal:550000},
                {id:102,name:"sonia",sal:550000},
                {id:102,name:"modi",sal:530000}]
/*function displaydata(){
let tag_ref=document.getElementById("rajini");
tag_ref.innerHTML=" <tr><td>101</td></tr> goodmorning "
}*/

function displaydata(){
    let row=""
    for(emo of employee){
        row=row+`<tr>
                <td>${emo.id}</td>
                <td>${emo.name}</td>
                <td>${emo.sal}</td>
                </tr>`
    }
    document.getElementById("rajini").innerHTML=row
}

