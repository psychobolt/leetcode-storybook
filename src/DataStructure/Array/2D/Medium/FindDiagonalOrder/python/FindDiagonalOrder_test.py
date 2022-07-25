import pytest
from FindDiagonalOrder.python.findDiagonalOrder import Solution
from FindDiagonalOrder.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.findDiagonalOrder, case) == case['expected']
