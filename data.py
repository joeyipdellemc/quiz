import json

data ={}
data['people'] = []
data['people'].append({'question':'1'})
data['people'].append({'question':'2'})
with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)