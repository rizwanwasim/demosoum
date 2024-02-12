import { test, expect, Page, Locator } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly dashLogo: Locator;
  readonly dashboardHeading: Locator;
  readonly notificationFeed: Locator;
  readonly tasksFeed: Locator;
  readonly myActiveProjectFeed: Locator;
  readonly logoutButton: Locator;
  readonly expandButton: Locator;
  readonly myProjectsTab: Locator;
  readonly myTaksTab: Locator;
  readonly createProjectButton: Locator;
  readonly pendingInvitationDialog: Locator;
  readonly pendingInvitesIgnoreButton: Locator;
  readonly notificationIcon: Locator;
  readonly createProjectForm: Locator;
  readonly projectNameLabel: Locator;
  readonly siteAddressLabel: Locator;
  readonly projectBudgetLabel: Locator;
  readonly reportingCurrencyLabel: Locator;
  readonly projectStartDateLabel: Locator;
  readonly projectEndDateLabel: Locator;
  readonly projectInfoCreateProjectButton: Locator;
  readonly projectInfoCrossButton: Locator;
  readonly projectInfoCancleButton: Locator;
  readonly projectNameField: Locator;
  readonly siteAddressField: Locator;
  readonly projectBudgetField: Locator;
  readonly reportingCurrencyField: Locator;
  readonly projectStartDateField: Locator;
  readonly projectEndDateField: Locator;
  readonly projectCreationErrorMessage: Locator;
  readonly userTabAddUserButton: Locator;
  readonly userTabSendInviteButton: Locator;
  readonly userTabSkipButton: Locator;
  readonly userTabProjectCreator: Locator;
  readonly viewallTasks: Locator;
  readonly viewallMyActiveProject: Locator;
  readonly selectProjectAddress: Locator;

  readonly labsLogo : Locator;

  // const emailis = "riz@getMaxListeners.xom";
  constructor(page: Page) {
    this.page = page;
    this.labsLogo = page.getByText('Swag Labs');
    this.dashLogo = page.getByRole("button", { name: "Logo" });
    this.dashboardHeading = page.getByRole("heading", { name: "Dashboard" });
    this.notificationFeed = page
      .locator("div")
      .filter({ hasText: /^Notification Feed$/ });
    this.tasksFeed = page.getByText("TasksView all");
    this.myActiveProjectFeed = page.getByText(
      "My Active ProjectsAllFavoriteActiveView all"
    );
    this.pendingInvitationDialog = page.getByLabel("Pending Invitations");
    this.pendingInvitesIgnoreButton = page.getByRole("button", {
      name: "Ignore",
    });
    this.dashLogo = page.getByRole("img", { name: "empty" });
    this.logoutButton = page.getByRole("button", { name: "Log Out" });
    this.expandButton = page.getByTestId("ExpandMoreIcon");
    this.viewallTasks = page.getByText("View all").first();
    this.viewallMyActiveProject = page
      .locator("div")
      .filter({ hasText: /^AllFavoriteActiveView all$/ })
      .getByRole("paragraph");
    this.myProjectsTab = page.getByRole("button", { name: "My Projects" });
    this.myTaksTab = page.getByRole("link", { name: "Projects My Tasks" });
    this.createProjectButton = page.getByRole("button", {
      name: "Create Project",
    });
    this.createProjectForm = page.getByText("Create Project ✖ Project");
    this.projectNameLabel = page.getByRole("heading", { name: "Project Name" });
    this.siteAddressLabel = page.getByRole("heading", { name: "Site Address" });
    this.projectBudgetLabel = page.getByRole("heading", {
      name: "Project Budget",
    });
    this.reportingCurrencyLabel = page.getByRole("heading", {
      name: "Reporting Currency",
    });
    this.projectStartDateLabel = page.getByRole("heading", {
      name: "Project Start Date",
    });
    this.projectEndDateLabel = page.getByRole("heading", {
      name: "Project Deadline",
    });
    this.projectInfoCreateProjectButton = page
      .getByLabel("Project info")
      .getByRole("button", { name: "Create Project" });
    this.projectInfoCrossButton = page.getByText("✖");
    this.projectInfoCancleButton = page.getByRole("button", { name: "Cancel" });

    this.projectNameField = page.getByLabel("Project Name");
    this.siteAddressField = page.getByPlaceholder("Enter a location");
    this.projectBudgetField = page.getByLabel("Project Budget");
    this.reportingCurrencyField = page.getByLabel("​", { exact: true });
    this.projectStartDateField = page.getByLabel("Project Start Date");
    this.projectEndDateField = page.getByLabel("Project Deadline");

    this.projectCreationErrorMessage = page.getByRole("alert");

    this.userTabAddUserButton = page.getByRole("button", { name: "Add User" });
    this.userTabSendInviteButton = page.getByRole("button", {
      name: "Send Invite",
    });
    this.userTabSkipButton = page.getByRole("button", { name: "Skip" });
    this.userTabProjectCreator = page.getByLabel("Users").getByRole("listitem");
    this.selectProjectAddress = page.getByText('RawalpindiPakistan')
      // this.selectProjectAddress=page.locator(input["type='MuiInputBase-input'"])
  }

  //Method to set the email input field
  async setProjectName(projectName: string) {
    if (projectName) {
      await this.projectNameField.fill(projectName);
    }
  }

  // Method to set the password input field
  async setProjectSiteAddress(siteAddress: string) {
    if (siteAddress) {
      await this.siteAddressField.fill(siteAddress);
    }
  }
  async setProjectBudget(budgetField: string) {
    if (budgetField) {
      await this.projectBudgetField.fill(budgetField);
    }
  }

  // Method to set the password input field
  async setProjectReportingCurrencyField(reportingCurrency: string) {
    if (reportingCurrency) {
      await this.reportingCurrencyField.fill(reportingCurrency);
    }
  }
  // Method to set the password input field
  async setProjectStartDate(projectStartDate: string) {
    if (projectStartDate) {
      await this.projectStartDateField.fill(projectStartDate);
    }
  }
  // Method to set the password input field
  async setProjectEndDateField(projectEndDate: string) {
    if (projectEndDate) {
      await this.projectEndDateField.fill(projectEndDate);
    }
  }
}
