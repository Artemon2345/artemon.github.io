function add_tovar(){
    let tovar = {
        name:       document.getElementById('tovar_name').value,
        opis:       document.getElementById('tovar_opis').value,
        price:      document.getElementById('tovar_price').value,
        material:   document.getElementById('tovar_material').value,
        col:       document.getElementById('tovar_col').value,
        dovzina:    document.getElementById('tovar_dovzina').value,
        hirina:   document.getElementById('tovar_hirina').value,
        type:  document.getElementById('tovar_type').value,
        virobnik:   document.getElementById('tovar_virobnik').value
        
    }
    db.collection('taras').doc().set(tovar).then(res=>{
        console.log('успішно додано')
        window.location.reload()
    })
  
}

function hide(id_bloka){
    let block = document.getElementById(id_bloka);
    block.style.display = 'none';
}
function show(id_bloka){
    let block = document.getElementById(id_bloka);
    block.style.display = 'block';
}

function drawTovar(object,nomer){
    let tbody = document.getElementById('tbody');
    tbody.innerHTML +=`
    <tr>
        <td>${nomer}</td>
        <td>${object.name}</td>
        <td>${object.opis}</td>
        <td>${object.price}</t>
        <td>${object.material}</td>
        <td>${object.col}</td>
        <td>${object.dovzina}</td>
        <td>${object.hirina}</td>
        <td>${object.type}</td>
        <td>${object.virobnik}</td>
        <td><button onclick="get_one_tovar_from_fb('${object.id}')">Редагувати Товари</button></td>
        <td><button onclick="delTowar('${object.id}')">x</button></td>
           
    </tr>
    `
}

function getTovar_form_fd(){
    tbody.innerHTML = ""
    let index = 1;
    db.collection('taras').get().then(res =>{
        res.forEach(doc => {
           let One_tovar = doc.data();
           One_tovar.id = doc.id;
           drawTovar(One_tovar,index)
           index++
        });
    })
}
getTovar_form_fd()


function delTowar(id_v_basidanih){
db.collection('taras').doc(id_v_basidanih).delete().then(res=>{
    getTovar_form_fd()
})
}


function get_one_tovar_from_fb(id_tovara){
    db.collection('taras').doc(id_tovara).get().then(res=> {
        let object_tovar = res.data();
        object_tovar.id = res.id;
        console.log(object_tovar.id)
        document.getElementById('zmina').addEventListener('click',function(){

            let tovar = {
                name:       document.getElementById('tovar_name_edit').value,
                opis:       document.getElementById('tovar_opis_edit').value,
                price:      document.getElementById('tovar_price_edit').value,
                material:   document.getElementById('tovar_material_edit').value,
                col:       document.getElementById('tovar_col_edit').value,
                dovzina:    document.getElementById('tovar_dovzina_edit').value,
                hirina:   document.getElementById('tovar_hirina_edit').value,
                type:  document.getElementById('tovar_type_edit').value,
                virobnik:   document.getElementById('tovar_virobnik_edit').value
                
            }
            save_change(object_tovar,id.object)
        })

document.getElementById('tovar_name_edit').value = object_tovar.name;
document.getElementById('tovar_opis_edit').value = object_tovar.opis;
document.getElementById('tovar_price_edit').value = object_tovar.price;
document.getElementById('tovar_material_edit').value = object_tovar.material;
document.getElementById('tovar_col_edit').value = object_tovar.col;
document.getElementById('tovar_dovzina_edit').value = object_tovar.dovzina;
document.getElementById('tovar_hirina_edit').value = object_tovar.hirina;
document.getElementById('tovar_type_edit').value = object_tovar.type;
document.getElementById('tovar_virobnik_edit').value = object_tovar.virobnik;


show('add_tovar_edit')
getTovar_form_fd()
    })
}



function save_change(argument){
    db.collection('taras').doc(argument).set(object).then(res=>{
        console.log('збережено')
        
    })
}

