


Feature: my case
    @fail
    Scenario Outline:  trying failed sceario

        Given  the login my crdentials "<username>" and "<password>"
        Then order is failed

        Examples:
            | username | password |

            | pra9787@gmail.com | Prasad@123 |
            | hello@gmail.com   | my@123     |