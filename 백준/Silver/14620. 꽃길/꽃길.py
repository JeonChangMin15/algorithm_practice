n = int(input())
grid = []

for i in range(n):
  grid.append(list(map(int, input().split())))

dirs = [-n, n, -1, 1, 0]
cost = float('inf')

for i in range(n*n):
  for j in range(n*n):
    for k in range(n*n):
      firstX = i // n
      firstY = i % n
      secondX = j // n
      secondY = j % n
      thirdX = k // n
      thirdY = k % n
      isValid = (0<firstX<n-1 and 
                 0<firstY<n-1 and
                 0<secondX<n-1 and
                 0<secondY<n-1 and
                 0<thirdX<n-1 and
                 0<thirdY<n-1 
                 )
      if not isValid:
        continue

      position = set()
      initialPositoin = [i, j, k]
      curCost = 0
      for arr in initialPositoin:
        for d in dirs:
          position.add(arr + d)
          curX = (arr+d) // n
          curY = (arr+d) % n
          curCost += grid[curX][curY]
      
      if len(position) == 15:
        cost = min(cost, curCost)

print(cost)