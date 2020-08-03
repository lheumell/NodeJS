$(document).ready(function () {

    function refresh(){
        $.ajax({
                url : 'https://jsonplaceholder.typicode.com/posts',
                success: function(results){
                    results.forEach(element => {
                        var objects = results;
                        var title = document.querySelector('.title');

                        var h5 = document.createElement('h5');
                        h5.innerHTML = element.title;
                        title.appendChild(h5);

                        var buttonModify = document.createElement("button");
                        buttonModify.innerHTML = "Modifier";
                        title.appendChild(buttonModify);
            
                        var buttonDelete = document.createElement("button");
                        buttonDelete.innerHTML = "Supprimer";
                        title.appendChild(buttonDelete);

                        
                        h5.addEventListener('click', function(){
                            $('#iheb').hide();
                            title.innerHTML = "";

                            var titleArt = document.createElement('h1');
                            titleArt.innerHTML = element.title;
                            title.appendChild(titleArt);

                            var bioArt = document.createElement('p');
                            bioArt.innerHTML = element.body;
                            title.appendChild(bioArt);
                        })
                        buttonModify.addEventListener("click", function(){
                            $('#iheb').hide();
                            $('.title').hide();

                            var title2 = document.querySelector('.title2');
                            var idM = element.id;
                            console.log(idM);

                            var titleCh = document.createElement('input');
                            titleCh.value = element.title;
                            title2.appendChild(titleCh);

                            var bioCh = document.createElement('textarea');
                            bioCh.innerHTML = element.body;
                            title2.appendChild(bioCh);

                            var buttonMo = document.createElement('button');
                            buttonMo.classList.add('btn');
                            buttonMo.classList.add('btn-danger');
                            title2.appendChild(buttonMo);


                            buttonMo.addEventListener('click', function(){
                                $('#iheb').show();
                                $('.title').show();
                                title2.innerHTML = '';
                                
                               objects.forEach(element => {
                                    if (idM == element.id){
                                        h5.innerHTML = titleCh.value;
                                    }
                                })
                            })

                            

                        })
                })
            }
        })
    }

    refresh();

})