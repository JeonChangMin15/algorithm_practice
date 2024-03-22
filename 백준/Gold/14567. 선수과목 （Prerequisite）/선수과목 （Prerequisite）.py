import sys
from collections import deque
input = sys.stdin.readline

subjectN, optionN = list(map(int, input().split()))
prevSubject = {}
afterSubject = {}
currentSubjectBefore = {}

for i in range(1, subjectN+1):
  prevSubject[i] = []
  afterSubject[i] = []
  currentSubjectBefore[i] = []

for i in range(optionN):
  prevClass, afterClass = list(map(int, input().split()))
  prevSubject[afterClass].append(prevClass)
  afterSubject[prevClass].append(afterClass)

queue = deque()

for i in range(1, subjectN + 1):
  if len(prevSubject[i]) == 0:
    queue.append([i, 1])

date = [0] * (subjectN + 1)

while len(queue):
  currentSubject, currentDay = queue.popleft()

  if len(currentSubjectBefore[currentSubject]) == len(prevSubject[currentSubject]):
    date[currentSubject] = currentDay

  for nextClass in afterSubject[currentSubject]:
    if currentSubject not in currentSubjectBefore[nextClass]:
      currentSubjectBefore[nextClass].append(currentSubject)
      
      if len(currentSubjectBefore[nextClass]) == len(prevSubject[nextClass]):
        queue.append([nextClass, currentDay + 1])

answer = " ".join(list(map(str, date[1:])))
print(answer)