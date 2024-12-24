dayN, termN = list(map(int, input().split()))
arr = list(map(int, input().split()))
window_sum = sum(arr[0:termN])
maxVisit = window_sum
cnt = 1

# i = termN 부터 N-1까지(즉 i는 '윈도우의 끝' 인덱스)
for i in range(termN, dayN):
    # 직전 윈도우에서 맨 왼쪽(arr[i-termN]) 빼고, 새로 들어오는 arr[i] 더하기
    window_sum = window_sum - arr[i - termN] + arr[i]

    if window_sum > maxVisit:
        maxVisit = window_sum
        cnt = 1
    elif window_sum == maxVisit:
        cnt += 1

if maxVisit == 0:
    print("SAD")
else:
    print(maxVisit)
    print(cnt)