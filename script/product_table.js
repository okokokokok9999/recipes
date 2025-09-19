const table = document.querySelector("table");
let product_table_data_base = JSON.parse(window.localStorage.getItem("product_table_data_base"));

function createTable(product){
    for(i=0; i<product.length; i++){
        const tr = document.createElement("tr");
        tr.style.background = i%2==0 ? "#EDF4F6" : "white";
        tr.className = "clean_table";
        const td_name = document.createElement("td");
        td_name.textContent = product[i][0];
        td_name.style.background = i%2==0 ? "#FFE0B2" : "#FFEDD1";
        const td_proteins = document.createElement("td");
        td_proteins.textContent = product[i][1];
        const td_fats = document.createElement("td");
        td_fats.textContent = product[i][2];
        const td_carbohydrates = document.createElement("td");
        td_carbohydrates.textContent = product[i][3];
        const td_calories = document.createElement("td");
        td_calories.textContent = product[i][4];
        const td_GI = document.createElement("td");
        td_GI.textContent = product[i][5];

        tr.appendChild(td_name);
        tr.appendChild(td_proteins);
        tr.appendChild(td_fats);
        tr.appendChild(td_carbohydrates);
        tr.appendChild(td_calories);
        tr.appendChild(td_GI);

        table.appendChild(tr);
    }
};

createTable(product_table_data_base);



const column_header = document.querySelectorAll("th div");
const Table = document.querySelector("table");


function cleanTable() {
    const all_tr = document.querySelectorAll(".clean_table");
    all_tr.forEach(tr => {
        Table.removeChild(tr);
    });
}

column_header[1].addEventListener("click", function(){
    if(column_header[1].classList.contains("active_btn")){
        if (column_header[1].classList.contains("up_down")){
            column_header[1].classList.remove("up_down");
            column_header[1].classList.add("down_up");
            product_table_data_base.sort((a, b) => a[1] - b[1]);
            cleanTable();
            createTable(product_table_data_base);
        } else if (column_header[1].classList.contains("down_up")){
            column_header[1].classList.remove("down_up");
            column_header[1].classList.add("up_down");
            product_table_data_base.sort((a, b) => b[1] - a[1]);
            cleanTable();
            createTable(product_table_data_base);
        }
    } else {
        if (column_header[1].classList.contains("active_btn")){
            (column_header[1]).classList.remove("active_btn")                
        }
        if (column_header[2].classList.contains("active_btn")){
            (column_header[2]).classList.remove("active_btn")                
        }
        if (column_header[3].classList.contains("active_btn")){
            (column_header[3]).classList.remove("active_btn")                
        }
        if (column_header[4].classList.contains("active_btn")){
            (column_header[4]).classList.remove("active_btn")                
        }
        if (column_header[5].classList.contains("active_btn")){
            (column_header[5]).classList.remove("active_btn")                
        }
        column_header[1].classList.add("active_btn");
        column_header[1].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[1] - a[1]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});
column_header[2].addEventListener("click", function(){
    if(column_header[2].classList.contains("active_btn")){
        if (column_header[2].classList.contains("up_down")){
            column_header[2].classList.remove("up_down");
            column_header[2].classList.add("down_up");
            product_table_data_base.sort((a, b) => a[2] - b[2]);
            cleanTable();
            createTable(product_table_data_base);
        } else if (column_header[2].classList.contains("down_up")){
            column_header[2].classList.remove("down_up");
            column_header[2].classList.add("up_down");
            product_table_data_base.sort((a, b) => b[2] - a[2]);
            cleanTable();
            createTable(product_table_data_base);
        }
    } else {
        if (column_header[1].classList.contains("active_btn")){
            (column_header[1]).classList.remove("active_btn")                
        }
        if (column_header[2].classList.contains("active_btn")){
            (column_header[2]).classList.remove("active_btn")                
        }
        if (column_header[3].classList.contains("active_btn")){
            (column_header[3]).classList.remove("active_btn")                
        }
        if (column_header[4].classList.contains("active_btn")){
            (column_header[4]).classList.remove("active_btn")                
        }
        if (column_header[5].classList.contains("active_btn")){
            (column_header[5]).classList.remove("active_btn")                
        }
        column_header[2].classList.add("active_btn");
        column_header[2].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[2] - a[2]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});
column_header[3].addEventListener("click", function(){
    if(column_header[3].classList.contains("active_btn")){
        if (column_header[3].classList.contains("up_down")){
            column_header[3].classList.remove("up_down");
            column_header[3].classList.add("down_up");
            product_table_data_base.sort((a, b) => a[3] - b[3]);
            cleanTable();
            createTable(product_table_data_base);
        } else if (column_header[3].classList.contains("down_up")){
            column_header[3].classList.remove("down_up");
            column_header[3].classList.add("up_down");
            product_table_data_base.sort((a, b) => b[3] - a[3]);
            cleanTable();
            createTable(product_table_data_base);
        }
    } else {
        if (column_header[1].classList.contains("active_btn")){
            (column_header[1]).classList.remove("active_btn")                
        }
        if (column_header[2].classList.contains("active_btn")){
            (column_header[2]).classList.remove("active_btn")                
        }
        if (column_header[3].classList.contains("active_btn")){
            (column_header[3]).classList.remove("active_btn")                
        }
        if (column_header[4].classList.contains("active_btn")){
            (column_header[4]).classList.remove("active_btn")                
        }
        if (column_header[5].classList.contains("active_btn")){
            (column_header[5]).classList.remove("active_btn")                
        }
        column_header[3].classList.add("active_btn");
        column_header[3].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[3] - a[3]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});
column_header[4].addEventListener("click", function(){
    if(column_header[4].classList.contains("active_btn")){
        if (column_header[4].classList.contains("up_down")){
            column_header[4].classList.remove("up_down");
            column_header[4].classList.add("down_up");
            product_table_data_base.sort((a, b) => a[4] - b[4]);
            cleanTable();
            createTable(product_table_data_base);
        } else if (column_header[4].classList.contains("down_up")){
            column_header[4].classList.remove("down_up");
            column_header[4].classList.add("up_down");
            product_table_data_base.sort((a, b) => b[4] - a[4]);
            cleanTable();
            createTable(product_table_data_base);
        }
    } else {
        if (column_header[1].classList.contains("active_btn")){
            (column_header[1]).classList.remove("active_btn")                
        }
        if (column_header[2].classList.contains("active_btn")){
            (column_header[2]).classList.remove("active_btn")                
        }
        if (column_header[3].classList.contains("active_btn")){
            (column_header[3]).classList.remove("active_btn")                
        }
        if (column_header[4].classList.contains("active_btn")){
            (column_header[4]).classList.remove("active_btn")                
        }
        if (column_header[5].classList.contains("active_btn")){
            (column_header[5]).classList.remove("active_btn")                
        }
        column_header[4].classList.add("active_btn");
        column_header[4].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[4] - a[4]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});
column_header[5].addEventListener("click", function(){
    if(column_header[5].classList.contains("active_btn")){
        if (column_header[5].classList.contains("up_down")){
            column_header[5].classList.remove("up_down");
            column_header[5].classList.add("down_up");
            product_table_data_base.sort((a, b) => a[5] - b[5]);
            cleanTable();
            createTable(product_table_data_base);
        } else if (column_header[5].classList.contains("down_up")){
            column_header[5].classList.remove("down_up");
            column_header[5].classList.add("up_down");
            product_table_data_base.sort((a, b) => b[5] - a[5]);
            cleanTable();
            createTable(product_table_data_base);
        }
    } else {
        if (column_header[1].classList.contains("active_btn")){
            (column_header[1]).classList.remove("active_btn")                
        }
        if (column_header[2].classList.contains("active_btn")){
            (column_header[2]).classList.remove("active_btn")                
        }
        if (column_header[3].classList.contains("active_btn")){
            (column_header[3]).classList.remove("active_btn")                
        }
        if (column_header[4].classList.contains("active_btn")){
            (column_header[4]).classList.remove("active_btn")                
        }
        if (column_header[5].classList.contains("active_btn")){
            (column_header[5]).classList.remove("active_btn")                
        }
        column_header[5].classList.add("active_btn");
        column_header[5].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[5] - a[5]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});