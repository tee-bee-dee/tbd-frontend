module.exports = {
  'formatDate': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#date1', 5000)
      .assert.elementPresent('#date1')
      .setValue('#date1', '10032017')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', '10-03-2017')
      .clearValue('#date1')
      .setValue('#date1', '04202017')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', '04-20-2017')
      .clearValue('#date1')
      .setValue('#date1', '1234567')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', 'Invalid input')
      .clearValue('#date1')
      .setValue('#date1', '1212-014')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', 'Invalid input')
      .clearValue('#date1')
      .setValue('#date1', '05a6abcd')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', 'Invalid input')
      .clearValue('#date1')
      .setValue('#date1', '11-03-1995')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', '11-03-1995')
      .clearValue('#date1')
      .setValue('#date1', '12-31-2017')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', '12-31-2017')
      .clearValue('#date1')
      .setValue('#date1', '01-16-2006')
      .click('button[name=formatDate]')
      .pause(5000)
      .assert.containsText('#formatResult', '01-16-2006')
      .end()
  }
}
