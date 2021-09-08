import config, { Selector, parseArguments, Page, LoginPage, users, multilenguaje} from '../../../common/commonExport'

const args = parseArguments();
const page = new Page();
//const lenguaje = args.culture;
const loginPage = new LoginPage();
const user =  users[args.user];
//const jsonMultilenguaje = multilenguaje[lenguaje];


fixture `Log in`
    .page(config[args.env].baseUrl)

    .beforeEach(async t => {
        await page.maximize();
        await loginPage.loginApp(user);
    })

    test('Standard user', async t => {
        await t
            .expect(Selector('div').withText('Sauce Labs Backpack').visible).ok('products title is not visible')
    });