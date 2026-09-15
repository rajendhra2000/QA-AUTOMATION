Feature: my order
    @regression
    Scenario: placing order

        Given the login crdentials "pra946787@gmail.com" and "Prasad@123"
        When we add the "ADIDAS ORIGINAL" to cart
        Then the order is placed successfully


    @fail
    Scenario Outline:  trying failed sceario

        Given  the login my crdentials "<username>" and "<password>"
        Then order is failed

        Examples:
            | username | password |

            | pra9787@gmail.com | Prasad@123 |
            | hello@gmail.com   | my@123     |
