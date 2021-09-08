export { default as Page } from '../page-object/page';
export { default as LoginPage } from '../page-object/loginPage';
export { default as InitialPage } from '../page-object/initialPage';



//Common Elements and common pages
export { Selector, t } from 'testcafe';
export { parseArguments } from '../utils/parseArguments';
export { default as CommonErrors } from '../common/commonErrors';
export { default as CommonActions } from '../common/commonAction';
export { default as CommonPage } from '../common/commonPage';

//Files
export { default } from '../config';
export { default as users } from '../users';
export { default as multilenguaje } from '../multilenguaje';

//Utils
//need to be exported,the following: pagination,FilterCategoryDiscover, 
export { uniqueId, paste, replace, timeout, longTimeout, shorttimeout, getLabels, getDay } from '../utils/helperFunctions';