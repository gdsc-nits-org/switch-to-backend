const body = document.querySelector("body");

const main = async ()=>{
  try {
    let response;
    response = await fetch("http://localhost:5000/health", {method:"GET"});
    const data = await response.json();
    const h3 = document.createElement("h3");
    h3.innerText = data.msg;
    body.appendChild(h3);

  }
  catch(e){
    return console.log(e);
  }

}

main();