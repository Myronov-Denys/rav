const { test, expect } = require('@playwright/test');
//import { HomePage } from './pages/homePage';
//import { TestVelue } from './pages/TestVelue';
//import { ProjectPassPage } from './pages/projectPasswordPage';
 const { HomePage } = require('./pages/homePage');
 const { ProjectPasswordPage } = require('./pages/projectPasswordPage');
const { ShowsPage } = require('./pages/showsPage');
 

 //const { TestValue, COMMON_TEST_DATA } = require('./pages/testValue');



test.beforeEach(async ({ page }, testInfo) => {
    
    console.log(`shows tests  ${testInfo.title}`);
    const projectPasswordPage = new ProjectPasswordPage(page)
    const homePage = new HomePage(page)

    //await page.goto(COMMON_TEST_DATA.devURL);

    // await testVelue.open_Dev_Url();
    // await projectPasswordPage.projectPasswordField.fill('123');
    // await projectPasswordPage.click_enter_project_password_button();
    // await homePage.homeTitle.waitFor();


    await projectPasswordPage.enterProjectPaswordOnDev();
    await homePage.homeTitle.waitFor();
    //const testVelue = new TestVelue(page);
    //await testVelue.open_Dev_Url();
  });




  test.describe('Header shows tests', () => {

      test('Open shows from header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        await homePage.clickShowsInHeader();
        await expect(showsPage.showsTitle).toBeVisible();
      });


      test('Open Shows dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Assert test: Shows drop down menu is hidden');
        await expect(homePage.showsDropDownMenuOnHeader).toBeHidden();
    
        console.log('Step 1: hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();
    
        console.log('Assert test 1: Shows drop down menu is displayed');
        await expect(homePage.showsDropDownMenuOnHeader).toBeVisible();
    
        console.log('Assert test 2: All shows links on drop down menu is displayed');
        await expect(homePage.showsLinksDropDownMenuOnHeader).toContainText(['All', 'Documentaries', 'Special Events', 'News', 'Opinion']);
      });



    
     test('Open "All" Shows from dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Step 1: Hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();

        console.log('Step 2: Hover to the "All" shows link on the "Shows" dropdowsn menu');
        await homePage.allshowsLinkOnDropDownMenuHeader.hover();

        console.log('Assert test 1: The "All" category is selected and highlighted');
        await expect(homePage.allshowsLinkOnDropDownMenuHeader).toHaveClass(/styles_active/);
    
        console.log('Step 3: Click on the "All" link on the "Shows" dropdowsn menu');
        await homePage.allshowsLinkOnDropDownMenuHeader.click();
    
        console.log('Assert test 2: The "Real America\'s Voice News Shows" title is displayed');
        await expect(showsPage.showsTitle).toBeVisible();

        console.log('Assert test 3: The "All" category is selected and highlighted');
        await expect(showsPage.allCategoty).toHaveClass(/styles_active/);
      });
    
      
      test('Open "Documentaries" shows from dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Step 1: Hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();

        console.log('Step 2: Hover to the "Documentaries" shows link on the "Shows" dropdowsn menu');
        await homePage.documentariesShowsLinkOnDropDownMenuHeader.hover();

        console.log('Assert test 1: The "Documentaries" category is selected and highlighted');
        await expect(homePage.documentariesShowsLinkOnDropDownMenuHeader).toHaveClass(/styles_active/);
    
        console.log('Step 3: Click on the "Documentaries" link oin the "Shows" dropdowsn menu');
        await homePage.documentariesShowsLinkOnDropDownMenuHeader.click();
    
        console.log('Assert test 2: The "Documentaries" shows title is displayed');
        await expect(showsPage.documentariesShowsTitle).toBeVisible();

        console.log('Assert test 3: The "Documentaries" category is selected and highlighted');
        await expect(showsPage.documentariesCategoty).toHaveClass(/styles_active/);
      
      });

      test('Open "Special Events" shows from dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Step 1: Hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();

        console.log('Step 2: Hover to the "Special Events" shows link on the "Shows" dropdowsn menu');
        await homePage.specialEventsvShowsLinkOnDropDownMenuHeader.hover();

        console.log('Assert test 1: The "Special Events" category is selected and highlighted');
        await expect(homePage.specialEventsvShowsLinkOnDropDownMenuHeader).toHaveClass(/styles_active/);

        console.log('Step 3: Click on the "Special Events" link on the "Shows" dropdowsn menu');
        await homePage.specialEventsvShowsLinkOnDropDownMenuHeader.click()
    
        console.log('Assert test 2: The "Special Events" shows title is displayed');
        await expect(showsPage.specialEventsShowsTitle).toBeVisible();

        console.log('Assert test 3: The "Special Events" category is selected and highlighted');
        await expect(showsPage.specialEventsCategoty).toHaveClass(/styles_active/);
      });

      test('Open "News" shows from dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Step 1: Hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();

        console.log('Step 2: Hover to the "News" shows link on the "Shows" dropdowsn menu');
        await homePage.newsShowsLinkOnDropDownMenuHeader.hover();

        console.log('Assert test 1: The "News" category is selected and highlighted');
        await expect(homePage.newsShowsLinkOnDropDownMenuHeader).toHaveClass(/styles_active/);

        console.log('Step 2: Click on the "News" link on the "Shows" dropdowsn menu');
        await homePage.newsShowsLinkOnDropDownMenuHeader.click()
    
        console.log('Assert test 1: The "News" shows title is displayed');
        await expect(showsPage.newsShowsTitle).toBeVisible();

        console.log('Assert test 2: The "News" category is selected and highlighted');
        await expect(showsPage.newsCategoty).toHaveClass(/styles_active/);
      });

      test('Open "Opinion" shows from dropdown list on header', async ({ page }) => {
        const homePage = new HomePage(page)
        const showsPage = new ShowsPage(page)
    
        console.log('Step 1: Hover to the Shows button on header');
        await homePage.showsHeaderButton.hover();

        console.log('Step 2: Hover to the "Opinion" shows link on the "Shows" dropdowsn menu');
        await homePage.opinionShowsLinkOnDropDownMenuHeader.hover();

        console.log('Assert test 1: The "News" category is selected and highlighted');
        await expect(homePage.opinionShowsLinkOnDropDownMenuHeader).toHaveClass(/styles_active/);

        console.log('Step 2: Click on the "Opinion" link on the "Shows" dropdowsn menu');
        await homePage.opinionShowsLinkOnDropDownMenuHeader.click()
    
        console.log('Assert test 1: The "Opinion" shows title is displayed');
        await expect(showsPage.opinionShowsTitle).toBeVisible();

        console.log('Assert test 2: The "News" category is selected and highlighted');
        await expect(showsPage.opinionCategoty).toHaveClass(/styles_active/);
      });


  });


  test.describe('Sidebar shows tests', () => {
  
    test('Open shows from sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();
  
      console.log('Step 2: Click the Shows link in the sidebar');
      await homePage.clickShowsInSidebar();
      await showsPage.showsTitle.waitFor()
    
      console.log('Assert test: The Shows page is displayed"');
      await expect(showsPage.showsTitle).toBeVisible();
    });

  
    test('Open Shows dropdown list on sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();
  
      console.log('Assert test: Shows drop down menu is hidden');
      await expect(homePage.showsDropDownMenuOnSidebar).toBeHidden();
  
      console.log('Step 2: Click Shows drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();
      
      console.log('Assert test 1: Shows drop down menu is visible');
      await expect(homePage.showsDropDownMenuOnSidebar).toBeVisible();
  
      console.log('Assert test 2: All shows links on drop down menu is displayed');
      await expect(homePage.showsLinksOnSideBarDropDownMenu).toContainText(['All', 'Documentaries', 'Special Events', 'News', 'Opinion', 'Show Schedule']);
    });

    test('Open "All" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "All" link on the "Shows" dropdowsn menu');
      await homePage.allshowsLinkOnDropDownMenuSidebar.click();
  
      console.log('Assert test 1: The "All" shows title is displayed');
      await expect(showsPage.showsTitle).toBeVisible();

      console.log('Assert test 2: The "All" category is selected and highlighted');
      await expect(showsPage.allCategoty).toHaveClass(/styles_active/);
    });

    test('Open "Documentaries" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "Documentaries" link on the "Shows" dropdowsn menu');
      await homePage.documentariesShowsLinkOnDropDownMenuSidebar.click();
  
      console.log('Assert test 1: The "Documentaries" shows title is displayed');
      await expect(showsPage.documentariesShowsTitle).toBeVisible();

      console.log('Assert test 2: The "Documentaries" category is selected and highlighted');
      await expect(showsPage.documentariesCategoty).toHaveClass(/styles_active/);
    });

    test('Open "Special Events" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "Special Events" link on the "Shows" dropdowsn menu');
      await homePage.specialEventsvShowsLinkOnDropDownMenuSidebar.click();
  
      console.log('Assert test 1: The "Special Events" shows title is displayed');
      await expect(showsPage.specialEventsShowsTitle).toBeVisible();

      console.log('Assert test 2: The "Special Events" category is selected and highlighted');
      await expect(showsPage.specialEventsCategoty).toHaveClass(/styles_active/);
    });
    
    test('Open "News" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "News" link on the "Shows" dropdowsn menu');
      await homePage.newsShowsLinkOnDropDownMenuSidebar.click();
  
      console.log('Assert test 1: The "News" shows title is displayed');
      await expect(showsPage.newsShowsTitle).toBeVisible();

      console.log('Assert test 2: The "News" category is selected and highlighted');
      await expect(showsPage.newsCategoty).toHaveClass(/styles_active/);
    });

    test('Open "Opinion" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "Opinion" link on the "Shows" dropdowsn menu');
      await homePage.opinionShowsLinkOnDropDownMenuSidebarSidebar.click();
  
      console.log('Assert test 1: The "Opinion" shows title is displayed');
      await expect(showsPage.opinionShowsTitle).toBeVisible();

      console.log('Assert test 2: The "Opinion" category is selected and highlighted');
      await expect(showsPage.opinionCategoty).toHaveClass(/styles_active/);
    });

    test('Open "Show Schedule" shows from dropdown list on Sidebar', async ({ page }) => {
      const homePage = new HomePage(page)
      const showsPage = new ShowsPage(page)
  
      console.log('Step 1: Open the Sidebar');
      await homePage.clickSideBarMenu();

      console.log('Step 2: Click the "Shows" drodrop down button');
      await homePage.showsDropDownButtonOnSidebar.click();

      console.log('Step 3: Click on the "Show Schedule" link on the "Shows" dropdowsn menu');
      await homePage.showScheduleShowsLinkOnDropDownMenuSidebarSidebar.click();
  
      console.log('Assert test 1: The "Show Schedule" shows title is displayed');
      await expect(showsPage.showScheduleShowsTitile).toBeVisible();
    });
    

  });
  



  // Need to approve new shows style //

  // test('Open Shows dropdown list on header', async ({ page }) => {
  //   const homePage = new HomePage(page)
  //   const showsPage = new ShowsPage(page)
  // });