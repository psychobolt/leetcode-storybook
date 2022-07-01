import pytest
from pivotIndex import Solution
from testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.pivotIndex, case) == case['expected']
