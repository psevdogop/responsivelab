<section id="pagetabs" class="boost">
    <div class="container">
        
        <!-- ============================ Page tabs =========================== -->
        
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <ul id="pagetabs-list" class="row page-nav">
                    <li class="col-xs-6 col-sm-3 col-md-3 col-lg-3"><a href="/company" class="animsition-link" title="Company"><i class="icon-basic-pencil-ruler"></i>Веб-студия</a>
                    </li>
                    <li class="col-xs-6 col-sm-3 col-md-3 col-lg-3"><a href="/values" class="animsition-link" title="Values"><i class="icon-basic-bolt"></i>Почему мы</a>
                    </li>
                    <li class="col-xs-6 col-sm-3 col-md-3 col-lg-3"><a href="/team" class="animsition-link" title="Team"><i class="icon-basic-flag2"></i>Наши лица</a>
                    </li>
                    <li class="col-xs-6 col-sm-3 col-md-3 col-lg-3"><a href="/careers" class="animsition-link" title="Careers"><i class="icon-basic-magnifier"></i>Вакансии <span class="badge jobs">{module_webappscount id="Вакансии"}</span></a>
                    </li>
                </ul>
            </div>
        </div>
        
        
        <script type="text/javascript" src="/js/Java_DynMenusSelectedCSS.js"></script>
        <script type="text/javascript">
            // ids need to be unique per page, use different ones if you are including multiple menus in the same page
            // id of the nav tag, used above
            var divTagId = "pagetabs";
            
            // desired id for 1st <ul> tag 
            var ulTagId = "pagetabs-list";
            
            // desired class for 1st <ul> tag 
            var ulTagClass = "row page-nav";
            
            if ((null !== ulTagId) && ("" !== ulTagId)) {
                document.getElementById(divTagId).getElementsByTagName("ul")[0].setAttribute("id", ulTagId);
            }
            if ((null !== ulTagClass) && ("" !== ulTagClass)) {
                document.getElementById(divTagId).getElementsByTagName("ul")[0].className = ulTagClass;
            }
            
            /*
            // this will set the selected state*/
            if ((null !== ulTagId) && ("" !== ulTagId)) {
                catSetSelectedCSSItem(ulTagId);
            }
        </script>
        <script>
            /* Activates the <a> to toggle the dropdown when clicked */
            /* $('li.dropdown>:first-child').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
            */
        </script>