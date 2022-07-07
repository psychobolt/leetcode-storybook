import pytest
from MyLinkedList.python.MyLinkedList import MyLinkedList
from MyLinkedList.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    assert runTestCase(MyLinkedList, case) == case['expected']
