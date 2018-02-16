def draw_stars(arr):
    for ind in range(len(arr)):
        line = ""
        if isinstance(arr[ind], int):
            for i in range(arr[ind]):
                line += "*"
            print (line)
            line = ""    
        elif isinstance(arr[ind], str):
            char = arr[ind][0].lower()
            for i in range(len(arr[ind])):
                line += char
            print (line)
            line = ""

draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])        
