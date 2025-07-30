testN = int(input())
pattern1, pattern2 = input().split('*')
arr = []

for i in range(testN):
  arr.append(input())

for testStr in arr:
  isValid = True
  reversedStr = "".join(reversed(testStr))
  reversedPattern = "".join(reversed(pattern2))

  if len(pattern1) + len(pattern2) > len(testStr):
    print("NE")
    continue
  
  for i in range(len(pattern1)):
    if pattern1[i] != testStr[i]:
      isValid = False

  for j in range(len(pattern2)):
    if reversedPattern[j] != reversedStr[j]:
      isValid = False
  
  print("DA" if isValid else "NE")