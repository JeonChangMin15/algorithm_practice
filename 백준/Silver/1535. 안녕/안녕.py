n = int(input())
tired = list(map(int, input().split()))
happy = list(map(int, input().split()))
sayHello = [False]*n
answer = 0

def dfs(start):
  global answer
  person = []
  for i in range(n):
    if sayHello[i]:
      person.append(i)
  totalTired = 0
  totalHappy = 0

  for i in person:
    totalTired += tired[i]
    totalHappy += happy[i]
  
  if totalTired < 100:
    answer = max(totalHappy, answer)
  
  for i in range(start, n):
    sayHello[i] = True
    dfs(i+1)
    sayHello[i] = False

dfs(0)

print(answer)

