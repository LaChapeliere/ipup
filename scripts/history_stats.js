/**
 * @author      Emma Barme
 * @version     0.1
 */

var purchasesAndPayments = false; //False on first access of the function, true afterwards
    
/**
 * Fetch the purchases and payments of the user and populate the page
 */
function getHistory() {
    
    user.fetchPayments( function(answer) {
        var info = JSON.parse(answer),
            type = info.type,
            i = 0, //Loop index
            payments, //The list of payments made by the user
            paymentsHistory = []; //The list of payments made by the user, formated for populateHistory

        if (type === "error") {
            alert(payload.msg);
            return;
        }
        
        //If the list of payments was correctly retrieved
        payments = info.payload;
        for (; i < payments.length; i++) {
            paymentsHistory.push({subject: "Payment", timestamp: payments[i].timestamp, amount: payments[i].amount});
        }
        populateHistory(paymentsHistory);
    });
    
    user.fetchPurchases( function(answer) {
        var info = JSON.parse(answer),
            type = info.type,
            i = 0, //Loop index
            purchases, //The list of purchases made by the user
            purchasesHistory = []; //The list of purchases made by the user, formated for populateHistory

        if (type === "error") {
            alert(payload.msg);
            return;
        }
        
        //If the list of purchases was correctly retrieved
        purchases = info.payload;
        for (; i < purchases.length; i++) {
            purchasesHistory.push({subject: purchases[i].namn, timestamp: purchases[i].timestamp, amount: -purchases[i].price});
        }
        populateHistory(purchasesHistory);
        
        populateFavorites();
    });
    
    
}

/**
 * Populate the favorite drinks
 */
function populateFavorites() {
    console.log("fav");
}

/**
 * Populate the history table
 * @param history The list of objects to append
 * Objects must have the attributes subject, amount and timestamp
 */
function populateHistory(history) {
    var i = 0, //Loop index
        html = '', //The html string to build the table rows
        date; //Date formatting object
    
    for (; i < history.length; i++) {
        //Build the html
        html += "<tr class ='historyRow'><div class='box'><a class='button' href=#popupStockEdit>" + 
                "<td class='subject_entry'>" + history[i].subject + "</td>" +
                "<td class='time_entry'>" + history[i].timestamp + "</td>" +
                "<td class='amount_entry'>" + history[i].amount + "</td>" +
                "<td class='balance_entry'>" + 0 + "</td>" +
                "</a></div></tr>";
    }

    //Feed the html to the table
    $('#historyTable tr').first().after(html);
    
    if (purchasesAndPayments == true) {
        sortHistory();
    }
    else {
        purchasesAndPayments = true;
    }
    
}

/**
 * Sort and add the balance in the history
 */
function sortHistory() {
    var balance = 0, //User balance according to history,
        rows = $('#historyTable tbody tr:not(:first-child)').get(); //Get the unsorted rows in the table
    
    //Sort rows by date
    $.each(rows, function() {
        var $this = $(this),
         timestamp = this.cells[1].textContent,
         date = timestampToDate(timestamp); //Get date from timestamp
        $this.data('_ts', date.getTime()); //Get "absolute" time
        this.cells[3].textContent = date.getTime();
    }).sort(function (a, b) { //Compare rows
        var A = $(a).children('td').eq(3).text().toUpperCase();
        var B = $(b).children('td').eq(3).text().toUpperCase();
        if(A < B) {
            return -1;
        }
        if(A > B) {
            return 1;
        }
        return 0;
    });
    
    $.each(rows, function(index, row) { //Reorder rows
        $('#historyTable').children('tbody').append(row);
    });
    
    //Add balance column
    $.each(rows, function(index, row) { //Reorder rows
        balance += parseInt(row.cells[2].textContent);
        row.cells[3].textContent = balance;
    });
}