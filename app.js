const wadan = document.querySelector('#wadan');
const search = document.querySelector('.search');
async function wadaka(){
    const url = 'https://restcountries.com/v3.1/all';
    const re = await fetch(url);
    const data = await re.json();
    data.forEach(element => {
       const {name,capital,flags,timezones,region,population} = element;
       const card = `
       <div class="col-sm-4 mt-4">
       <div class="card" style="width: 18rem;">
           <img src="${flags.png}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title name">${name.common}</h5>
               </div>
               <ul class="list-group list-group-flush">
                   <li class="list-group-item"><strong>caasimada: </strong>${capital}</li>
                   <li class="list-group-item"><strong>wakhtiga: </strong>${timezones}</li>
                   <li class="list-group-item"><strong>qaarada: </strong>${region}</li>
                   <li class="list-group-item"><strong>dadka: </strong>${population}</li>
               </ul> 
       </div>
   </div>
       `;
       wadan.innerHTML += card;
       search.addEventListener('keyup',searchall);
       function searchall(e){
           const textinput = e.target.value.toLowerCase();
           document.querySelectorAll('.name').forEach(
               function(items){
                   const item = items.firstChild.textContent;
                   if(item.toLowerCase().indexOf(textinput) != -1){
                       items.style.display = 'black';
                   }else{
                    items.parentElement.parentElement.parentElement.style.display = 'none';
                   }
               }  
           )
       }
    });
}
wadaka();