import pytest
from MyLinkedList.Singly.python.MyLinkedList import MyLinkedList
from MyLinkedList.Singly.python.testCases import runTestCase, cases


@pytest.mark.parametrize('case', cases)
def test(case):
    assert runTestCase(MyLinkedList, case) == case['expected']
