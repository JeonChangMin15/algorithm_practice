

'''
각 노드간의 모든거리를 구한다 -> 플로이드 워셜 알고리즘
거리를 알 수 있다 -> 연결되어있는 노드수가 student-1과 같으면 순위를 알 수 있다
'''

studentN, lineN = list(map(int, input().split()))
dist = [[float('inf')]*(studentN+1) for _ in range(studentN+1)]

for i in range(lineN):
  n1, n2 = list(map(int, input().split()))
  dist[n1][n2] = 1

for k in range(1, studentN+1):
  for i in range(1, studentN+1):
    for j in range(1, studentN+1):
      if dist[i][j] > dist[i][k] + dist[k][j]:
        dist[i][j] = dist[i][k] + dist[k][j]

answer = 0

for i in range(1, studentN+1):
  cnt = 0
  for j in range(1, studentN+1):
    if dist[i][j] != float('inf') or dist[j][i] != float('inf'):
      cnt += 1
  if cnt == studentN -1:
    answer +=1

print(answer)