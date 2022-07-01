import json

try:
    data = open('testCases.json')
except FileNotFoundError:
    from pathlib import Path
    data = (Path(__file__).parent / '../testCases.json').open()

cases = json.load(data)


def runTestCase(findPivot, testCase):
    return findPivot(testCase['input'])
