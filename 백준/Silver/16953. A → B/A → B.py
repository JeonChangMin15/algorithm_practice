from collections import deque

start, target = list(map(int, input().split()))
nums = set()
queue = deque()
queue.append([start, 1])

answer = -1
limitVal = 10 ** 9

while len(queue):
  val, cnt = queue.popleft()
  if val == target:
    answer = cnt

  if val*2 <= limitVal and val*2 not in nums:
    queue.append([val*2, cnt+1])
    nums.add(val*2)

  if val*10 + 1 <= limitVal and val*10+1 not in nums:
    queue.append([val*10+1, cnt+1])
    nums.add(val*10+1)

print(answer)