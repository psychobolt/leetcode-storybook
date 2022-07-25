import pytest
from PlusOne.python.plusOne import Solution
from PlusOne.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.plusOne, case) == case['expected']
