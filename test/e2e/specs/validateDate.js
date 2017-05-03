module.exports = {
  'formatDate': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#date2', 5000)
      .assert.elementPresent('#date2')
      .setValue('#date2', '10-12-1961')
      .click('button[name=validateDate]')
      .pause(5000)
      .assert.containsText('#validateResult', 'true')
      .clearValue('#date2')
      .setValue('#date2', '12-11-1961')
      .click('button[name=validateDate]')
      .pause(5000)
      .assert.containsText('#validateResult', 'true')
      .clearValue('#date2')
      .setValue('#date2', '11-31-1061')
      .click('button[name=validateDate]')
      .pause(5000)
      .assert.containsText('#validateResult', 'false')
      .clearValue('#date2')
      .setValue('#date2', '13-11-1961')
      .click('button[name=validateDate]')
      .pause(5000)
      .assert.containsText('#validateResult', 'false')
      .clearValue('#date2')
      .end()
  }
}
