Feature: Message Maker

    Scenario Outline: Create a new message
        Given the message <text> as a string
        When I run the message maker
        Then it should create <message>

        Examples:
            | text                     | message       |
            | 'foo'                    | 'hello foo!'  |
            | 'bar'                    | 'hello bar!'  |
            | 'baz'                    | 'hello baz!'  |
            | ((some) => some)('what') | 'hello what!' |
