import pytest
from NumberOfSteps.python.numberOfSteps import Solution
from NumberOfSteps.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.numberOfSteps, case) == case['expected']
