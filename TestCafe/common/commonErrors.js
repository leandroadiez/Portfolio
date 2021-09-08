

export default class CommonErrors {
    constructor() {
        this.errorExc();
    }
    async errorExc(){
        this.exiselementExistsMessagets = "<elementName> must has to exist";
        this.button = "<elementName> button must has to exist";
        this.tab = "<elementName> tab must has to exist";
        this.tittle= "<elementName> tittle must has to exist";
        this.checked = "<elementName> must be checked";
        this.checkedNo = "<elementName> must not be checked";
        this.page = "<elementName> page must has to exist";
        this.option = "<elementName> option must has to exist";
        this.notOption = "<elementName> option does not must has to exist";
        this.link = "<elementName> link must has to exist";
        this.appear = "<elementName> must be appear";
        this.coincideTittle = 'Title page has to coincide with tab selected ';
        this.elementExistsMessage = '<elementName> element is not displayed.';
        this.elementNotVisibleMessage = '<elementName> element is not visible.';
        this.innerText= "<elementName> text is not correct.";
        this.attribute= "<elementName> attribute is not correct.";
        this.notEqlMessage = "In the comparison <elementName>."
    }
}

