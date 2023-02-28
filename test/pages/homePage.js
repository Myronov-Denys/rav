const { expect } = require('@playwright/test');



exports.HomePage = class HomePage {
    constructor (page) {
        this.page = page;



   
        this.homeTitle = page.getByText('HOME OF REAL NEWS & HONEST VIEWS!');

        // Header

        this.sideBarButton = page.locator("//span[@class='navbar-brand']/div[contains(@class,'styles_root')]")

        this.showsHeaderButton = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]")

            //Shows
            this.showsDropDownMenuOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]/..")

              // Shows links

              this.showsLinksList = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[text()='All']/..");

              this.showsLinksDropDownMenuOnHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]/../a");
              this.allshowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'All')]");
              this.documentariesShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Documentaries')]");
              this.specialEventsvShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Special Events')]");
              this.newsShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'News')]");
              this.opinionShowsLinkOnDropDownMenuHeader = page.locator("//div[contains(@class, 'd-none')]//a[contains(text(),'Shows')]/..//a[contains(text(),'Opinion')]");




        //Sidebar

        this.showsSidebarButton = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']")
            // Shows //

            this.showsDropDownButtonOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../button")
            this.showsDropDownMenuOnSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]")
                
            // Shows links
                
                this.showsLinksOnSideBarDropDownMenu = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a")

                this.allshowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='All']");
                this.documentariesShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Documentaries']");
                this.specialEventsvShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Special Events']");
                this.newsShowsLinkOnDropDownMenuSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='News']");
                this.opinionShowsLinkOnDropDownMenuSidebarSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Opinion']");
                this.showScheduleShowsLinkOnDropDownMenuSidebarSidebar = page.locator("//div[contains(@class,'styles_navMenu')]//a[text()='Shows']/../..//div[contains(@class, 'accordion-collapse')]//a[text()='Show Schedule']");
            

    
    }

    //Actions

        // Header //

        async clickShowsInHeader() {
            await this.showsHeaderButton.click()
            };


            // SideBar //

            async clickSideBarMenu() {
                await this.sideBarButton.click();
            };

            async clickShowsInSidebar() {
                await this.showsSidebarButton.click();
                };

            async openShowsFromSidebar() {
                await this.clickSideBarMenu();
                await this.clickShowsInSidebar();
            }


        // async click_Shows_In_Header() {
        //     await this.showsHeaderButton.click()
        //         };



    }