rowN, colN, blockN = list(map(int, input().split()))
grid = []
for i in range(rowN):
  grid.append(list(map(int, input().split())))

ans = int(1e9)
glevel = 0

for i in range(257):
  use_block = 0
  take_block = 0
  for x in range(rowN):
    for y in range(colN):
      if grid[x][y] > i:
        take_block += grid[x][y] - i
      else:
        use_block += i - grid[x][y]
    
  if use_block > take_block + blockN:
    continue
  count = take_block * 2 + use_block

  if count <= ans:
    ans = count
    glevel = i

print(ans, glevel)
