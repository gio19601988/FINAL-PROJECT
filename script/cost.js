"use strict";
let data = localStorage.getItem('products'),
    form = document.querySelector('form'),
    btnSubmit = document.querySelector('[type="submit"]'),
    btnCancel = document.querySelector('[type="button"]'),
    title = document.querySelector('#title'),
    qty = document.querySelector('#qty'),
    cp = document.querySelector('#cp'),
    sp = document.querySelector('#sp'),
    inputs = form.querySelectorAll('input'),
    tbody = document.querySelector('tbody'),
    tfoot = document.querySelector('tfoot'),
    btnClearData = document.querySelector('#btnClearData'),
    dataCount = document.querySelector('#dataCount'),
    search = document.querySelector('#search');

const saveProduct = () => {
    data = data ?? [];
    if(data.findIndex(product => product.title === title.value) < 0){

        data = [...data, { title: title.value, qty: qty.value, cp: cp.value, sp: sp.value }];

        localStorage.setItem('products', JSON.stringify(data));

        fetchProducts();

        resetForm();
    } 
    else {
        alert('Product already exists');
        title.focus();
    }
},
resetForm = () => {

    form.reset();

    btnSubmit.style.background = 'dodgerblue';
    btnSubmit.textContent = 'Save';

    btnSubmit.removeAttribute('data-id');

    title.focus();
},
fetchProducts = () => {
    tfoot.innerHTML = '';
    tbody.innerHTML = '';
    data = JSON.parse(localStorage.getItem('products'));

    dataCount.textContent = data ? data.length : 0;

    if(data != null && data.length > 0){

        data.map((item, i) => {

            tbody.innerHTML += `<tr>
                <td>${++i}</td>
                <td>${item.title.toUpperCase()}</td>
                <td>${item.qty}</td>
                <td>${parseFloat(item.cp).toFixed(2)}</td>
                <td>${parseFloat(item.sp).toFixed(2)}</td>
                <td style="width: 115px;">
                    <button type="button" id="btnEditProduct" onclick="previewUpdate(${--i});">Edit</button>
                    <button type="button" id="btnDeleteProduct" onclick="deleteProduct(${--i});">Delete</button>
                </td>                
            </tr>`;
        });
    }
    else{

        tfoot.innerHTML = `<tr>
                    <td colspan="7"><h1 style="background: #f1f1f1; color: #f00; text-align: center; padding: 40px;">No data to show</h1></td>
                </tr>
        `;
    }
},
previewUpdate = i => {

    title.value = data[i].title;
    qty.value = data[i].qty;
    cp.value = data[i].cp;
    sp.value = data[i].sp;

    btnSubmit.style.background = 'green';
    btnSubmit.textContent = 'Update';

    btnSubmit.setAttribute('data-id', i);    
},
updateProduct = id => {
    // updating the values of the data array 
    data[id].title = title.value;
    data[id].qty = qty.value;
    data[id].cp = cp.value;
    data[id].sp = sp.value;
    // update the localStorage
    localStorage.setItem('products', JSON.stringify(data));
    // fetch the data again
    fetchProducts();
},
deleteProduct = i => {
    if(confirm('Are you sure you want to delete this product?')){
        // remove the data from the data array
        data.splice(++i, 1);
        // update the localStorage
        localStorage.setItem('products', JSON.stringify(data));
        // fetch the data again
        fetchProducts();
    }
},
searchProducts = query => {

    tfoot.innerHTML = '';

    let found = data.map((item, i) => tbody.querySelectorAll('tr')[i].style.display = item.title.toLowerCase().includes(query.toLowerCase()) ? '' : 'none');
    // displaying no data to show if the query is not found by using the *FILTER method of the data array
    if(data.length === found.filter(tr => tr == 'none').length){
        // setting the contents of the tfoot element
        tfoot.innerHTML = `<tr>
                            <td colspan="7"><h1 style="background: #f1f1f1; color: #f00; text-align: center; padding: 40px;">No results found!</h1></td>
                        </tr>`;
    }
},
clearData = () => {
    if(data && confirm('Are you sure you want to clear all data?')){
        // clearing the localStorage
        localStorage.removeItem('products');
        // fetching the data again
        fetchProducts();
    }
};

fetchProducts();

form.addEventListener('submit', e => {
    // preventing the default behaviour of the form
    e.preventDefault();
    // saving the data to the localStorage
    !btnSubmit.getAttribute('data-id') ? saveProduct() : updateProduct(btnSubmit.getAttribute('data-id')); 
});


search.addEventListener('input', e => searchProducts(e.target.value));


btnCancel.addEventListener('click', e => resetForm());

// clearing the data from the localStorage
btnClearData.addEventListener('click', e => clearData());
