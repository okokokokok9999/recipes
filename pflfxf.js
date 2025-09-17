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
        for(i=5; i<6; i++){
            if (column_header[i].classList.contains("active_btn")){
                (column_header[i]).classList.remove("active_btn")                
            }
        }
        column_header[5].classList.add("active_btn");
        column_header[5].classList.add("up_down");
        product_table_data_base.sort((a, b) => b[5] - a[5]);
        cleanTable();
        createTable(product_table_data_base); 
    }
});