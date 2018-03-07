def sort(arr):
    for i in range(0, len(arr)-1):
        minIndex = i
        for k in range(i+1, len(arr)):
            if arr[k]<arr[minIndex]:
                minIndex = k
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr

print(sort([8,5,2,6,9,3,1,4,0,7]))