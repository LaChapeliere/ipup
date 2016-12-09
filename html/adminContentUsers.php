<div id="adminContent">

<div id="buttonToolbar">            
    <div id="addUser">
        <button id="addUserButton">Add New User</button>   
    </div>
                    

    <input id="searchBar" type="search" class="light-table-filter" data-table="users-table" placeholder="Type to search">
</div>
             
           
            
        
<table id="userTableHead">
    <thead>
        <tr class ="users_admin">
            <th class = "head_admin"> <a href="javascript:SortTable(0,'T');">Le Name</a></th>
            <th class = "head_admin"> <a href="javascript:SortTable(1,'N');">Debt</a></th>
            <th class = "head_admin"> <a href="javascript:SortTable(2,'T');">User ID</a></th>
            <th class = "head_admin"> <a href="javascript:SortTable(3,'T');">Is admin</a></th>
                    
        </tr>
    </thead>
</table>
    
    
    
<div id="tableDiv">
    <table id="sortableTable" class="user-table table">    
        <tbody id="adminUserTableBody">           
            <tr class ="users_admin">
                <td class="user_name">Markus ForestMoe</td>
                <td class="user_debt">-9000</td>
                <td class="user_ID">maFOMO</td>
                <td class="user_admin_owers">False</td>
            </tr>
            
        </tbody>      
    </table>
</div>


</div>


