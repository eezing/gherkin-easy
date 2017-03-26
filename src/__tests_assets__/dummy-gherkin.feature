Feature: Dummy Feature

    Scenario: Dummy Scenario
        Given a is 1 and b is 2
        When I add a and b
        Then c should be 3

    Scenario Outline: Dummy Scenario Outline
        Given a is <a> and b is <b>
        When I add a and b
        Then c should be <c>

        Examples:
            | a | b | c |
            | 1 | 2 | 3 |
