// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests',
    retries: 1,
    timeout: 40 * 1000,
    expect: {
        timeout: 4000
    },




    projects: [
        {
            name: 'chromium',
            use: {
                browserName: "chromium",
                headless: false,
                screenshot: 'off',
                trace: 'off',
                video: 'off',
                htmlreporter: 'true'
                //...devices['Pixel 10'],
            }
        },
        {

            name: 'webkit',
            use: {
                browserName: "webkit",
                headless: false,
                screenshot: 'off',
                trace: 'off',
                // ...devices['iPhone 11']
            }
        },

    ]




});

