var companyArray = document.querySelectorAll('.company-tab');
//console.log('hello')
Array.from(companyArray).forEach(function(company) {
    company.addEventListener('click', function(){
        var currentShowEl = document.querySelector('.show');
        //console.log(currentShowEl);
        currentShowEl.classList.remove('show');

        contentEl = company.parentNode;

        if(contentEl.classList.contains('show') == true) {
            contentEl.classList.remove('show');
            console.log('it already has show')
        } else if (contentEl.classList.contains('show') == false) {
            contentEl.classList.add('show');
            console.log('it doesnt have show')
        }
    });
},true/false);