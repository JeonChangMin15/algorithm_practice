'''
각 시작점에서 노드까지 걸리는 최단경로를 다익스트라로 구하는 문제
첫줄에 테스트 케이스가 주어진다
computerN, lineN, start가 주어지고
각 줄에는 n1,n2, time이 주어진다
n2 -> [time, n1]을 넣어주고 도달할 수 있는 지점중에서 최대값을 구하면된다
각 케이스마다 감염되는 컴퓨터의 수, 걸리는 시간을 출력
'''
import heapq

testN = int(input())

for i in range(testN):
  computerN, lineN, start = list(map(int, input().split()))
  graph = {}
  
  for i in range(1, computerN+1):
    graph[i] = []
  
  for i in range(lineN):
    n1, n2, time = list(map(int, input().split()))
    graph[n2].append([time, n1])

  time_list = [float('inf')]*(computerN+1)
  time_list[start] = 0
  queue = []
  heapq.heappush(queue, [0, start])

  while len(queue):
    cur_time, cur_computer = heapq.heappop(queue)

    if cur_time > time_list[cur_computer]:
      continue

    for next_time, next_computer in graph[cur_computer]:
      sum_time = next_time + cur_time
      if sum_time < time_list[next_computer]:
        heapq.heappush(queue, [sum_time, next_computer])
        time_list[next_computer] = sum_time

  cnt = 0
  max_time = 0

  for time in time_list:
    if time != float('inf'):
      cnt += 1
      max_time = max(time, max_time)

  print(cnt, max_time)