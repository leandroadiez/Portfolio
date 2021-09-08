import {t, CommonErrors, replace} from './commonExport'

export default class CommonActions{
    constructor() {
        this.commonErrorsMessages = new CommonErrors();
    }

    async commonClick(element, nameElement='<name>', visible=true) {     
        await this.checkElementExist(element, nameElement, visible);
        await t.click(element);
    }

    async checkElementExist(element, nameElement='<name>', visible=true) {
        await t 
            .expect(element.exists).ok(this.commonErrorsMessages.elementExistsMessage.replace('<elementName>', nameElement));
        
        if (visible) {
            await t
                .expect(element.visible).ok(this.commonErrorsMessages.elementNotVisibleMessage.replace('<elementName>', nameElement));
        }            
    }

    async elementExist(element){
        return await element.exists;
    }

    async checkElementNotVisible(element, nameElement='<name>') {
        await t 
            .expect(element.visible).notOk(this.commonErrorsMessages.elementExistsMessage.replace('<elementName>', nameElement));  
    }

    async checkTitle(element, nameElement='<name>') {
        await t 
            .expect(await element.innerText).eql(nameElement, this.commonErrorsMessages.tittle.replace("<elementName>",nameElement))
    }

    async checkInnerText(element, nameElement='<name>') {
        this.checkElementExist(element,nameElement);
        await t 
            .expect(await element.innerText).eql(nameElement, this.commonErrorsMessages.innerText.replace("<elementName>",nameElement))
    }

    async checkNotEmpty(element, nameElement='<name>', value) {
        this.checkElementExist(element,nameElement);
        await t 
            .expect(await element.innerText).notEql(value, this.commonErrorsMessages.innerText.replace("<elementName>",nameElement))
    }

    async clearInput(element){
        await t
            .click(element)
            .pressKey('ctrl+a delete');
    }

    async typeTextCommon(text,element,nameElement, visible=true){
        await this.checkElementExist(element, nameElement, visible);
        await this.clearInput(element);
        if(text != ''){
            await t.typeText(element, text, replace);
        }
    }

    async checkAttribute(element, text, attribute){
        await t 
            .expect(await element.getAttribute(attribute)).eql(text, this.commonErrorsMessages.attribute.replace("<elementName>",text))
    }

    async checkWithText(element, nameElement='<name>') {
        await t 
            .expect(await element.withText(nameElement).exists).ok(this.commonErrorsMessages.exiselementExistsMessagets.replace("<elementName>",nameElement))
    }

    async checkEql(value1, value2) {
        await t
            .expect(value1).eql(value2, this.commonErrorsMessages.notEqlMessage.replace("<elementName>",value1 + ' is diferent to '+ value2))
    }

    async checkContaintsText(element, value1) {
        await t
            .expect(await element.innerText).contains(value1, this.commonErrorsMessages.exiselementExistsMessagets.replace("<elementName>",value1))
    }

} 