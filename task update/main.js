var pNameInput = document.getElementById("pNameId");
var pPriceInput = document.getElementById("pPriceId");
var pcatInput = document.getElementById("pCatId");
var pDescInput = document.getElementById("pDescId");
var serachInput = document.getElementById("serachId");
var makhzan=[];
var newIndex=0;

if(localStorage.getItem("localStore")!=null)
{
makhzan= JSON.parse(localStorage.getItem("localStore"));
display();
}

function addProduct()
{
    var oneProduct={

        pName:pNameInput.value,
        pPrice:pPriceInput.value,
        pCat:pcatInput.value,
        pDesc:pDescInput.value,
    }

    makhzan.push(oneProduct);
    localStorage.setItem("localStore",JSON.stringify(makhzan));
    display();
    clear();

}

function display()
{
    var hasala = "";
    for(var i=0 ; i< makhzan.length; i++)
    {
        hasala +=`<tr>
                <td>${i}</td>
                <td>${makhzan[i].pName}</td>
                <td>${makhzan[i].pPrice}</td>
                <td>${makhzan[i].pCat}</td>
                <td>${makhzan[i].pDesc}</td>
                <td> <button class="btn btn-outline-warning" onclick="updateProduct(${i})" >Update</button>  </td>
                <td> <button onclick="deleteProduct(${i} )" class="btn btn-outline-danger">Delete</button>  </td>
                </tr>`
    }
    document.getElementById("tBody").innerHTML=hasala;

}

function clear()
{
    pNameInput.value='';
    pPriceInput.value='';
    pcatInput.value='';
    pDescInput.value='';
}


function deleteProduct(index)
{
    makhzan.splice(index,1);
    localStorage.setItem("localStore",JSON.stringify(makhzan));
    display();
}


function serachProduct(){

    var SearchWord = serachInput.value;
    var hasala="";
    for(var i=0 ; i<makhzan.length ; i++ )
    {
        if(makhzan[i].pName.toLowerCase().includes(SearchWord.toLowerCase()))
        {
            hasala +=`<tr>
            <td>${i}</td>
            <td>${makhzan[i].pName}</td>
            <td>${makhzan[i].pPrice}</td>
            <td>${makhzan[i].pCat}</td>
            <td>${makhzan[i].pDesc}</td>
            <td> <button class="btn btn-outline-warning" onclick="updateProduct(${i})" >Update</button>  </td>
            <td> <button onclick="deleteProduct(${i} )" class="btn btn-outline-danger">Delete</button>  </td>
            </tr>`
        }
    }

    document.getElementById("tBody").innerHTML=hasala;

}

function updateProduct(index)
{
    
    // document.getElementById("addButton").style.display="none";
    // document.getElementById("updateButton").style.display="block";
    newIndex=index;
    pNameInput.value = makhzan[index].pName;
    pPriceInput.value = makhzan[index].pPrice;
    pcatInput.value = makhzan[index].pCat;
    pDescInput.value = makhzan[index].pDesc;

    addButton.classList.replace("d-block","d-none");
    updateButton.classList.replace("d-none","d-block");

    // localStorage.setItem("updateIndex",JSON.stringify(index));
}

function afterUpdateButton()
{
    // var newIndex = JSON.parse(localStorage.setItem("updateIndex"));
    makhzan[newIndex].pName =  pNameInput.value;
    makhzan[newIndex].pPrice =  pPriceInput.value;
    makhzan[newIndex].pCat =  pcatInput.value ;
    makhzan[newIndex].pDesc =  pDescInput.value;
    localStorage.setItem("localStorage",JSON.stringify(makhzan));
    display();
    clear();
    updateButton.classList.replace("d-block","d-none");
    addButton.classList.replace("d-none","d-block");


}