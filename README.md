# Demosoum

## Setup

### 1. Install Playwright

```bash
npm init playwright@latest
npm install dotenv
npm i zod
npm install -g artillery
```

### 2. Run Test

```bash
Run All Test in Headless Mode by Default
npx playwright test
Run All Test in Headed Mode
npx playwright test --headed
Run Test of UI Section
npx playwright test --ui
To See HTML Report
npx playwright show-report
```

### 3. Performance Test

```bash
$ artillery run --output src/performance/reports/report.json src/performance/scenarios/location-api.yaml
```
