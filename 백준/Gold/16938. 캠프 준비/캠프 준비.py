problemN, minTotal, maxTotal, minDiff = list(map(int, input().split()))
scores = list(map(int, input().split()))
scores.sort()

answer = 0

def dfs(arr: list, start):
  global answer

  if len(arr) >= 2:
    val = []
    for i in arr:
      val.append(scores[i])

    total = sum(val)
    diff = max(val) - min(val)
    if total >= minTotal and total <= maxTotal and diff >= minDiff:
      answer += 1

  for i in range(start, problemN):
    if i in arr:
      continue

    arr.append(i)
    dfs(arr, i+1)
    arr.pop()

dfs([], 0)

print(answer)