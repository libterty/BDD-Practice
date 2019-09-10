Feature: Get Employee Report by Seniority
  Test the feature of getting report by seniority.
Scenario: Get employees with seniority over 10 years
    Given today is: year 2019, month 1, day 1
    When I get employee report by seniority over 10 years
    Then the report should have length 2
    Then the entry 1 of report should match: name is "Max", onboardDate is "2008-05-04"
    Then the entry 2 of report should match: name is "Mike", onboardDate is "2005-01-01"
Scenario: Get employees with seniority less than 5 years
    Given today is: year 2019, month 1, day 1
    When I get employee report by seniority less than 5 years
    Then the report should have length 1
    Then the entry 1 of report should match: name is "Sepp", onboardDate is "2018-12-17"