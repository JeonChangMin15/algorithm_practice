target = int(input())
breakN = int(input())
breakNums = list(map(int, input().split())) if breakN > 0 else []

firstOption = abs(target - 100)
targetNums = list(map(int, str(target)))

isAllNumberNotBreak = False

if all(x not in breakNums for x in targetNums):
  isAllNumberNotBreak = True

secondOption = float('inf')

if isAllNumberNotBreak:
  secondOption = len(targetNums)
else:
  cnt  = 1
  lt = target - 1
  rt = target + 1

  if breakN != 10:
    while True:
      value = float('inf')
      isLtAllNumberNotBreak = False
      isRtAllNumberNotBreak = False

      if lt>=0 and all(x not in breakNums for x in list(map(int, list(str(lt))))):
        isLtAllNumberNotBreak = True
      
      if all(x not in breakNums for x in list(map(int, list(str(rt))))):
        isRtAllNumberNotBreak = True

      if isLtAllNumberNotBreak:
        value = min(value, cnt + len(str(lt)))

      if isRtAllNumberNotBreak:
        value = min(value, cnt + len(str(rt)))
      
      if isLtAllNumberNotBreak or isRtAllNumberNotBreak:
        secondOption = value
        break

      cnt +=1
      lt -= 1
      rt +=1

print(min(firstOption, secondOption))
