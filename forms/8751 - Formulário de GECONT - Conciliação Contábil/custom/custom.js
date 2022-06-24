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
        $('#'+DIVS[i]+' button').hide();
        if (i==divVisivel){
            $('#'+DIVS[i]+' .collapse').collapse('show')
            continue;
        }
        $('#'+DIVS[i]+' textarea').prop('readonly','true');
        $('#'+DIVS[i]+' input:radio:not(:checked)').prop('disabled','true');
        // $('#'+DIVS[i]+' button').hide();

        if (i>divVisivel){
            $('#'+DIVS[i]).hide();
        }
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
    }
}
class ExibirMensagem {
    static msg(mensagem) {
        throw "<div class='alert alert-warning' role='alert'>" +
        "<strong>Atenção:</strong> " + mensagem +
        "</div><i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";
    }
}