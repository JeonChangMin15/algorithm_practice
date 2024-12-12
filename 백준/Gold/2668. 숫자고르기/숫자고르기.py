n = int(input())
nums1= []
nums2 = []
visited =[False]*n
answer = []

for i in range(n):
  nums1.append(i+1)
  nums2.append(int(input()))

def dfs(curIndex, arr):
  global answer

  if visited[curIndex]:
    return
  
  arr.append(curIndex)
  visited[curIndex] = True

  val1 = list(map(lambda x:nums1[x], arr))
  val2 = list(map(lambda x:nums2[x], arr))
  val1.sort()
  val2.sort()
  
  isAllSame = True

  for i in range(len(val1)):
    if val1[i] != val2[i]:
      isAllSame = False
      break

  if isAllSame:
    for v in val1:
      if v not in answer:
        answer.append(v)

  dfs(nums2[curIndex]-1, arr)
  visited[curIndex] = False



for i in range(n):
  dfs(i, [])

answer.sort()
print(len(answer))
print("\n".join(list(map(str, answer))))