n = int(input())
grid = []

for i in range(n):
  grid.append(input().split())

tPosition = []

for i in range(n):
  for j in range(n):
    if grid[i][j] == 'T':
      tPosition.append([i, j])

dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

answer = "NO"

for i in range(n*n):
  for j in range(n*n):
    for k in range(n*n):
      isDiff = i !=j and i != k and j !=k
      if not isDiff:
        continue

      firstX = int(i/n)
      firstY = i % n
      secondX = int(j / n)
      secondY = j % n
      thirdX = int(k/n)
      thirdY = k % n

      isValid = grid[firstX][firstY] == "X" and grid[secondX][secondY] =="X" and grid[thirdX][thirdY] == 'X'
      if not isValid:
        continue

      grid[firstX][firstY] = "O"
      grid[secondX][secondY] = 'O'
      grid[thirdX][thirdY] = "O"

      findStudent = 0
      
      for tx, ty in tPosition:
        for dx, dy in dirs:
          x = tx + dx
          y = ty + dy

          while 0<=x<n and 0<=y<n and grid[x][y] != "O":
            if grid[x][y] == 'S':
              findStudent +=1

            x += dx
            y += dy

      if findStudent == 0:
        answer = "YES"

      grid[firstX][firstY] = "X"
      grid[secondX][secondY] = "X"
      grid[thirdX][thirdY] = "X"

print(answer)