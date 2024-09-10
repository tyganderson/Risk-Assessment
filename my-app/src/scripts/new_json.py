import json

# Load the JSON data from a file
with open('scripts\\ac_codes.json', 'r') as file:
    airports_json = json.load(file)

# Convert JSON object to the desired array format
airports_list = [{"iata": iata, "name": name} for iata, name in airports_json.items()]

# Optionally, print the converted list to verify
print(json.dumps(airports_list, indent=2))

# If you need to save the result to a new file:
with open('formatted_ac_codes.json', 'w') as outfile:
    json.dump(airports_list, outfile, indent=2)
