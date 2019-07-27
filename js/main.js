(function () {
    var burger      = document.querySelector('#btn_burger'),
        headerNav   = document.querySelector('#header__nav');
    
        

        burger.addEventListener('click', function() {
            burger.classList.toggle('burger-active');

            if ( document.querySelector('.btn_burger') ) {
            
                headerNav.classList.toggle('active');
                
            }
        });

        

        

}());