// Captures the README screenshots by walking the real app in Chromium:
// home, the order form with the airport search open, a submitted order,
// and the service status, on desktop and at phone width.
//
//   node scripts/screenshots.mjs OUTDIR
import { chromium } from 'playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const out = path.resolve(process.argv[2] || 'docs/screenshots');
const url = pathToFileURL(path.resolve('index.html')).href;
const browser = await chromium.launch();

async function walk(prefix, viewport, deviceScaleFactor) {
  const page = await browser.newPage({ viewport, deviceScaleFactor });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${out}/${prefix}home.png` });

  await page.click('.nav-item:nth-child(2)');
  await page.selectOption('#aircraftModel', 'Cessna 172 Skyhawk');
  await page.fill('#aircraftWeight', '2400');
  await page.fill('#fuelAmount', '40');
  await page.fill('#tailNumber', 'N172VB');
  await page.fill('#destination', 'pitt');
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${out}/${prefix}request.png` });

  await page.click('.airport-item');
  await page.click('#fuelForm button[type=submit]');
  await page.waitForTimeout(800);
  await page.locator('#ordersList').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `${out}/${prefix}submitted.png` });

  await page.click('.nav-item:nth-child(3)');
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `${out}/${prefix}status.png` });
  await page.close();
}

await walk('', { width: 1280, height: 800 }, 1);
await walk('phone-', { width: 390, height: 844 }, 2);
await browser.close();
console.log('saved to', out);
