wordLen, sampleN = list(map(int, input().split()))
samples = input().split()
samples.sort()
fiveAlphabet = ['a','e','i','o','u']
answer = []

def dfs(arr:list, start:int):
  if len(arr) == wordLen:
    alpha = 0
    notAlpha = 0
    for str in arr:
      if str in fiveAlphabet:
        alpha += 1
      else:
        notAlpha += 1

    if alpha >= 1 and notAlpha >=2:
      answer.append("".join(arr))
  
    return
  
  for i in range(start, sampleN):
    arr.append(samples[i])
    dfs(arr, i + 1)
    arr.pop()

dfs([], 0)

print("\n".join(answer))