import pandas
import json

data = pandas.read_csv('scripts\\airport-codes.csv')

names = data['name']
iata_codes = data['iata_code']

result = data[['name', 'iata_code']]

codes = {}

for i in range(result['name'].size):
    ac_code = result.iloc[i][1]
    name = result.iloc[i][0]

    codes[ac_code] = name

f = open("ac_codes.json", "w")
f.write(json.dumps(codes, indent=4))
f.close()

print(codes['ACD'])