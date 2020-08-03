$(document).ready(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts" ,
            success: function (resultat) {
                 
                    resultat.forEach(element => {

                        $(modifier).hide() ;
                       

                        var a = document.createElement('a');
                        a.innerHTML = element.title + '<br>' ;

                        var supp = document.createElement('supp');
                        supp.classList.add('btn') ;
                        supp.classList.add('btn-danger') ;
                        supp.innerHTML = "Supprimer" ;

                        var modif = document.createElement('modif');
                        modif.classList.add('btn') ;
                        modif.classList.add('btn-warning') ;
                        modif.innerHTML = "Modifier" ;
                       
                        a.addEventListener("click", function(){ 
                            title.innerHTML = element.title + '<br>' + element.body ;
                    
                        });  

                        supp.addEventListener("click", function(){
                            $(a).hide() ;
                            $(supp).hide();
                            $(modif).hide() ;
                        })

                        modif.addEventListener("click", function(){
                            title.innerHTML = element.title + '<br>' + element.body ;
                            createTitle.value = element.title ; 
                            createDesc.value = element.body ;
                            $(create).hide() ;  
                            $(modifier).show() ;
                        })

                        modifier.addEventListener("click", function(){
                            document.location.href="index.html" ;
                            title.innerHTML = createTitle.value + '<br>' + createDesc.value  ;
                            element.title = createTitle.value ;
                           
                        });

                        title.appendChild(supp);
                        title.appendChild(modif);
                        title.appendChild(a);
                    }); 

                    var create = document.getElementById('create');
                    var supp = document.getElementById('delete');

                    create.addEventListener("click", function(){

                        if(document.getElementById('createTitle').value == '' || document.getElementById('createDesc').value == ''){
                            alert("Champs vides");
                        }
                        else{
                            
                            
                            var a = document.createElement('a');
                
                            a.innerHTML = document.getElementById('createTitle').value + '<br>' ;

                             a.addEventListener("click", function(){
                                title.innerHTML = a  ;   
                            })

                            var supp = document.createElement('supp');
                            supp.classList.add('btn') ;
                            supp.classList.add('btn-danger') ;
                            supp.innerHTML = "Supprimer" ;

                            var modif = document.createElement('modif');
                            modif.classList.add('btn') ;
                            modif.classList.add('btn-warning') ;
                            modif.innerHTML = "Modifier" ;

                            supp.addEventListener("click", function(){
                                $(a).hide() ;
                                $(supp).hide();
                                $(modif).hide() ;
                            })    

                            title.appendChild(supp);
                            title.appendChild(modif);
                            title.appendChild(a);


                        }
                       
                    });
                   
                }
    });    

});
