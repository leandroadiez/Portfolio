import { t, Selector, CommonActions } from '../common/commonExport';

export default class LoginPage {
    constructor() {
        this.commonActions = new CommonActions();
        this.usernameInput = Selector('#user-name');
        this.passInput = Selector('#password');
        this.accessButton = Selector('#login-button');
    }


    async loginApp(user){
        await t
        .typeText(this.usernameInput, user.username)
        .typeText(this.passInput, user.password)
        .click(this.accessButton)
    }

    // async logOut(labelsLogout){

    // }
}