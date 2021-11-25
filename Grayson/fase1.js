function fase2(){
    window.location.replace("file:///C:/Users/Natalia/Desktop/Jogo%20textual/Grayson/fase2.html");
    }



    function fase1()
    {
        var resposta = prompt ("Digite sua resposta!");
        while(true)
        {
        
            if (resposta == "Defensora" || resposta == "defensora")
            {
                alert("Parabéns! \n Clique em Avançar!");
                window.location.href ="file:///C:/Users/Natalia/Desktop/Jogo%20textual/Grayson/fase1.html";
                break;
            }else
            {
                alert("Resposta incorreta! \n Leia com bastante atenção.");
                resposta = prompt ("Digite sua resposta");
            }
        }  
    }