const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function captureScreenshots() {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        headless: "new"
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    const baseUrl = 'http://127.0.0.1:8080';
    
    const pages = [
        { url: `${baseUrl}/index.html`, name: 'login_page.png' },
        { url: `${baseUrl}/dashboard.html`, name: 'dashboard_main.png' },
        { url: `${baseUrl}/crop_detail.html`, name: 'crop_management.png' },
        { url: `${baseUrl}/moon_calendar.html`, name: 'moon_calendar.png' },
        { url: `${baseUrl}/chat_list.html`, name: 'chat_system.png' }
    ];

    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    for (let p of pages) {
        console.log(`Taking screenshot of ${p.url}...`);
        try {
            await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 10000 });
            await page.waitForTimeout(1000); // Wait a bit for animations
            await page.screenshot({ path: `screenshots/${p.name}`, fullPage: false });
            console.log(`Saved screenshots/${p.name}`);
        } catch (e) {
            console.error(`Failed to capture ${p.name}: ${e.message}`);
        }
    }

    await browser.close();
}

captureScreenshots().catch(console.error);
