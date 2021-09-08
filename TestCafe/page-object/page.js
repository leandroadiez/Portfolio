import { t, CommonActions, LoginPage, Selector, CommonPage, CovidPage } from '../common/commonExport';

export default class Page {
    constructor() {
        this.commonAction = new CommonActions();
        this.loginPage = new LoginPage();
        this.menu = new CommonPage();
        
        this.logo = Selector('[class="navbar-brand collapsed"]');
        this.breadcrumb = Selector('svg.svg-inline--fa.fa-bars.fa-w-14');
    }

    // async getMultilenguaje(lenguaje){
    //     const jsonMultilenguaje;
    //     if(lenguaje == 'español'){
    //         jsonMultilenguaje = multilenguaje[lenguaje];
    //     }
    // }

    async goto(url) {
        await t
            .navigateTo(url)
            .wait(3000);
    }

    async maximize() {
        await t
            .maximizeWindow();
    }

    async refreshPage(){
        await t.eval(() => location.reload(true));
    };

    async login(user, labels, visible=true){
        await this.loginPage.loginApp(user, labels['loginForm'], visible);
        await this.waitTime();
    }

    async loginMobile(user, labels, visible=true){
        await this.loginPage.loginMobile(user, labels['loginForm'], visible);
        await this.waitTime();
    }

    async checkMenu(labels){
        await this.menu.checkElementsMenu(labels['menu']);
    }

    async clickOnMenu(optionValue){
        await this.menu.clickOnOptionMenu(optionValue);
    }

    async waitTime(){
        await t.wait(5000);
    }

    async logOut(labels){
        //TODO: Pending add multilanguage
        await this.commonAction.commonClick(this.menu.userMenu,'User menu');
        await this.commonAction.commonClick(this.menu.logoutButton,'Logout button');
        await this.waitTime();
    }

    async logOutMobile(labels){
        //TODO: Pending add multilanguage
        await this.commonAction.commonClick(this.menu.userMenuMobile.nth(1),'User menu');
        await this.commonAction.commonClick(this.menu.logoutButtonMobile,'Logout button');
        await this.waitTime();
    }

    async selectLanguage(culture){
        let language = Selector('span');
        await this.waitTime();
        await this.commonAction.commonClick(language.withText(culture.toUpperCase()),'Language');
    }
}