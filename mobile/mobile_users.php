<div class="buttonToolbar">
    <div id="addUser">
        <button id="addUserButton" onclick="openEditUserPopup('', 0, '', 3)">Add New User</button>
    </div>

    <input id="searchBar" type="search" class="light-table-filter" data-table="stock-table" placeholder="Type to Search">

</div>

<table id="sortableTable" class="stock-table table">
    <thead>
        <tr class="stock_admin">
            <th class="head_admin"> <a href="javascript:SortTable(0,'T');">User Name</a></th>
            <th class="head_admin"> <a href="javascript:SortTable(1,'T');">Name</a></th>
            <th class="head_admin"> <a href="javascript:SortTable(2,'N');">Debt</a></th>
            <th class="head_admin lang" key="admin_question"> <a href="javascript:SortTable(3,'T');">Is Admin?</a></th>

        </tr>
    </thead>
    <tbody id="adminUserTableBody">
        <tr class="users_admin">
            <td class="user_username">DroidBoi1337</td>
            <td class="user_name">C3P0</td>
            <td class="user_debt">-12</td>
        </tr>
    </tbody>
</table>