<header id="topBar">
     <?php 
            function addLanguage(){
              $currentLanguage="";
                 if(!empty($_GET)){
                    $currentLanguage = $_GET["lang"];
                    return "lang=".$currentLanguage; 
                }
                else {
                    return "lang="."eng"; 
                }
                
            }
            ;?>
		<dl>
            <dt>
                <button id="allBevButton" onclick="linkFormSubmit('index.php?filter=all<?php echo "&".addLanguage()?>');" class="lang" key="all_beverages">All Beverages</button>
            </dt>
            <dt>
                <button id="softDrinksButton" onclick="linkFormSubmit('index.php?filter=soft<?php echo "&".addLanguage()?>');" class="lang" key="soft_drinks">Soft Drinks</button>
            </dt>
            <dt>
                <button id="alcoDrinksButton" onclick="linkFormSubmit('index.php?filter=alco<?php echo "&".addLanguage()?>');" class="lang" key="alcoholic_drinks">Alcoholic Drinks</button>
            </dt>
        <dt><button id = "historyStatsButton" class="selected lang" key="history_stats">History/Stats</button></dt>
    </dl>
</header>