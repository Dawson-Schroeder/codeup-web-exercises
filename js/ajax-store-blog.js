// function() {
//     "use strict";
//     // TODO: Create an AJAX GET request for the file under data/inventory.json
//
//     // TODO: Take the data from inventory.json and append it to the products table
//     //       HINT: Your data should come back as a JSON object; use console.log() to inspect
//     //             its contents and fields
//     //       HINT: You will want to target #insertProducts for your new HTML elements
// })();


const getTool = async () => {
    try {
        let response = await fetch(`data/inventory.json`);
        let data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
}


(async()=>{
    let getT = await getTool();
    console.log(getT)
    let tableBody = document.querySelector('#tableProducts');
    let table = document.querySelector('#products');
    for (let i = 0; i < getT.length; i++) {
        let row = document.createElement('tr');
        let titleCell = document.createElement('td');
        let quantityCell = document.createElement('td');
        let priceCell = document.createElement('td');
        let categoriesCell = document.createElement('td')
        titleCell.textContent = getT[i].title;
        quantityCell.textContent = getT[i].quantity;
        priceCell.textContent = getT[i].price;
        categoriesCell.textContent = getT[i].categories;
        row.appendChild(titleCell);
        row.appendChild(quantityCell);
        row.appendChild(priceCell);
        row.appendChild(categoriesCell);
        table.appendChild(row);
    }

    let refreshButton = document.querySelector('#refresh-button');
    let newArray = [];

    refreshButton.addEventListener('click', async function(){
    newArray = await getTool();
    table.innerHTML = '';
        for (let i = 0; i < newArray.length; i++) {
            let row = document.createElement('tr');
            let titleCell = document.createElement('td');
            let quantityCell = document.createElement('td');
            let priceCell = document.createElement('td');
            let categoriesCell = document.createElement('td')
            titleCell.textContent = newArray[i].title;
            quantityCell.textContent = newArray[i].quantity;
            priceCell.textContent = newArray[i].price;
            categoriesCell.textContent = newArray[i].categories;
            row.appendChild(titleCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            row.appendChild(categoriesCell);
            table.appendChild(row);
        }
    });

})();




// in class :        (vanilla JS)
// (async function() {
//     const getinventory = async () => {
//         try {
//             let response = await fetch(`data/inventory.json`);
//             let data = await response.json();
//             return data;
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     let inventory = getinventory();
//     const buildTable = (inventory) => {
//         inventory.forEach(function () {
//             let row = document.createElement('tr');
//             row.innerHTML = `
//             <td>${tool.title}</td>
//             <td>${tool.quantity}</td>
//             <td>${formatToLocaleString(tool.price)}</td>
//             <td>${tool.categories.join(', ')}</td>
//         `;
//             document.querySelector('#insertProducts').appendChild(row);
//         });
//     }
//     buildTable(inventory);
//
//     document.querySelector('#refresh-button').addEventListener('click', async function () {
//         document.querySelector('#insertProducts').innerHTML = '';
//         let inventory = await getinventory();
//         buildTable(inventory);
//     });
// });
// IFFE:
//(async()=>{ //content })();
