document.addEventListener("DOMContentLoaded", function(){
    //Objetivo:


    function setLoading(isLoading){
        const button = document.querySelector(".btn-magic span")

        if(isLoading){
            buttonSpan.innerHTML = "Gerando Background ..."
        }else{
            buttonSpan.innerHTML = "Gerar Background Mágico"
        }
    }

    //passo 01-> No javascript, pegar o evento de  submit do formulário e envitar o carregamneto da página
    const form = this.documentElement.querySelector(".form-group");
    const input = document.getElementById('description');

    form.addEventListener("submit", async function(){
        event.preventDefault();

        //2. Obter o valor digitado pelomusuário no campo de texto
        const description = textarea.value.trim();

        if(!description){
            return;            const description = input.value.trim();
        }

        //3-> exibir um inodicador de carregamento enquanto a requisição está sendo processada.
        setLoading(true)

        //4->
        try{
            const response = await fetch("link do n8n", {
                method: "POST",
                headers:{'Content-Type':"application/jason" },
                body: JSON.stringify({description})
            });
        }catch(error){

        }finally{

        }
    })
});