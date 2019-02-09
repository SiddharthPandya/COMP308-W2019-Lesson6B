// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start(){
        console.log(`%c App Started...`, "font-size: 20px; color:blue");

        $(".btn-danger").click(function(event){
            if(!confirm("Are You Sure?")){
                event.preventDefault();
                window.location.assign("/contactList");
            }
        });

    }

    window.addEventListener("load", Start);

})();
