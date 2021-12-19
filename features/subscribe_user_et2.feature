Feature: Subscription

    Background: Login
        When I go to "https://viktor-silakov.github.io/course-sut/index.html?quick"
        When I login as: "walker@jw.com", "password"

    Scenario Outline: Create user "<email>" and check
        When I go to "Create User" menu item
        And I create user with fields "<email>", "<password>", "<address1>", "<address2>", "<city>", "<zip>", "<anual>", "<description>"
        And I go to "List of users" menu item
        Then I check user "<email>", "<role>", "<address1>", "<address2>", "<city>", "<zip>", "<anual>", "<description>"
        And I logout
        Examples:
            | email           | role | password   | address1     | address2 | city    | zip    | anual | description      |
            | first@test.com  | user | U&cmpYsxK9 | Rustaveli 20 | 21       | Tbilisi | 222567 | 100   | first test user  |
            | second@test.com | user | YsxK9U&cmp | Pushkina 17  | 4        | Minsk   | 222567 | 200   | second test user |
            | third@test.com  | user | U&xK9cmpYs | Arbat 17     | 5        | Moskow  | 222567 | 300   | third test user  |

    Scenario Outline: Subscribe user "<user>" and check
        When I go to "Create Subscription" menu item
        And I Create subscription with fields "<fPlan>", "<years>", "<user>", "<description>", "<suspend>"
        And I go to "List of Subscriptions" menu item
        Then I check subscription "<sPlane>", "<years>", "<user>", "<total>", "<description>", "<suspend>"
        And I logout
        Examples:
            | fPlan      | sPlane | years | user            | total | description              | suspend |
            | Education  | EDU    | 3     | first@test.com  | 300   | first test subscription  | on      |
            | Premium    | PREM   | 4     | second@test.com | 800   | second test subscription |         |
            | Enterprise | ENT    | 2     | third@test.com  | 600   | third test subscription  | on      |