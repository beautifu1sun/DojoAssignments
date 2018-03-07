def sort(arr):
    for i in range(0, len(arr)-1):
        for k in range(0, len(arr)-1-i):
            if arr[k]>arr[k+1]:
                arr[k],arr[k+1]=arr[k+1],arr[k]
    return arr
print(sort([6,5,3,1,8,7,2,4]))