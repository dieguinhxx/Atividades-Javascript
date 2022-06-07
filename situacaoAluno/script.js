function situacao(){
    nota = parseInt(document.form1.nota.value);
    nome = document.form1.nome.value;
    // Se a nota do aluno for menor ou igual a 40 ele esta reprovado
    if(nota<=40){
        situacaoaluno = nome+", voce foi Reprovado";
    // Se a nota do aluno for menor que 60 ele esta em recuperaçao
    }else if(nota<=60){
        situacaoaluno= nome +", voce esta em Recuperação";
    // Se a nota do aluno for maior que 60 ele esta aprovado    
    }else{
        situacaoaluno = nome+", voce foi Aprovado";
    }
    document.form1.situa.value = situacaoaluno

}