function etapafinal(){
    window.location.replace("file:///C:/Users/Natalia/Desktop/Jogo%20textual/Final/fim.html");
    }




    function fase33()
    {
        var resposta = prompt ("Digite sua resposta!");
        while(true)
        {
        
            if (resposta == "Revo-z" || resposta == "revo-z")
            {
                alert("Parabéns! \n Clique em Avançar!");
                window.location.href ="file:///C:/Users/Natalia/Desktop/Jogo%20textual/Ekko/fase3.html";
                break;
            }else
            {
                alert("Resposta incorreta! \n Leia com bastante atenção.");
                resposta = prompt ("Digite sua resposta");
            }
        }  
    }