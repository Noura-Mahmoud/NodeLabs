var myButton = document.getElementById("load-data-button");
  myButton.addEventListener("click", function() {
    fetch("/info")
    .then((data)=>{return data.json()})
    .then((info)=>{
        console.log(info)
   
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