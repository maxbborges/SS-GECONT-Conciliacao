$(document).ready(function () {
    hideDivs()
    // exibirDivsHidden()

    $('#btn_anexaArquivo').on('click',function(){
        anexarArquivo('oficioEntregaBalancetes',nProcesso,'#txt_26_nomeDocumento')
    })

    $('#btn_anexaBalancete').on('click',function(){
        anexarArquivo('balancetes',nProcesso,'#txt_26_nomeBalancete')
    })

    

    $('#btn_visualizarBalancete').on('click',function(){
        visualizarArquivo($("#txt_26_nomeBalancete").val())
    })

    $('#btn_enviaAssinatura').on('click',function(){
        var nrPasta=$('#nrPasta').val()
        var	nmArquivo=$('#txt_26_nomeDocumento').val()
        obterIdArquivo('#txt_26_idDocumento',nmArquivo)
        var idDocumento=$('#txt_26_idDocumento').val()
        var solicitacao=nProcesso
        var divValidacao='#txt_26_validaEncaminhamento'
        listaDeAtividades=['0']
        atividadeResponsaval='0'
        tabela=[]
        userIds=[]
        UserEmails=[]
        

        customAssinatura(nrPasta, nmArquivo, idDocumento, solicitacao, listaDeAtividades, atividadeResponsaval, tabela, userIds, UserEmails,divValidacao)
    })
});

function hideDivs(){
   $('#div_14').hide();
   $('#div_15').hide();

   if(FORM_MODE=='VIEW'){
       for (i=0;i<DIVS.length;i++){
           $('#'+DIVS[i]+' button').hide();
       }
   }

   if (ATIVIDADE==ACTIVITY.ZERO || ATIVIDADE==ACTIVITY.INICIO){
       hideBlockDivs(0)
   }

   if (ATIVIDADE==ACTIVITY.GERENCIAS){
       hideBlockDivs(1)
   }

   if (ATIVIDADE==ACTIVITY.GECONT){
       hideBlockDivs(2)
   }

   if (ATIVIDADE==ACTIVITY.GEPES){
       hideBlockDivs(3)
   }

   if (ATIVIDADE==ACTIVITY.GEFIN){
       hideBlockDivs(4)
   }

   if (ATIVIDADE==ACTIVITY.GEAD1){
       hideBlockDivs(5)
   }

   if (ATIVIDADE==ACTIVITY.GEAD2){
       hideBlockDivs(6)
   }

   if (ATIVIDADE==ACTIVITY.ASSJUR){
       hideBlockDivs(7)
   }

   if (ATIVIDADE==ACTIVITY.GERAR_CONTABILIZACAO){
       hideBlockDivs(8)
   }

   if (ATIVIDADE==ACTIVITY.PESSOAL){
       hideBlockDivs(9)
   }

   if (ATIVIDADE==ACTIVITY.FINANCEIRO){
       hideBlockDivs(10)
   }

   if (ATIVIDADE==ACTIVITY.COMPRAS){
       hideBlockDivs(11)
   }

   if (ATIVIDADE==ACTIVITY.PATRIMONIO){
       hideBlockDivs(12)
   }

   if (ATIVIDADE==ACTIVITY.ESTOQUE){
       hideBlockDivs(13)
   }

   if (ATIVIDADE==ACTIVITY.VALIDAR_CONTABILIZACAO){
       hideBlockDivs(14)
   }

   if (ATIVIDADE==ACTIVITY.ATIVO){
       hideBlockDivs(17)
   }

   if (ATIVIDADE==ACTIVITY.PASSIVO){
       hideBlockDivs(18)
   }

   if (ATIVIDADE==ACTIVITY.RECEITA_ORCAMENTARIA){
       hideBlockDivs(19)
   }

   if (ATIVIDADE==ACTIVITY.DESPESA_ORCAMENTARIA){
       hideBlockDivs(20)
   }

   if (ATIVIDADE==ACTIVITY.RECEITA_EXTRA){
       hideBlockDivs(21)
   }

   if (ATIVIDADE==ACTIVITY.DESPESA_EXTRA){
       hideBlockDivs(22)
   }

   if (ATIVIDADE==ACTIVITY.VALIDAR_CONCILIACAO){
       hideBlockDivs(23)
   }

   if (ATIVIDADE==ACTIVITY.EFETIVAR_CONCILIACAO){
       hideBlockDivs(24)
   }

   if (ATIVIDADE==ACTIVITY.REPROCESSAMENTO){
       hideBlockDivs(25)
   }

   if (ATIVIDADE==ACTIVITY.VALIDAR_SALDOS){
       hideBlockDivs(26)
   }

   if (ATIVIDADE==ACTIVITY.FECHAR_DESPACHO){
       hideBlockDivs(27)
   }

   if (ATIVIDADE==ACTIVITY.FECHAR_CALENDARIO){
       hideBlockDivs(28)
   }

   if (ATIVIDADE==ACTIVITY.GERAR_BALANCETE){
       hideBlockDivs(29)
   }

   if (ATIVIDADE==ACTIVITY.VALIDAR_PAINEIS){
       hideBlockDivs(30)
   }

   if (ATIVIDADE==ACTIVITY.APROVAR_GERENCIA){
       hideBlockDivs(31)
   }

   if (ATIVIDADE==ACTIVITY.APROVAR_DIRETORIA){
       hideBlockDivs(32)
   }

   if (ATIVIDADE!=203){
    // hideBlockDivs(32)
   }
}

function validaVertsign(elementoDiv){
    if ($(elementoDiv).val() == '' || $(elementoDiv).val() == null) {
        msgEnviar("Necessário encaminhar para a Vertsign");
    }
}

var beforeSendValidate = function (numState, nextState) {
    if (ATIVIDADE==ACTIVITY.ZERO || ATIVIDADE==ACTIVITY.INICIO){
        validaCamposRequired(DIVS[0])
    }

    if (ATIVIDADE==ACTIVITY.GERENCIAS){
        validaCamposRequired(DIVS[1])
    }

    if (ATIVIDADE==ACTIVITY.GECONT){
        validaCamposRequired(DIVS[2])
    }

    if (ATIVIDADE==ACTIVITY.GEPES){
        validaCamposRequired(DIVS[3])
    }

    if (ATIVIDADE==ACTIVITY.GEFIN){
        validaCamposRequired(DIVS[4])
    }

    if (ATIVIDADE==ACTIVITY.GEAD1){
        validaCamposRequired(DIVS[5])
    }

    if (ATIVIDADE==ACTIVITY.GEAD2){
        validaCamposRequired(DIVS[6])
    }

    if (ATIVIDADE==ACTIVITY.ASSJUR){
        validaCamposRequired(DIVS[7])
    }

    if (ATIVIDADE==ACTIVITY.GERAR_CONTABILIZACAO){
        validaCamposRequired(DIVS[8])
    }

    if (ATIVIDADE==ACTIVITY.PESSOAL){
        validaCamposRequired(DIVS[9])
    }

    if (ATIVIDADE==ACTIVITY.FINANCEIRO){
        validaCamposRequired(DIVS[10])
    }

    if (ATIVIDADE==ACTIVITY.COMPRAS){
        validaCamposRequired(DIVS[11])
    }

    if (ATIVIDADE==ACTIVITY.PATRIMONIO){
        validaCamposRequired(DIVS[12])
    }

    if (ATIVIDADE==ACTIVITY.ESTOQUE){
        validaCamposRequired(DIVS[13])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONTABILIZACAO){
        validaCamposRequired(DIVS[14])
    }

    if (ATIVIDADE==ACTIVITY.ATIVO){
        validaCamposRequired(DIVS[17])
    }

    if (ATIVIDADE==ACTIVITY.PASSIVO){
        validaCamposRequired(DIVS[18])
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_ORCAMENTARIA){
        validaCamposRequired(DIVS[19])
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_ORCAMENTARIA){
        validaCamposRequired(DIVS[20])
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_EXTRA){
        validaCamposRequired(DIVS[21])
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_EXTRA){
        validaCamposRequired(DIVS[22])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONCILIACAO){
        validaCamposRequired(DIVS[23])
    }

    if (ATIVIDADE==ACTIVITY.EFETIVAR_CONCILIACAO){
        validaCamposRequired(DIVS[24])
    }

    if (ATIVIDADE==ACTIVITY.REPROCESSAMENTO){
        validaCamposRequired(DIVS[25])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_SALDOS){
        validaCamposRequired(DIVS[26])
    }

    if (ATIVIDADE==ACTIVITY.FECHAR_DESPACHO){
        validaCamposRequired(DIVS[27])
    }

    if (ATIVIDADE==ACTIVITY.FECHAR_CALENDARIO){
        validaCamposRequired(DIVS[28])
    }

    if (ATIVIDADE==ACTIVITY.GERAR_BALANCETE){
        validaCamposRequired(DIVS[29])
        validaVertsign("#txt_26_nomeDocumento")
        validaVertsign("#txt_26_nomeBalancete")
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_PAINEIS){
        validaCamposRequired(DIVS[30])
    }

    if (ATIVIDADE==ACTIVITY.APROVAR_GERENCIA){
        validaCamposRequired(DIVS[31])
    }

    if (ATIVIDADE==ACTIVITY.APROVAR_DIRETORIA){
        validaCamposRequired(DIVS[32])
        validaVertsign("#txt_26_validaEncaminhamento")
    }
}