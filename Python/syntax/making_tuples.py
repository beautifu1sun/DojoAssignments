def dict_in_tupl_out(givenDict):
    return givenDict.items()

my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

print(dict_in_tupl_out(my_dict))