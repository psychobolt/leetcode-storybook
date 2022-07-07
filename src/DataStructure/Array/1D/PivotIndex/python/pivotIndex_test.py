import pytest
from PivotIndex.python.pivotIndex import Solution
from PivotIndex.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.pivotIndex, case) == case['expected']
