function servicetask148(attempt, message) {
    log.info("#### >> ADITIVO TASK148 - INICIO")
    var nr_pasta = hAPI.getCardValue("txt_26_nrPasta");
    var idDocumento = hAPI.getCardValue("txt_26_idDocumento")
    var solicitacao = getValue("WKNumProces")
    var nmArquivo = hAPI.getCardValue("txt_26_nomeDocumento");
    anexaDocumentoAssinado(idDocumento,nr_pasta,solicitacao,nmArquivo+'_assinado.pdf')
    log.info("#### >> ADITIVO TASK148 - FIM")
}