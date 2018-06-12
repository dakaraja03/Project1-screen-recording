const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Key = webdriver.Key;

const width = 360; // must be below 1920
const height = 640; // must be below 1080
const width1 = (width + width / 4) > 1920 ? 1920 : (width + width / 4);
const height1 = (height + height / 4) > 1080 ? 1080 : (height + height / 4);

var recorder = require('screen-capture-recorder');
var scene = new recorder({ x: 0, y: 0, w: width1, h: height1 });

(async function example() {
    let driver = await new webdriver.Builder()
        .forBrowser('firefox')
        .build();

    await driver.manage().window().setRect({
        width: width,
        height: height,
        x: -5,
        y: 0
    });
    // driver.manage().window().maximize(); // to maximize the browser

    scene.warmup(async function (err) {
        scene.StartRecord(function (err) {
            if (err)
                console.log("Something got wrong in start");
        });

        driver.get("http://localhost:3000/");

        await driver.sleep(3000).then(() => console.log("started"))
            .catch(err => console.log("error", err));

        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id('search-bar')).sendKeys("test");
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("sub-item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("sub-sub-item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("sub-sub-item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("sub-item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item1")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item3")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item3")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item4")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("item4")).click();
        }).catch(err => {
            console.log("error", err)
        });

        await driver.sleep(1000).then(d => {
            return driver.findElement(By.css('#customerName')).sendKeys("test");
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gender"]/option[2]' }).click();
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id('branch')).sendKeys("test");
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id('dob')).sendKeys("2018-08-15");
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id('comments')).sendKeys("test");
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="someField"]/option[3]' }).click();
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridCheckbox1"]' }).click();
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridCheckbox2"]' }).click();
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridCheckbox3"]' }).click();
        }).catch(err => {
            console.log("error", err);
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridCheckbox4"]' }).click();
        }).catch(err => {
            console.log("error", err);
        });

        await driver.sleep(3000).then(d => {
            return driver.findElement(By.id("next-btn")).click();
        }).catch(err => {
            console.log("error", err)
        });

        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="premium-member"]' }).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridRadios1"]' }).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridRadios2"]' }).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridRadios3"]' }).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement({ xpath: '//*[@id="gridRadios4"]' }).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("home-tab")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("profile-tab")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("contact-tab")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.id("popoup-btn")).click();
        }).catch(err => {
            console.log("error", err)
        });
        await driver.sleep(1000).then(d => {
            return driver.findElement(By.css(".close")).click();
        }).catch(err => {
            console.log("error", err)
        });

        await driver.sleep(3000).then(() => console.log("ended"))
            .catch(err => console.log("error", err));

        await driver.quit();

        await scene.once(recorder.EVENT_DONE, function (err, path) {
            if (!err) {
                console.log("recorder", recorder.EVENT_DONE)
                console.log("Everything is ok, find video in ", path);
                require('fs').renameSync(path, path + ".mp4");
            }
        });
        await scene.StopRecord(function (err) {
            if (err)
                console.log("Something got wrong in stop");
        });
    });
})();