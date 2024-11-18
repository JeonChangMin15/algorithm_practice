n, resLevel = list(map(int, input().split()))
arr = []

for i in range(n):
  arr.append(int(input()))

# 반복문 돌면서 target값보다 작은애들과의 차이를 합친게 resLevel보다 작거나 같으면 된다

left = min(arr)
right = max(arr) + resLevel
answer = 0

while left <= right:
  mid = (left + right) // 2
  curRes = 0

  for num in arr:
    if mid > num:
      curRes += mid - num

  if curRes <= resLevel:
    answer = max(answer, mid)
    left = mid + 1
  else:
    right = mid - 1

print(answer)