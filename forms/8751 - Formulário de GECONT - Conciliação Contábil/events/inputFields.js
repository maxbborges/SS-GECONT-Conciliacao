function inputFields(form) {
    if (form && form.getValue("date2") && form.getValue("date2").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = form.getValue("date2").split('/');
        form.setValue("date2", split[2] + '-' + split[1] + '-' + split[0]);
    }
}