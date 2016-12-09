<div id="adminContent">

<div id="buttonToolbar">            
    <div id="addBeverage">
        <button id="addBeverageButton" onclick="openEditPopup('', 0, 0, -1)">Add New Beverage</button>   
    </div>
    <input id="searchBar" type="search" class="light-table-filter" data-table="stock-table" placeholder="Type to Search">
</div>
             
           
            
        
<table id="stockTableHead">
    <thead>
        <tr class ="stock_admin">
            <th class = "head_admin"> <a href="javascript:SortTable(0,'T');">Name</a></th>
            <th class = "head_admin"> <a href="javascript:SortTable(1,'N');">Price</a></th>
            <th class = "head_admin"> <a href="javascript:SortTable(2,'N');">Count</a></th>
                    
        </tr>
    </thead>
</table>
    
    
    
<div id="tableDiv">
    <table id="sortableTable" class="stock-table table">    
        <tbody id="adminTableBody">           
            <tr class ="stock_admin">
                <td class="name_entry">Dragon Blood</td>
                <td class="price_entry">It's over 9000!</td>
                <td class="stock_entry">Such many, very wow..</td>
            </tr>
        </tbody>      
    </table>
</div>


</div>


