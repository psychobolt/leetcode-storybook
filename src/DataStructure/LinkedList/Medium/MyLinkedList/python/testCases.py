import json

try:
    data = open('testCases.json')
except FileNotFoundError:
    from pathlib import Path
    data = (Path(__file__).parent / '../testCases.json').open()

cases = json.load(data)


def runTestCase(MyLinkedList, testCase):
    list = MyLinkedList()
    commands = testCase['input'][1:]
    args = testCase['args'][1:]
    return [None] + [
        getattr(list, command)(*args[i])
        for i, command in enumerate(commands)
    ]
