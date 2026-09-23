const { test, expect } = require('@playwright/test');

test('Upload download excel validation', async ({ page }) => {


    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
    const downloadPromise = page.waitForEvent("download");
    await page.locator("#downloadButton").click();



    // 2. Capture the completed download object
    const download = await downloadPromise;

    // 💡 Note: download.path() points to a temporary file that Playwright
    // deletes automatically as soon as the test finishes or browser closes.

    // 💡 To keep the file permanently on your computer, use download.saveAs():
    // 💡 saveAs requires the full file path including the filename (not just the folder)
    const fileName = download.suggestedFilename(); // 'download.xlsx'
    const savePath = 'C:/Users/USER/Desktop/' + fileName;
    await download.saveAs(savePath);

    console.log(`File saved permanently at: ${savePath}`);
    await page.locator("#fileinput").setInputFiles("C:/Users/USER/Desktop/download.xlsx");
    await expect(page.locator("#fileinput")).toHaveValue(/download.xlsx/);
    await page.pause();




});