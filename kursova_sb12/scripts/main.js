function vuvid_tovariv(tovar){
    let all_tovars = document.getElementById('all_tovars')
    //all_tovars.innerHTML='';
    


            let ramka_block = document.createElement('div');
            ramka_block.classList.add('tovar2');

            let kartinka_block = document.createElement('div');
            kartinka_block.classList.add('tovar3');
            kartinka_block.setAttribute('src','img')

            let name_block = document.createElement('div');
            name_block.classList.add('tovar4');
            name_block.innerText = name_block;

            let nauvnist_block = document.createElement('div');
            nauvnist_block.classList.add('tovar5');
            nauvnist_block.setAttribute('align','center');
            nauvnist_block.innerHTML = '${tovar5}'

            let price_block = document.createElement('div');
            price_block.classList.add('tovar6');
            price_block.setAttribute('align','centre');
            price_block.innerHTML = '${tovar6}грн'

            let bay_block = document.createElement('div')
            bay_block.classList.add('tovar7')
            bay_block.setAttribute('align','centre')

            ramka_block.appendChild(tovar2);

            kartinka_block.appendChild(tovar3);

            name_block.appendChild(tovar4);

            nauvnist_block.appendChild(tovar5);

            price_block.appendChild(tovar6);

            bay_block.appendChild(tovar7)

            tovar2.appendChild(ramka_block);
            tovar2.appendChild(kartinka_block);
            tovar2.appendChild(name_block);
            tovar2.appendChild(nauvnist_block);
            tovar2.appendChild(price_block);
            tovar2.appendChild(bay_block);


            all_tovars.appendChild(tovar2)

            


}






all_tovars.innerHTML='';
masive.forEach(tovar =>{
    vuvid_tovariv(tovar)
})


function giga_vuvid(){
    let filter = JSON.parse(localStorage.getItem('filter'))

db.collection('taras').get().then(res=>{
    res.forEach(doc=>{
        let.tovar = doc.data();
        tovar.id = doc.id
        masive.push(tovar)


    })
    let masive = ();
    let masive_filtrat = ();
    }  
    
    if(){

    if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.name.toLowerCase().includes(filter.name)
    
})
}
if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.type == filter.type
    
})
}
if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.price <= filter.price
    
})
}
if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.material ==  filter.material
    
})

if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.dovzina == filter.dovzina
    
})

if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.hirina == filter.hirina
    
})

if(filter.name != ""){
    masive_filtrat = masive_filtrat.filter(tovar=>{
        return tovar.col == filter.col
    
})



    masive_filtrat.forEach(tovar =>{
        vuvid_tovariv(tovar)
    })
} 

}else{
    masive.forEach(tovar =>{
        vuvid_tovariv(tovar)
    })
}
}

}

})
}

giga_vuvid()



function saveFilter(){
    let filter = {
        name: document.getElementById('filter_name').value,
        type: document.getElementById('filter_type').value,
        minprice: Number(document.getElementById('slider-1').value),
        maxprice: Number(document.getElementById('slider-2').value)
    }


 localStorage.setItem("filter",JSON.stringify(filter))
}


function clearFilter(){
    localStorage.removeItem('filter');
    /*
    document.getElementById('filter_name').value = '';
    document.getElementById('filter_type').value= '';
    document.getElementById('slider-1').value= 0;
    document.getElementById('slider-2').value = 250;*/
    window.location.reload()
}
