<div id="adminContent">

<div id="buttonToolbar">            
    <div id="addUser">
        <button id="addUserButton" onclick="openEditUserPopup('', 0, '', 3)" class = "lang" key="add_new_user">Add New User</button>   
    </div>
                    

    <input id="searchBar" type="search" class="light-table-filter" data-table="users-table" placeholder="Type to search">
</div>
             
           
            
        
<table id="userTableHead">
    <thead>
        <tr class ="stock_admin">
            <th class = "head_admin lang" key="username"> <a href="javascript:SortTable(0,'T');">Username</a></th>
            <th class = "head_admin lang" key="name"> <a href="javascript:SortTable(1,'N');">Name</a></th>
            <th class = "head_admin lang" key="debt"> <a href="javascript:SortTable(2,'T');">Debt</a></th>
            <th class = "head_admin lang" key="admin_question"> <a href="javascript:SortTable(3,'T');">Is Admin?</a></th>
                    
        </tr>
    </thead>
</table>
    
    
    
<div id="tableDiv">
    <table id="sortableTable" class="users-table table">    
        <tbody id="adminUserTableBody">           
            <tr class ="users_admin">
                <td class="user_username">Markus ForestMoe</td>
                <td class="user_name">Markus ForestMoe</td>
                <td class="user_debt">-9000</td>
                <td class="user_admin_owers">False</td>
            </tr>
            
        </tbody>      
    </table>
</div>


</div>


