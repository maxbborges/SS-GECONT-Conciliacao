$(document).ready(function () {
    hideDivs()
    loadChange()

    $('#btn_anexaArquivo').on('click', function () {
        anexarArquivo('oficioEntregaBalancetes', nProcesso)
    })

    $('#btn_anexaBalancete').on('click', function () {
        anexarArquivo('balancetes', nProcesso)
    })

    $('#btn_visualizarBalancete').on('click', function () {
        visualizarArquivo($("#txt_26_nomeBalancete").val())
    })

    $('#btn_enviaAssinatura').on('click', function () {
        visualizarArquivo($("#txt_26_nomeDocumento").val())
    })
});

function loadChange() {
    $('[name="rd_00_contabilizar"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_00 .collapse').collapse('show')
            $('[name="atxt_00_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_00 .collapse').collapse('hide')
            $('[name="atxt_00_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_01_ApGecont"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_01 .collapse').collapse('show')
            $('[name="atxt_01_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_01 .collapse').collapse('hide')
            $('[name="atxt_01_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_02_ApGepes"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_02 .collapse').collapse('show')
            $('[name="atxt_02_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_02 .collapse').collapse('hide')
            $('[name="atxt_02_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_03_apGefin"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_03 .collapse').collapse('show')
            $('[name="atxt_03_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_03 .collapse').collapse('hide')
            $('[name="atxt_03_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_04_ApGead"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_04 .collapse').collapse('show')
            $('[name="atxt_04_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_04 .collapse').collapse('hide')
            $('[name="atxt_04_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_05_apGead"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_05 .collapse').collapse('show')
            $('[name="atxt_05_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_05 .collapse').collapse('hide')
            $('[name="atxt_05_interacao"]').prop('readonly', true);
        }
    })

    $('[name="rd_06_apAssjur"]').on("change", function () {
        if ($(this).val() == 'Nao') {
            $('#div_06 .collapse').collapse('show')
            $('[name="atxt_06_interacao"]').prop('readonly', false).focus();
        } else {
            $('#div_06 .collapse').collapse('hide')
            $('[name="atxt_06_interacao"]').prop('readonly', true);
        }
    })
}

function hideDivs() {
    if (ATIVIDADE == ACTIVITY.ZERO || ATIVIDADE == ACTIVITY.INICIO) {
        hideBlockDivs(['div_000'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.GERENCIAS) {
        hideBlockDivs(['div_00'], [], ['div_000', 'div_01', 'div_02', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_00_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.GECONT) {
        hideBlockDivs(['div_01'], [], ['div_000', 'div_00', 'div_02', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_01_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.GEPES) {
        hideBlockDivs(['div_02'], [], ['div_000', 'div_00', 'div_01', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_02_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.GEFIN) {
        hideBlockDivs(['div_03'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_03_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.GEAD1) {
        hideBlockDivs(['div_04'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_05', 'div_06'])
        $('[name="atxt_04_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.GEAD2) {
        hideBlockDivs(['div_05'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_04', 'div_06'])
        $('[name="atxt_05_interacao"]').prop('readonly', 'true');
    }

    if (ATIVIDADE == ACTIVITY.ASSJUR) {
        hideBlockDivs(['div_06'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_04', 'div_05'])
        $('[name="atxt_06_interacao"]').prop('readonly', 'true');
    }

    //--------------------  NOVA IMPLEMENTAÇÃO SPRINT 25/2022

    if (ATIVIDADE == ACTIVITY.INTERACAO_GERENCIAS) {
        hideBlockDivs(['div_00'], [], ['div_000', 'div_01', 'div_02', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_00_justificativa"]').prop('readonly', 'true');
        $('#label_00').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_GECONT) {
        hideBlockDivs(['div_01'], [], ['div_000', 'div_00', 'div_02', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_01_justificativa"]').prop('readonly', 'true');
        $('#label_01').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_GEPES) {
        hideBlockDivs(['div_02'], [], ['div_000', 'div_00', 'div_01', 'div_03', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_02_justificativa"]').prop('readonly', 'true');
        $('#label_02').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_GEFIN) {
        hideBlockDivs(['div_03'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_04', 'div_05', 'div_06'])
        $('[name="atxt_03_GefinJustificativa"]').prop('readonly', 'true');
        $('#label_03').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_GEAD1) {
        hideBlockDivs(['div_04'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_05', 'div_06'])
        $('[name="atxt_04_GeadJustificativa"]').prop('readonly', 'true');
        $('#label_04').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_GEAD2) {
        hideBlockDivs(['div_05'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_04', 'div_06'])
        $('[name="atxt_05_GeadJustificativa"]').prop('readonly', 'true');
        $('#label_05').addClass('required')
    }

    if (ATIVIDADE == ACTIVITY.INTERACAO_ASSJUR) {
        hideBlockDivs(['div_06'], [], ['div_000', 'div_00', 'div_01', 'div_02', 'div_03', 'div_04', 'div_05',])
        $('[name="atxt_06_AssjurJustificativa"]').prop('readonly', 'true');
        $('#label_06').addClass('required')
    }

    //--------------------  NOVA IMPLEMENTAÇÃO SPRINT 25

    if (ATIVIDADE == ACTIVITY.VALIDAR_AREAS) {
        hideBlockDivs(['div_203'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.PESSOAL) {
        hideBlockDivs(['div_08'], [], ['div_09', 'div_10', 'div_11', 'div_12'])
    }

    if (ATIVIDADE == ACTIVITY.FINANCEIRO) {
        hideBlockDivs(['div_09'], [], ['div_08', 'div_10', 'div_11', 'div_12'])
    }

    if (ATIVIDADE == ACTIVITY.COMPRAS) {
        hideBlockDivs(['div_10'], [], ['div_08', 'div_09', 'div_11', 'div_12'])
    }

    if (ATIVIDADE == ACTIVITY.PATRIMONIO) {
        hideBlockDivs(['div_11'], [], ['div_08', 'div_09', 'div_10', 'div_12'])
    }

    if (ATIVIDADE == ACTIVITY.ESTOQUE) {
        hideBlockDivs(['div_12'], [], ['div_08', 'div_09', 'div_10', 'div_11'])
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_CONTABILIZACAO) {
        hideBlockDivs(['div_13'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.ATIVO) {
        hideBlockDivs(['div_16'], [], ['div_17', 'div_18', 'div_19', 'div_20', 'div_21'])
    }

    if (ATIVIDADE == ACTIVITY.PASSIVO) {
        hideBlockDivs(['div_17'], [], ['div_16', 'div_18', 'div_19', 'div_20', 'div_21'])
    }

    if (ATIVIDADE == ACTIVITY.RECEITA_ORCAMENTARIA) {
        hideBlockDivs(['div_18'], [], ['div_16', 'div_17', 'div_19', 'div_20', 'div_21'])
    }

    if (ATIVIDADE == ACTIVITY.DESPESA_ORCAMENTARIA) {
        hideBlockDivs(['div_19'], [], ['div_16', 'div_17', 'div_18', 'div_20', 'div_21'])
    }

    if (ATIVIDADE == ACTIVITY.RECEITA_EXTRA) {
        hideBlockDivs(['div_20'], [], ['div_16', 'div_17', 'div_18', 'div_19', 'div_21'])
    }

    if (ATIVIDADE == ACTIVITY.DESPESA_EXTRA) {
        hideBlockDivs(['div_21'], [], ['div_16', 'div_17', 'div_18', 'div_19', 'div_20'])
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_CONCILIACAO) {
        hideBlockDivs(['div_22'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.EFETIVAR_CONCILIACAO) {
        hideBlockDivs(['div_23'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.REPROCESSAMENTO) {
        hideBlockDivs(['div_24'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_SALDOS) {
        hideBlockDivs(['div_25'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.FECHAR_DESPACHO) {
        hideBlockDivs(['div_184'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.FECHAR_CALENDARIO) {
        hideBlockDivs(['div_186'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.GERAR_BALANCETE) {
        hideBlockDivs(['div_26'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_PAINEIS) {
        hideBlockDivs(['div_189'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.APROVAR_GERENCIA) {
        hideBlockDivs(['div_27'], [], [])
    }

    if (ATIVIDADE == ACTIVITY.APROVAR_DIRETORIA) {
        hideBlockDivs(['div_28'], [], [])
    }


}

function validaVertsign(elementoDiv) {
    if ($(elementoDiv).val() == '' || $(elementoDiv).val() == null) {
        msgEnviar("Necessário encaminhar para a Vertsign");
    }
}

var beforeSendValidate = function (numState, nextState) {
    if (ATIVIDADE == ACTIVITY.ZERO || ATIVIDADE == ACTIVITY.INICIO) {
        validaCamposRequired('div_000')
    }

    if (ATIVIDADE == ACTIVITY.GERENCIAS || ATIVIDADE == ACTIVITY.INTERACAO_GERENCIAS) {
        validaCamposRequired('div_00')
    }

    if (ATIVIDADE == ACTIVITY.GECONT || ATIVIDADE == ACTIVITY.INTERACAO_GECONT) {
        validaCamposRequired('div_01')
    }

    if (ATIVIDADE == ACTIVITY.GEPES || ATIVIDADE == ACTIVITY.INTERACAO_GEPES) {
        validaCamposRequired('div_02')
    }

    if (ATIVIDADE == ACTIVITY.GEFIN || ATIVIDADE == ACTIVITY.INTERACAO_GEFIN) {
        validaCamposRequired('div_03')
    }

    if (ATIVIDADE == ACTIVITY.GEAD1 || ATIVIDADE == ACTIVITY.INTERACAO_GEAD1) {
        validaCamposRequired('div_04')
    }

    if (ATIVIDADE == ACTIVITY.GEAD2 || ATIVIDADE == ACTIVITY.INTERACAO_GEAD2) {
        validaCamposRequired('div_05')
    }

    if (ATIVIDADE == ACTIVITY.ASSJUR || ATIVIDADE == ACTIVITY.INTERACAO_ASSJUR) {
        validaCamposRequired('div_06')
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_AREAS) {
        validaCamposRequired('div_203')
    }

    if (ATIVIDADE == ACTIVITY.PESSOAL) {
        validaCamposRequired('div_08')
    }

    if (ATIVIDADE == ACTIVITY.FINANCEIRO) {
        validaCamposRequired('div_09')
    }

    if (ATIVIDADE == ACTIVITY.COMPRAS) {
        validaCamposRequired('div_10')
    }

    if (ATIVIDADE == ACTIVITY.PATRIMONIO) {
        validaCamposRequired('div_11')
    }

    if (ATIVIDADE == ACTIVITY.ESTOQUE) {
        validaCamposRequired('div_12')
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_CONTABILIZACAO) {
        validaCamposRequired('div_13')
    }

    if (ATIVIDADE == ACTIVITY.ATIVO) {
        validaCamposRequired('div_16')
    }

    if (ATIVIDADE == ACTIVITY.PASSIVO) {
        validaCamposRequired('div_17')
    }

    if (ATIVIDADE == ACTIVITY.RECEITA_ORCAMENTARIA) {
        validaCamposRequired('div_18')
    }

    if (ATIVIDADE == ACTIVITY.DESPESA_ORCAMENTARIA) {
        validaCamposRequired('div_19')
    }

    if (ATIVIDADE == ACTIVITY.RECEITA_EXTRA) {
        validaCamposRequired('div_20')
    }

    if (ATIVIDADE == ACTIVITY.DESPESA_EXTRA) {
        validaCamposRequired('div_21')
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_CONCILIACAO) {
        validaCamposRequired('div_22')
    }

    if (ATIVIDADE == ACTIVITY.EFETIVAR_CONCILIACAO) {
        validaCamposRequired('div_23')
    }

    if (ATIVIDADE == ACTIVITY.REPROCESSAMENTO) {
        validaCamposRequired('div_24')
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_SALDOS) {
        validaCamposRequired('div_25')
    }

    if (ATIVIDADE == ACTIVITY.FECHAR_DESPACHO) {
        validaCamposRequired('div_184')
    }

    if (ATIVIDADE == ACTIVITY.FECHAR_CALENDARIO) {
        validaCamposRequired('div_186')
    }

    if (ATIVIDADE == ACTIVITY.GERAR_BALANCETE) {
        validaCamposRequired('div_26')
        validaArquivosRequired('oficioEntregaBalancetes', '#txt_26_nomeDocumento')
        validaArquivosRequired('balancetes', '#txt_26_nomeBalancete')
        // validaVertsign("#txt_26_nomeDocumento")
        // validaVertsign("#txt_26_nomeBalancete")
    }

    if (ATIVIDADE == ACTIVITY.VALIDAR_PAINEIS) {
        validaCamposRequired('div_189')
    }

    if (ATIVIDADE == ACTIVITY.APROVAR_GERENCIA) {
        validaCamposRequired('div_27')
    }

    if (ATIVIDADE == ACTIVITY.APROVAR_DIRETORIA) {
        validaCamposRequired('div_28')

        URLFluig = parent.WCMAPI.serverURL
        if (URLFluig == 'https://fluig.sestsenat.org.br') {
            // var nrPasta = $('#nrPasta').val()
            var nmArquivo = $('#txt_26_nomeDocumento').val()
            obterIdArquivo('#txt_26_idDocumento', nmArquivo)
            var idDocumento = $('#txt_26_idDocumento').val()
            var divValidacao = '#txt_26_validaEncaminhamento'
            listaDeAtividades = ['0']
            atividadeResponsaval = '0'
        } else {
            var nrPasta = '10839'
            var nmArquivo = $('#txt_26_nomeDocumento').val()
            obterIdArquivo('#txt_26_idDocumento', nmArquivo)
            var idDocumento = $('#txt_26_idDocumento').val()
            var divValidacao = '#txt_26_validaEncaminhamento'
            listaDeAtividades = ['181']
            atividadeResponsaval = '177'
        }

        customAssinatura(nrPasta, nmArquivo, idDocumento, nProcesso, listaDeAtividades, atividadeResponsaval, [], [], [], divValidacao)

        // validaVertsign("#txt_26_validaEncaminhamento")
    }
}