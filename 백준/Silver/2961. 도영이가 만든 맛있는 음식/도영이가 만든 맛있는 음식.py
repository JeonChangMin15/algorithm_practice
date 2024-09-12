n = int(input())
fruit = []

for i in range(n):
  fruit.append(list(map(int, input().split())))

answer = float('inf')

def backTracking(arr, start):
  global answer

  if len(arr) > 0:
    taste1 = 1
    taste2 = 0
    for index in arr:
      t1, t2 = fruit[index]
      taste1 *= t1
      taste2 += t2
    answer = min(answer, abs(taste1-taste2))

  for i in range(start, n):
    arr.append(i)
    backTracking(arr, i+1)
    arr.pop()

backTracking([], 0)

print(answer)