let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let categry=document.getElementById('categry');
let submit=document.getElementById('submit');
let mood = 'create'
let temp;

// console.log(title,price,taxes,ads,discount,total,count,categry,submit)
//get total
function getTotal(){
    if(price.value != ''){
        let result= (+price.value + +taxes.value + +ads.value )- +discount.value;
        total.innerHTML =result
        // console.log(result)
        total.style.background='#040'

    }else{
        total.innerHTML='';
        total.style.background='#a00d02'


    }
}



//creat product



//count
//updtae
//search

let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = []
}

submit.onclick = function(){
    let newpro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        categry:categry.value.toLowerCase(),
    }
    if(title.value !=''&&price.value !='' ){
        if(mood === 'create'){
            //count
            if(newpro.count> 1){
                for(let i =0; i <newpro.count; i++){
                datapro.push(newpro)
                    }
            }else{
                datapro.push(newpro)
            }
        }else{
            datapro[  temp ] = newpro;
            mood ='create'
            submit.innerHTML='create'
            count.style.display='block';
            // clearData();
        }
    }else{
        clearData();
    }
    
    // console.log(datapro);

    //save localstorage

    localStorage.setItem('product',     JSON.stringify(datapro));
    // console.log(datapro);

    showData();
    clearData()
}

// clear inputs
function clearData(){
    title.value= '';
    price.value= '';
    taxes.value= '';
    ads.value= '';
    discount.value= '';
    total.innerHTML= '';
    count.value= '';
    categry.value= '';

}

// read
function showData(){
    getTotal();
    let table = '';
    for(let i = 0; i<datapro.length; i++){
        table += `
        <tr>
        <td>${i+1}</td>
        <td>${datapro[i].title}</td>
        <td>  ${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].categry}</td>
        <td><button onclick="updateData(${i})"  id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete </button></td>

    </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;
    let btndelete=document.getElementById('deletAll');
    if(datapro.length > 0){
        btndelete.innerHTML=`
        <button onclick="deletAll()">delete all  (${datapro.length}) </button>
        `
    }else{
        btndelete.innerHTML=''
    }
}
showData();

// delete
function deleteData(i){
    datapro.splice(i,1);
    localStorage.product =JSON.stringify(datapro);
    showData();

}

function deletAll(){
    localStorage.clear;
    datapro.splice(0)
    showData();
}
//count
//update
function updateData(i){
    title.value =datapro[i].title;
    price.value =datapro[i].price;
    taxes.value =datapro[i].taxes;
    ads.value =datapro[i].ads;
    discount.value =datapro[i].discount;
    getTotal();
    categry.value =datapro[i].categry;
    count.style.display='none';
    submit.innerHTML ='update';
    mood ='update' ;
    temp= i;
    scroll({
        top:0,
        behavior:'smooth',
    })

}
//search 
let searchMood= 'title';
function getsearch(id){
    // console.log(id)
    let search=document.getElementById('search');

    if(id == 'searchTitle'){
        searchMood= 'title'
        search.placeholder='search by title';
    }else{
        searchMood= 'category'
        search.placeholder='search by category';
    }
    search.focus()
    search.value ='';
    showData();

    // console.log(searchMood)


}
function searchData(value){
    let table='';

    if(searchMood=='title'){
            for(let i= 0; i<datapro.length; i++)
                {
                    if(datapro[i].title.includes(value.toLowerCase())){
                        table += `
                        <tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td>  ${datapro[i].price}</td>
                        <td>${datapro[i].taxes}</td>
                        <td>${datapro[i].ads}</td>
                        <td>${datapro[i].discount}</td>
                        <td>${datapro[i].total}</td>
                        <td>${datapro[i].categry}</td>
                        <td><button onclick="updateData(${i})"  id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete </button></td>
                        </tr>
                        `
                        }
                }
        }
    else{
        for(let i= 0; i<datapro.length; i++)
        {
            if(datapro[i].categry.includes(value.toLowerCase())){
                table += `
                <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>  ${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].categry}</td>
                <td><button onclick="updateData(${i})"  id="update">update</button></td>
                <td><button onclick="deleteData(${i})" id="delete">delete </button></td>
                </tr>
                `
                }
        }
        }
        document.getElementById('tbody').innerHTML = table;


} 