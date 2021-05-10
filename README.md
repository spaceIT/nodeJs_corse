# nodeJs_corse

### CLI tool should accept 4 options (short alias and full name):

1) -a, --action: an action encode/decode
2) -s, --shift: a shift as number
3) -i, --input: an input file or use stdin for default value
4) -o, --output: an output file or use stdout for default value
 
### Example : 

`node index  -a encode -s 1 -i input.txt -o output.txt`

`node index  --action decode --shift 3 --input input.txt --output output.txt`

`node index -a encode -s 1`