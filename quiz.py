import json

print("Hello World")

with open('part2.json') as json_file:
	data = json.load(json_file)
	for p in data['quiz']:
		print('Question' + p['question'])
		print('')
