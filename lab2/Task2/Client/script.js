var myButton = document.getElementById("load-data-button");
  myButton.addEventListener("click", function() {
    // window.location.href = window.location.href.split("/")[0] + "data";
    // console.log("sssss");
    fetch("/info")
    .then((data)=>{return data.json()})
    .then((info)=>{
        console.log(info)
        
    // const tableHtml = `
    // <table >
    // <thead>
    //     <tr>
    //     <th>Name</th>
    //     <th>Mobile</th>
    //     <th>Email</th>
    //     <th>Address</th>
    //     </tr>
    // </thead>
    // <tbody>
    //     ${info.map(item => `
    //     <tr>
    //         <td>${item.Name}</td>
    //         <td>${item.Mobile}</td>
    //         <td>${item.Email}</td>
    //         <td>${item.Address}</td>
    //     </tr>
    //     `).join('')}
    // </tbody>
    // </table>
    // `;

    // const updatedHtml = html.replace('<!-- INSERT TABLE HERE -->', tableHtml);

    // console.log(data);
    // myTableBody
   
    for(let i=0;i<info.length;i++){
      let name= document.createTextNode(info[i].Name);
      let mobile= document.createTextNode(info[i].Mobile);
      let email= document.createTextNode(info[i].Email);
      let address= document.createTextNode(info[i].Address);
      let tdName= document.createElement("td");
      let tdMobile= document.createElement("td");
      let tdEmail= document.createElement("td");
      let tdAddress= document.createElement("td");
      let tr= document.createElement("tr");
      tdName.appendChild(name);
      tdMobile.appendChild(mobile);
      tdEmail.appendChild(email);
      tdAddress.appendChild(address);
      tr.appendChild(tdName)
      tr.appendChild(tdMobile)
      tr.appendChild(tdEmail)
      tr.appendChild(tdAddress)
      document.getElementById("myTableBody").appendChild(tr);
    }

    })
    .catch(()=>{})
  });