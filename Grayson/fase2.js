function fase3(){
    window.location.replace("file:///C:/Users/Natalia/Desktop/Jogo%20textual/Grayson/fase3.html");
    }



    function fase22()
    {
        var resposta = prompt ("Digite sua resposta!");
        while(true)
        {
        
            if (resposta == "Piltover" || resposta == "piltover")
            {
                alert("Parabéns! \n Clique em Avançar!");
                window.location.href ="file:///C:/Users/Natalia/Desktop/Jogo%20textual/Vi/fase2.html";
                break;
            }else
            {
                alert("Resposta incorreta! \n Leia com bastante atenção.");
                resposta = prompt ("Digite sua resposta");
            }
        }  
    }