let btn = document.querySelectorAll('button');
let table = document.querySelector('table');

//todo ---------------- Ascending order ----------------
btn[0].addEventListener('click', function(){
    let sort = true;
    let sorted = false;
    let i = 0;
    while(sort){
        sort = false;
        let rows = table.rows;
        for(i = 1; i < rows.length-1; i++){
            sorted = false;
            let ele1 = rows[i].getElementsByTagName('td')[0];
            let ele2 = rows[i+1].getElementsByTagName('td')[0];

            if(ele1.innerText.toLowerCase() > ele2.innerText.toLowerCase()) {
                sorted = true;
                break;
            }
        }
        if(sorted){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sort = true;
        }
    }
});

//todo ---------------- Descending order ----------------
btn[1].addEventListener("click", function(){
    let sort = true;
    let sorted = false;
    let i = 0;
    while(sort){
        sort = false;
        let rows = table.rows;
        for(i = 1; i < rows.length-1; i++){
            sorted = false;
            let ele1 = rows[i].getElementsByTagName('td')[0];
            let ele2 = rows[i+1].getElementsByTagName('td')[0];

            if(ele1.innerText.toLowerCase() < ele2.innerText.toLowerCase()) {
                sorted = true;
                break;
            }
        }
        if(sorted){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            sort = true;
        }
    }
});

//todo ---------------- Refresh ----------------
btn[2].addEventListener("click", function(){
    location.reload();
});

