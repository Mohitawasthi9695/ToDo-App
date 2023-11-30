let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function ()
{   let item=document.createElement("li");
    item.innerText=inp.value;
    let del=document.createElement("button");
      del.innerText="Delete";
      del.classList.add("delete");
  

    item.appendChild(del);
    ul.appendChild(item);
    inp.value="";
});
//  let delbtn=document.querySelectorAll(".delete");
// for (delet of delbtn){
//     delet.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//         console.log(par);
//     });
// }
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        let par=event.target.parentElement;
        par.remove();
    }
})