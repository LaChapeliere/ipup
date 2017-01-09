<div class="buttonToolbar">
    <button id="addBeverageButton" onclick="openEditBevPopup('', 0, 0, -1)">Add New Beverage</button>

    <input id="searchBar" type="search" class="light-table-filter" data-table="stock-table" placeholder="Type to Search">

</div>

<table id="sortableTable" class="stock-table table">
    <thead>
        <tr class="stock_admin">
            <th class="head_admin"> <a href="javascript:SortTable(0,'T');">Name</a></th>
            <th class="head_admin"> <a href="javascript:SortTable(1,'N');">Price</a></th>
            <th class="head_admin"> <a href="javascript:SortTable(2,'N');">Count</a></th>
        </tr>
    </thead>
    <tbody id="adminTableBody">
        <tr class="stock_admin">
            <td class="name_entry">Dragon Blood</td>
            <td class="price_entry">It's over 9000!</td>
            <td class="stock_entry">Such many, very wow..</td>
        </tr>
    </tbody>
</table>