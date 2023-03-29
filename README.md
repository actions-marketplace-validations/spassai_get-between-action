# Get find and substring between two strings action

- This action first finds the substrings that start with start and end with end in the given string string.
- It then extracts the substring between the start and end substrings from the result of the previous step.
- The start and end substrings are specified as arguments to the action.
- The action returns the substring between the start and end substrings, excluding the start and end substrings themselves.

## Inputs

### `string`

**Required** The input string

### `start`

**Required** The starting substring to search for

### `end`

**Required** The ending substring to search for

### `defaultString`

**Optional** Default string to return if the desired string is not found

## Outputs

### `substring`

- The substring between the start and end substrings (excluding the start and end substrings themselves)

## Example usage

```yaml
uses: spassai/get-between-action
with:
  string: '<div><p>Hello</p></div>'
  start: '<p>'
  end: '</p>'
```
