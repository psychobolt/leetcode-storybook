import pytest
from DominantIndex.python.dominantIndex import Solution
from DominantIndex.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    solution = Solution()
    assert runTestCase(solution.dominantIndex, case) == case['expected']
