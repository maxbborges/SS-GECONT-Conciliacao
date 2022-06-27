$(document).ready(function () {
    init();
    hideDivs()
});

function init(){
    console.log("OK")
}

function hideDivs(){
    $('#div_14').hide();
    $('#div_15').hide();

    if(FORM_MODE=='VIEW'){
        for (i=0;i<DIVS.length;i++){
            $('#'+DIVS[i]+' button').hide();
        }
    }

    if (ATIVIDADE==ACTIVITY.ZERO || ATIVIDADE==ACTIVITY.INICIO){
        readonlyDivs(0)
    }

    if (ATIVIDADE==ACTIVITY.GERENCIAS){
        readonlyDivs(1)
    }

    if (ATIVIDADE==ACTIVITY.GECONT){
        readonlyDivs(2)
    }

    if (ATIVIDADE==ACTIVITY.GEPES){
        readonlyDivs(3)
    }

    if (ATIVIDADE==ACTIVITY.GEFIN){
        readonlyDivs(4)
    }

    if (ATIVIDADE==ACTIVITY.GEAD1){
        readonlyDivs(5)
    }

    if (ATIVIDADE==ACTIVITY.GEAD2){
        readonlyDivs(6)
    }

    if (ATIVIDADE==ACTIVITY.ASSJUR){
        readonlyDivs(7)
    }

    if (ATIVIDADE==ACTIVITY.GERAR_CONTABILIZACAO){
        readonlyDivs(8)
    }

    if (ATIVIDADE==ACTIVITY.PESSOAL){
        readonlyDivs(9)
    }

    if (ATIVIDADE==ACTIVITY.FINANCEIRO){
        readonlyDivs(10)
    }

    if (ATIVIDADE==ACTIVITY.COMPRAS){
        readonlyDivs(11)
    }

    if (ATIVIDADE==ACTIVITY.PATRIMONIO){
        readonlyDivs(12)
    }

    if (ATIVIDADE==ACTIVITY.ESTOQUE){
        readonlyDivs(13)
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONTABILIZACAO){
        readonlyDivs(14)
    }

    if (ATIVIDADE==ACTIVITY.ATIVO){
        readonlyDivs(17)
    }

    if (ATIVIDADE==ACTIVITY.PASSIVO){
        readonlyDivs(18)
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_ORCAMENTARIA){
        readonlyDivs(19)
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_ORCAMENTARIA){
        readonlyDivs(20)
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_EXTRA){
        readonlyDivs(21)
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_EXTRA){
        readonlyDivs(22)
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONCILIACAO){
        readonlyDivs(23)
    }

    if (ATIVIDADE==ACTIVITY.EFETIVAR_CONCILIACAO){
        readonlyDivs(24)
    }

    if (ATIVIDADE==ACTIVITY.REPROCESSAMENTO){
        readonlyDivs(25)
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_SALDOS){
        readonlyDivs(26)
    }

    if (ATIVIDADE==ACTIVITY.GERAR_BALANCETE){
        readonlyDivs(27)
    }
}

function readonlyDivs(divVisivel){
    for (i=0;i<DIVS.length;i++){
        
        if (i==divVisivel){
            $('#'+DIVS[i]+' .collapse').collapse('show')
            continue;
        }
        $('#'+DIVS[i]+' button').hide();
        $('#'+DIVS[i]+' textarea').prop('readonly','true');
        $('#'+DIVS[i]+' input:radio:not(:checked)').prop('disabled','true');
        // $('#'+DIVS[i]+' button').hide();

        if (i>divVisivel){
            $('#'+DIVS[i]).hide();
        }
    }
}

function validaVertsign(elementoDiv){
    if ($(elementoDiv).val() == '' || $(elementoDiv).val() == null) {
        ExibirMensagem.msg("Necessário encaminhar para a Vertsign");
    }


}

function validaCampos(elementoDiv) {
    var divSelecionada = $('#' + elementoDiv + ' label.required').next()
    for (i = 0; i < divSelecionada.length; i++) {
        elemento = divSelecionada[i]
        if ($(elemento).attr('class') == 'radio-options') {
            if ($(elemento).find('input:checked').val() == undefined) {
                ExibirMensagem.msg($(elemento).find('input').attr("name") + ' obrigatório!'); break;
            }
        } else {
            if ($(elemento).val() == '' || $(elemento).val() == null) {
                ExibirMensagem.msg($(elemento).attr("name") + ' obrigatório!'); break;
            }
        }
    }
}

var beforeSendValidate = function (numState, nextState) {
    if (ATIVIDADE==ACTIVITY.ZERO || ATIVIDADE==ACTIVITY.INICIO){
        validaCampos(DIVS[0])
    }

    if (ATIVIDADE==ACTIVITY.GERENCIAS){
        validaCampos(DIVS[1])
    }

    if (ATIVIDADE==ACTIVITY.GECONT){
        validaCampos(DIVS[2])
    }

    if (ATIVIDADE==ACTIVITY.GEPES){
        validaCampos(DIVS[3])
    }

    if (ATIVIDADE==ACTIVITY.GEFIN){
        validaCampos(DIVS[4])
    }

    if (ATIVIDADE==ACTIVITY.GEAD1){
        validaCampos(DIVS[5])
    }

    if (ATIVIDADE==ACTIVITY.GEAD2){
        validaCampos(DIVS[6])
    }

    if (ATIVIDADE==ACTIVITY.ASSJUR){
        validaCampos(DIVS[7])
    }

    if (ATIVIDADE==ACTIVITY.GERAR_CONTABILIZACAO){
        validaCampos(DIVS[8])
    }

    if (ATIVIDADE==ACTIVITY.PESSOAL){
        validaCampos(DIVS[9])
    }

    if (ATIVIDADE==ACTIVITY.FINANCEIRO){
        validaCampos(DIVS[10])
    }

    if (ATIVIDADE==ACTIVITY.COMPRAS){
        validaCampos(DIVS[11])
    }

    if (ATIVIDADE==ACTIVITY.PATRIMONIO){
        validaCampos(DIVS[12])
    }

    if (ATIVIDADE==ACTIVITY.ESTOQUE){
        validaCampos(DIVS[13])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONTABILIZACAO){
        validaCampos(DIVS[14])
    }

    if (ATIVIDADE==ACTIVITY.ATIVO){
        validaCampos(DIVS[17])
    }

    if (ATIVIDADE==ACTIVITY.PASSIVO){
        validaCampos(DIVS[18])
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_ORCAMENTARIA){
        validaCampos(DIVS[19])
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_ORCAMENTARIA){
        validaCampos(DIVS[20])
    }

    if (ATIVIDADE==ACTIVITY.RECEITA_EXTRA){
        validaCampos(DIVS[21])
    }

    if (ATIVIDADE==ACTIVITY.DESPESA_EXTRA){
        validaCampos(DIVS[22])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_CONCILIACAO){
        validaCampos(DIVS[23])
    }

    if (ATIVIDADE==ACTIVITY.EFETIVAR_CONCILIACAO){
        validaCampos(DIVS[24])
    }

    if (ATIVIDADE==ACTIVITY.REPROCESSAMENTO){
        validaCampos(DIVS[25])
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR_SALDOS){
        validaCampos(DIVS[26])
    }

    if (ATIVIDADE==ACTIVITY.GERAR_BALANCETE){
        validaCampos(DIVS[27])
        validaVertsign("#txt_26_validaEncaminhamento")
    }
}
class ExibirMensagem {
    static msg(mensagem) {
        throw "<div class='alert alert-warning' role='alert'>" +
        "<strong>Atenção:</strong> " + mensagem +
        "</div><i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";
    }
}

function assinatura(){
    var data = new Date().toLocaleDateString('pt-BR')
    var horario = new Date().toLocaleTimeString('pt-BR')
    var nr_pasta=$('#nrPasta').val()
    var	nm_Arquivo=$('#txt_26_nomeDocumento').val()
    var idDocumento=$('#txt_26_idDocumento').val()
    var solicitacao=$('#txt_26_nrSolicitacao').val()
    if (data=='' || horario=='' || nr_pasta=='' || nm_Arquivo=='' || idDocumento=='' || solicitacao==''){
        throw "CAMPOS EM BRANCO!"
    }
    
    var listaDeAtividades=['0']
    var tabela = []
    var userIds=[]
    var assinantes=[]
	var emails=[]
        
    userIds = buscaIdsPorAtividade(userIds,listaDeAtividades,solicitacao)
    emails = buscarEmailsPorId(userIds,emails);
	assinantes = buscarPorEmail(emails,assinantes,tabela)
    console.log(assinantes)
    if (assinantes.length<1){
        msgsToast("Erro ao carregar assinantes",'danger')
    }
	var dadosAssinantes={
        "assinantes":JSON.stringify(assinantes),
        "idReponsavelEnvio":'71b454c9cd0b11ebaccaf6013dce9bda',
        "nomeResponsavelEnvio":'Maxwell Borges Bezerra'
    }
    var parametrosAssinatura = enviaParaAssinatura(nr_pasta, dadosAssinantes, idDocumento, nm_Arquivo, solicitacao,data,horario)
	setTimeout(function(){ rodarDataset(parametrosAssinatura,solicitacao) }, 1000);
}
    
function msgsToast(msg, tipo) {
    FLUIGC.toast({
        title: 'Atenção: ',
        message: msg,
        type: tipo
    });
    if (tipo=='danger'){
        throw "Erro! "+msg
    }
}

function buscarEmailsPorId(userIds,emails){
	for(x=0;x<userIds.length;x++){
		constraints = [DatasetFactory.createConstraint("colleagueId", userIds[x], userIds[x], ConstraintType.MUST)];
	    var retornoColleague = (DatasetFactory.getDataset('colleague', ["mail"], constraints, null))['values'];
	    if (retornoColleague.length>0) {
			userMail = retornoColleague[0].mail
		} else {
			msgsToast('Assinante: '+userIds[x]+' não encontrado! Realizar o cadastro do mesmo.','danger')
		}
	    if(emails.indexOf(userMail)==-1){
	    	emails.push(userMail)
	    }
	}
	return emails
}

function buscarPorEmail(emails,assinantes,tabela){
	for (i=0;i<tabela.length;i++){
		emails.push($(tabela[i]).val())
	}
	
	for(i=0;i<emails.length;i++){
	    constraints = [DatasetFactory.createConstraint('email', emails[i], emails[i], ConstraintType.MUST)];
	    assinante = (DatasetFactory.getDataset('ds_busca_assinante', null, constraints, null))['values'];
	    if(assinante.length>0){
	    	assinantes.push({
	            nome: new String(assinante[0].nome),
	            email: new String(assinante[0].email),
	            cpf: new String(assinante[0].cpf),
	            tipo: new String(assinante[0].tipoAssinatura),
	            status: "Pendente"
	        })
	    }
    }
	return assinantes
}

function buscaIdsPorAtividade(usersIds,listaDeAtividades,solicitacao){
	var processInstanceId = DatasetFactory.createConstraint('processInstanceId', solicitacao, solicitacao, ConstraintType.MUST);
	for (var i = 0; i < listaDeAtividades.length; i++) {
		var constraints = new Array();
		var choosedSequence = DatasetFactory.createConstraint('choosedSequence', listaDeAtividades[i], listaDeAtividades[i], ConstraintType.MUST);
		
		constraints.push(processInstanceId)
        constraints.push(choosedSequence)
        constraints.push(DatasetFactory.createConstraint('processTaskPK.colleagueId', 'System:Auto', 'System:Auto', ConstraintType.MUST_NOT))
        var retornoProcessTask = (DatasetFactory.getDataset('processTask', ["colleagueId"], constraints, null)).values;
		
		if (retornoProcessTask.length>0){
            var posicao=retornoProcessTask.length-1
            usersIds.push(retornoProcessTask[posicao]['processTaskPK.colleagueId'])
			
		}
	}
	return usersIds
}

function enviaParaAssinatura(nr_pasta, dadosResponsavel, idDocumento, nm_Arquivo, numeroProcesso,data,horario) {
    var nmArquivo = {
        name: "nmArquivo",
        value: nm_Arquivo
    };
    var codArquivo = {
        name: "codArquivo",
        value: idDocumento
    };
    var vrArquivo = {
        name: "vrArquivo",
        value: '1000'
    };
    var codPasta = {
        name: "codPasta",
        value: nr_pasta
    };
    var codRemetente = {
        name: "codRemetente",
        value: dadosResponsavel.idReponsavelEnvio
    };
    var nmRemetente = {
        name: "nmRemetente",
        value: dadosResponsavel.nomeResponsavelEnvio

    };
    var formDescription = {
        name: "formDescription",
        value: nm_Arquivo
    };
    var status = {
        name: "status",
        value: "Enviando para assinatura"
    };
    var metodo = {
        name: "metodo",
        value: "create"
    };

    var dataEnvio = {
        name: "dataEnvio",
        value: data
    };
    var jsonSigners = {
        name: "jsonSigners",
        value: dadosResponsavel.assinantes
    };

    var horaEnvio = {
        name: "horaEnvio",
        value: horario
    };

    var numSolic = {
        name: "numSolic",
        value: numeroProcesso
    };

    var choosedState = {
        name: "choosedState",
        value: "45"
    };

    var constraints = [jsonSigners, nmArquivo, codArquivo, vrArquivo, codPasta, codRemetente, nmRemetente, formDescription, status, metodo, dataEnvio, horaEnvio, numSolic, choosedState];
    return constraints;
}

function rodarDataset(params,solicitacao) {
    constraints = []
    params.forEach(function (param) {
        constraints.push(DatasetFactory.createConstraint(param.name, param.value, param.value, ConstraintType.MUST));
    });

    if (constraints.length > 0) {
        var dsAux = (DatasetFactory.getDataset("ds_auxiliar_vertsign", null, constraints, null)).values;
        console.log(dsAux)
        if(dsAux == null || dsAux.length == 0){
    		throw "Falha de comunicação com a VertSign. "
    		+ "O TOTVS Fluig não conseguir realizar a comunicação, tente novamente mais tarde";
    	}
        if (dsAux.rowsCount > 0) {
            if (dsAux.getValue(0, "Result") === "OK") {
            	console.log('ok')
            }
        }
    }
    setTimeout(function(){ enviarArquivo(solicitacao) }, 1000);
}

function enviarArquivo(solicitacao) {
    try{
        DatasetFactory.getDataset("ds_upload_vertsign", null, null, null);
        var c1 = DatasetFactory.createConstraint('numSolic', solicitacao, solicitacao, ConstraintType.MUST);
		var form_aux = (DatasetFactory.getDataset('ds_form_aux_vertsign', null, [c1], null)).values;
        if (form_aux.length > 0) {
        	var posicao = form_aux.length-1
            var c2 = DatasetFactory.createConstraint('codArquivo', form_aux[posicao].codArquivo, form_aux[posicao].codArquivo, ConstraintType.MUST);
			var ds_upload = DatasetFactory.getDataset("ds_upload_vertsign_manual", null, [c2], null);   
        }
    } catch (e){
        throw ("Erro ao enviar documento para integração: " + (e));
    }
    setTimeout(function(){ verificaStatus(solicitacao) }, 1000);
}

function verificaStatus(solicitacao){
	var c1 = DatasetFactory.createConstraint('numSolic', solicitacao, solicitacao, ConstraintType.MUST);
	form_aux = (DatasetFactory.getDataset('ds_form_aux_vertsign', null, [c1], null)).values;
	if (form_aux.length > 0) {
		var posicao = form_aux.length-1
		console.log(">>> Status do Documento: " + form_aux[posicao].statusAssinatura);	
		
		if (form_aux[posicao].statusAssinatura == "Enviando para assinatura"){
			throw "Houve erros durante o envio do documento, verifique novamente.";
		}
        $("#txt_26_validaEncaminhamento").val('true')
        msgsToast("Arquivo enviado, verifique na vertsign. O processo pode ser encaminhado.","success")
	}
}