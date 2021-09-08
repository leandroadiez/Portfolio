import { watchFile } from 'fs';
import { t, Selector, CommonActions } from '../common/commonExport';

export default class LoginPage {
    constructor() {
        this.commonActions = new CommonActions();
        this.inicio = Selector('a').withText('INICIO')
        this.miPerfil = Selector('a').withText('MI PERFIL')
        this.miEquipo = Selector('a').withText('MI EQUIPO')
        this.mensajeria = Selector('a').withText('MENSAJERIA')
        this.ligas = Selector('a').withText('LIGAS')
        this.clubes = Selector('a').withText('CLUBES')
        this.username = Selector('[class="d-none d-md-inline"]')
        this.updateButton = Selector('[class="btn btn-secondary btn-sm rounded-pill col-md-4"]');
        this.selectLanguage = Selector('#language');
        this.setEnglish = Selector('#language option').withText('Inglés');
        this.setSpanish = Selector('#language').find('option').nth(1);
        this.termsConditions = Selector('input').withAttribute('name', 'terms');
        this.buttonCloseModal = Selector('button').withAttribute('class', 'close');
    }

    async setLanguage(language='en'){
        
        await this.commonActions.commonClick(this.username, 'username span');
        if(await this.commonActions.elementExist(this.updateButton.withText('Actualizar'))){
            if(language == 'en'){
                await this.commonActions.commonClick(this.selectLanguage, "select languages");
                await t.pressKey('up');
                await t.pressKey('enter');
                await this.commonActions.commonClick(this.termsConditions, "terms and conditions checkbox");
                await this.commonActions.commonClick(this.updateButton.withText('Actualizar'));
            }
            else{
                await this.commonActions.commonClick(this.buttonCloseModal);
            }
        }
        else{
            if(language == 'es'){
                await this.commonActions.commonClick(this.selectLanguage, "select languages");
                await t.pressKey('down');
                await t.pressKey('enter');
                await this.commonActions.commonClick(this.termsConditions, "terms and conditions checkbox");
                await this.commonActions.commonClick(this.updateButton.withText('Update'), "update button");
            }
            else{
                await this.commonActions.commonClick(this.buttonCloseModal, "button to close modal");
            }
        }
    }

    async checkLanguage(){
        await this.commonActions.checkElementExist(this.inicio, "tab de INICIO");
        await this.commonActions.checkElementExist(this.miPerfil, "tab de MI PERFIL");
        await this.commonActions.checkElementExist(this.miEquipo, "tab de MI EQUIPO");
        await this.commonActions.checkElementExist(this.mensajeria, "tab de MENSAJERIA");
        await this.commonActions.checkElementExist(this.ligas, "tab de LIGAS");
        await this.commonActions.checkElementExist(this.clubes, "tab de CLUBES");
    }

    async checkLanguageAdministrator(){
        await this.commonActions.checkElementExist(this.inicio, "tab de INICIO");
        await this.commonActions.checkElementExist(this.mensajeria, "tab de MENSAJERIA");
        await this.commonActions.checkElementExist(this.ligas, "tab de LIGAS");
        await this.commonActions.checkElementExist(this.clubes, "tab de CLUBES");
    }
    
}