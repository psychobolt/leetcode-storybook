import pytest
from FizzBuzz.python.fizzBuzz import Solution
from FizzBuzz.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.fizzBuzz, case) == case['expected']
