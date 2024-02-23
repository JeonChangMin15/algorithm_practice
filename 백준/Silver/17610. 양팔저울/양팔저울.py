def DFS(L, sum):
    global res
    if L == n:
        if 0 < sum <= s:
            res.add(sum)

    else:
        DFS(L + 1, sum + G[L])
        DFS(L + 1, sum - G[L])
        DFS(L + 1, sum)


if __name__ == "__main__":
    n = int(input())
    G = list(map(int, input().split()))
    s = sum(G)
    res = set()  # 측정될 수 있는 물의 무게 추가
    DFS(0, 0)
    print(s - len(res))
