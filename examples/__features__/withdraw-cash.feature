Feature: Withdraw Cash

    Scenario Outline: Withdraw cash from bank account
        Given my account balance is $<startingBalance>
        When I withdraw $<withdrawAmount> from my account
        Then my account should have a remaining balance of $<remainingBalance>

        Examples:
            | startingBalance | withdrawAmount | remainingBalance |
            | 100             | 50             | 50               |
            | 100             | 0              | 100              |
            | 100             | 1.25           | 98.75            |
            | 1               | 0.50           | 0.50             |
            | 1               | 5.00           | -4.00            |
