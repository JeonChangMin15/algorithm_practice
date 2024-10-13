n, targetN = list(map(int, input().split()))
arr = []

for i in range(n):
  arr.append(int(input()))

start = 1
end = max(arr)
answer = 1

while start <= end:
  mid = (start+end)//2
  cur = 0
  for dist in arr:
    cur += dist // mid

  if cur < targetN:
    end = mid - 1
  else:
    start = mid + 1
    answer = max(answer, mid)

print(answer)