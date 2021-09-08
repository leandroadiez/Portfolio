import { t, Selector, CommonActions } from './commonExport';

export default class CommonPage {
    constructor() {
        this.commonActions = new CommonActions();
        this.logo = Selector('[class="logo-img"]');
        this.titleMenu = Selector('[class="breadcrumb-item m-0"]');
        //Menu
        this.optiosMenu = Selector('[class="nav-item"]');
        this.navIcon = Selector('[class="breadcrumb"]');
        //Header
        this.languageMenu = Selector('[class="nav-item language-selector"]');
        this.userMenu = Selector('[class="nav-item dropdown user"]');
        this.userMenuOptions = Selector('[class="dropdown-menu dropdown-menu-right show"]');
        //Descargo Responsabilidad
        this.modalDisclaimer = Selector('[class="modal-dialog"]');
        
    }

    async closeDisclaimer(){
        if(await this.modalDisclaimer.visible){
            await this.commonActions.commonClick(this.modalDisclaimer.find('button'),'Close Disclaimer Modal');
        }
    }

    async checkDisclaimer(label, labelBtn){
        if(await this.modalDisclaimer.visible){
            await this.commonActions.checkElementExist(this.modalDisclaimer.find('h1').withText(label.Title), label.Title);
            await this.commonActions.checkElementExist(this.modalDisclaimer.find('h3').withText(label.Content), label.Content);
            await this.commonActions.checkElementExist(this.modalDisclaimer.find('h3').withText(label.ContactMail), label.ContactMail);
            await this.commonActions.checkElementExist(this.modalDisclaimer.find('button').withText(labelBtn), labelBtn.concat(' button'));
        }
    }

    async checkElements(labelsMenu, title){
        let imgpath = '/static/media/logo2.d4274c51.png';
        await this.commonActions.checkElementExist(this.logo, 'Motiv Salud');
        await this.commonActions.checkElementExist(this.logo,'Motiv img');
        await this.commonActions.checkAttribute(this.logo.find('img'), imgpath, 'src');
        await this.commonActions.checkWithText(this.titleMenu, title);
        await this.checkOptionsMenu(labels);
    }

    async checkOptionsMenu(labels, rol='user'){
        let optionsValue = null;
        if(rol == 'user'){
            optionsValue = [labels.Dashboard, labels.Infected, labels.MedicalHistory, labels.ActionPlans];
        }else{
            optionsValue = [labels.MedicalHistory, labels.ActionPlans];
        }
        for (let i = 0; i < await optionsValue.length; i++) {
            await this.commonActions.checkWithText(this.optionsMenu,optionsValue[i]);
        }
    }

    async clickOnOptionMenu(optionValue){
        await this.commonActions.commonClick(this.optionsMenu.withText(optionValue), optionValue);
    }
}