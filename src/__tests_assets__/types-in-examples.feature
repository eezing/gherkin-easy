Feature: Types in examples

    Scenario Outline: I want to use javascript types in gherkin examples
        Given gherkin variable declared as <variable>
        When I run a test
        Then the variable should be of type <varType>

        Examples:
            | variable       | varType     |
            | 'foo'          | 'string'    |
            | 100            | 'number'    |
            | true           | 'boolean'   |
            | { foo: 'bar' } | 'object'    |
            | ['foo', 'bar'] | 'array'     |
            | () => 'bar'    | 'function'  |
            | undefined      | 'undefined' |
            | null           | 'object'    |
