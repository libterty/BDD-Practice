const { Given, When, Then } = require('cucumber');
const expect = require('expect');
const empReport = require('../../main/emp-report');
Given('today is: year 2019, month 1, day 1', function() {
    this.baseDate = new Date(2019, 0, 1);
});
When('I get employee report by seniority over 10 years', function() {
    this.result = empReport.getReportBySeniority(this.baseDate, 10, false);
});
When('I get employee report by seniority less than 5 years', function() {
    this.result = empReport.getReportBySeniority(this.baseDate, 5, true);
});

Then('the report should have length {int}', function(length) {
    expect(this.result).toHaveLength(length);
});
Then('the entry {int} of report should match: name is {string}, onboardDate is {string}', function(index, name, onboardDate) {
    expect(this.result[index - 1]).toMatchObject({ name: name, onboardDate: onboardDate });
});