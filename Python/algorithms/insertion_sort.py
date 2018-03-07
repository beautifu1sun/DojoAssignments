def sort(arr):
    for i in range(1,len(arr)):
        for k in range(i, 0, -1):
            if arr[k-1]>arr[k]:
                arr[k-1], arr[k] = arr[k], arr[k-1]
    return arr

print(sort([6,5,3,1,8,7,2,4]))