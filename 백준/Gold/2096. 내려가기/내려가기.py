n = int(input())
val1, val2, val3 = list(map(int, input().split()))

max_val = [val1, val2, val3]
min_val = [val1, val2, val3]

for i in range(n-1):
  a, b, c = map(int, input().split())
  temp = max_val[:]
  max_val[0] = a + max(temp[0], temp[1])
  max_val[1] = b + max(temp[0], temp[1], temp[2])
  max_val[2] = c + max(temp[1], temp[2])

  temp1 = min_val[:]
  min_val[0] = a + min(temp1[0], temp1[1])
  min_val[1] = b + min(temp1[0], temp1[1], temp1[2])
  min_val[2] = c + min(temp1[1], temp1[2])

print(max(max_val), min(min_val))