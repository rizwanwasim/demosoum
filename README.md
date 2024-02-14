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
Run All Test
npx playwright test
Run Test in headless Mode
npx playwright test --headless
Run Test of UI Section
npx playwright test --ui
Run Test of API Section
npx playwright test --api
```

### 3. Performance Test

```bash
$ artillery run --output src/performance/reports/report.json src/performance/scenarios/location-api.yaml
```
