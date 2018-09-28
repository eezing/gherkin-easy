Feature: Dummy Feature

    Scenario Outline: Dummy Scenario Outline
        Given a is <a>
        And b is <b>
        When I take <a>
        And I add <b>
        Then I should have <c>
        And a is still <a>
        And b is still <b>

        Examples:
            | a | b | c |
            | 1 | 2 | 3 |
