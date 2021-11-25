function fase3(){
    window.location.replace("file:///C:/Users/Natalia/Desktop/Jogo%20textual/Ekko/fase3.html");
    }



    function fase22()
    {
        var resposta = prompt ("Digite sua resposta!");
        while(true)
        {
        
            if (resposta == "Sim" || resposta == "sim")
            {
                alert("Parabéns! \n Clique em Avançar!");
                window.location.href ="file:///C:/Users/Natalia/Desktop/Jogo%20textual/Ekko/fase2.html";
                break;
            }else
            {
                alert("Resposta incorreta! \n Leia com bastante atenção.");
                resposta = prompt ("Digite sua resposta");
            }
        }  
    }