fetch('https://free.currconv.com/api/v7/countries?&apiKey=37ef3f27b5a978c652ec').then(data => { return data.json() }).then(res => {
    function generateTable(table) {

        for (country in res.results) {
            for (let i = 0; i < currencyIds.length; i++) {

                if ((res.results[`${country}`].currencyId) == currencyIds[i]) {
                    let rows = table.insertRow();
                    let cell1 = rows.insertCell(0);
                    let cell2 = rows.insertCell(1);
                    let cell3 = rows.insertCell(2);
                    let cell4 = rows.insertCell(3);
                    let cell5 = rows.insertCell(4);
                    cell1.innerHTML = `<img src="https://www.countryflags.io/${country.toLowerCase()}/flat/32.png">`
                    cell2.innerHTML = res.results[`${country}`].name
                    cell3.innerHTML = res.results[`${country}`].currencyName
                    cell4.innerHTML = res.results[`${country}`].currencyId
                    cell5.innerHTML = rate[i]
                }
            }
        }
    }
    function headEle(table, data) {
        let thead = table.createTHead()
        let row = thead.insertRow()
        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }

    }
    let table = document.getElementById('chart-table')
    let data = ['Flag', 'Country', 'Currency', 'Currency Name', 'INR Per Unit']
    headEle(table, data)
    generateTable(table)
})