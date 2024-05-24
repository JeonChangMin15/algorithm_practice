from collections import deque
n = int(input())

def rotate_left(num):
  n1 = (num // 1000) % 10
  n2 = (num // 100) % 10
  n3 = (num // 10) % 10 
  n4 = num % 10 

  return n2 * 1000 + n3 *100 + n4 *10 + n1

def rotate_right(num):
  n1 = (num // 1000) % 10
  n2 = (num // 100) % 10
  n3 = (num // 10) % 10 
  n4 = num % 10 

  return n4 * 1000 + n1 *100 + n2 *10 + n3

def bfs(start, end):
  visited = [False] * 10000
  visited[start] = True

  queue = deque()
  queue.append([start, ''])

  while len(queue):
    num, order = queue.popleft()
    if num == end:
      print(order)
      break

    Dnum = num * 2
    if Dnum < 10000 and not visited[Dnum]:
      queue.append([Dnum, order + 'D'])
      visited[Dnum] = True
    if Dnum >= 10000:
      res = Dnum % 10000
      if not visited[res]:
        visited[res] = True
        queue.append([Dnum % 10000, order + 'D'])

    Snum = num - 1
    if num != 0 and not visited[Snum]:
      queue.append([Snum, order+"S"])
      visited[Snum] = True
    if num == 0 and not visited[9999]:
      queue.append([9999, order+"S"])
      visited[9999] = True

    # left_num = rotate_left(num)
    left_num = (num*10+(num//1000))%10000
    if not visited[left_num]:
      queue.append([left_num, order+"L"])
      visited[left_num] = True

    # right_num = rotate_left(num)
    right_num = (num//10+(num%10)*1000)%10000
    if not visited[right_num]:
      queue.append([right_num, order + "R"])
      visited[right_num] = True

for i in range(n):
  n1, n2 = list(map(int, input().split()))
  bfs(n1, n2)