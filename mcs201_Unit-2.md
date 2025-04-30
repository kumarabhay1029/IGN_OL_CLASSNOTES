### UNIT-2 DATA TYPES, OPERATORS AND EXPRESSION

# What are the DATA TYPES ?
Data Types are those from which we can store the data , identifies the data that what type of data going to as input and operates on that.

## BASIC DATA TYPES
| DATA TYPE             | MEMORY | RANGE                |
|-----------------------|--------|----------------------|
|1.Integer-int          |2 Bytes | –32,768 to 32,767    |
|2.Character-char       |1 Byte  | –128 to 128          |
|3.Floating point-float |4 Bytes | 3.4e–38 to 3.4e+38   |
|4.Double Float-double  |8 Bytes | 1.7e–308 to 1.7e+308 |
 
## DATA TYPE QUALIFIERS
| Data type        | Size (bytes) | Range                          |
|------------------|--------------|--------------------------------|
| Short int or int | 2            | -32,768 to 32,767              |
| Long int         | 4            | -2,147,483,648 to 2,147,483,647|
| Signed int       | 2            | -32,768 to 32,767              |
| Unsigned int     | 2            | 0 to 65,535                    |
| Signed char      | 1            | -128 to 127                    |
| Unsigned char    | 1            | 0 to 255                       |

## VARIABLES
what is variable ?
1. Basically Variable are the identifiers.
2. its stores data or value for future references to use in program.
i.e. `int a` :- "int" is DATA TYPE and "a" is variable.
It means "a" will going to memory and it will take 2 bytes of space and if we write a = 5 the value will going in this location which is occupied by "a".
3. variable is a name which is identified which is declare with help of data type and specifies that it take space(memory space) and stores data for operational purpose.

## DECLARING VARIABLE
if i type int "a" it means its declared;
 
### INITIALISING VARIABLEAS
Variable initializing means assigning a value to a variable.
1. WITHIN A TYPE DECLRATION 
   `int a=10;`

2. USING ASSIGNMENT STATEMENT
   if we have any variable and we r going to assign to particular value to particular variable assigning a value via assignment operator.
NOTE:- "=" - It is assignment operator. 
if i am writing "int a" it means we have declared the variable with type integer but if i am writing "a=5" after the declaration it means i am assigning a value "5" to variable "a".it means it will go directly at the location of "a" and it will store there.

## CONSTANTS
Whenever we are going to any kind of number there are certain rules and regulation which we have to follow and that is called constraints.
there are certain rules what should in integer and what should do not write in integer type that is the constant.
Constraints based on the identifiers there are some rules and there is four type of constants that is-

### Integer constants-
Let suppose i am writing  anything like 1, 443, 32767(–32,768 to 32,767 this is range) this is right way to write integers.
1.Decimal integers constants
Consider like we typed-
12,45------
12.45     |___ WHY ?   
1 245     |
0785-------
We can't write this kind of value in integers type and that's why we say constants - there are certain rules we can't right comma, we can't right dot , we can't write space btw two number we can't start number with 0 by mathematical law.
 
2. Octal integer constants-
Range of the octal-8
Base of the octal- 0 to 7	
so we can write-
0    01    0747   0777
invalided octal int constants
743 - does not begin with "0"
0438 - illegal character "8" 
0.777.77 - illegal char (point)

3. Hexadecimal integer constants-
Valid Hexadecimal integers constants are-
0X0   0X1  0XF77  0xABCD
Invalid Hexadecimal int constants are-
0BEF - x is not included 
0x.4bff - illegal char(point)
0XGBC - illegal "G"
Unsigned integers constants  
long integers constants 
 
### Floating point constants-
floating point - numbers those have floating point part.
i.e. - +12.34-the number is in float why ?
  because there is decimal point after "2".
there is three part of floating point number 
sign-"+"
mantissa-12
exponent-"-2" we can write +12.34 → +1232 × 10e-2.

### character constants-
We have to write only one character in single quate('') int the variable.
i.e. `char ver;`
          ver = 'a'
1.Escape Sequence-
 it is use by backslash(\).
"\n" - New line character
"\t" - tab
"\a" - 	alarm
"\\" - for one backslash 

### String constants-
What is string - When we write multiple character in single quate(""/'').
i.e. - "red"  "Blue"  "412113*(1+3)"
there is no data type of string in C, we say string - "array of character"
 i.e. `char name[20] = "Brijesh";`

## SYMBOLIC CONSTANTS AND OTHERS
there are symbolic constants which can defined outside the main body of the program.
i.e.- #define printf print
      #define MAX     100
      #define TRUE    1
      #define FALSE   0
      #define SIZE    10
      #define PI      3.141592
      
   Expression
 ↙           ↘
Opcode       operand
  |
  v
Operator 

z = a + b - this is expression 
"z, a, b" are operands , "a + b" is opcode where "+" is operator and "=" is assignment operator.

##ARITHEMATIC OPERATORS 
|Operator| Meaning        |
|--------|----------------|
|+       |Addition        |
|-       |Subtraction     |
|*       |Multiplication  |
|/       |Division        | 
|%       |Modular Division|

but there is secretly two types of division here first is simpler division and another is modulus division
"/" - quotient 
"%" - remainder or logically last digit of the numbers.

if we wrote a = 5; and b = 6; c = a + b; then c = 11; if c = a × b; c = 30;
if we wrote b = 13; d = 5; e = b / d; e = 2 and if e = b % d; e = 3;
 
There are two more operators 
1. Increment operator - (++)
 i.e. - ```int a; 
           a = 5; 
           a++;```

there three way to do -
a++, a =  a + 1, a += 1.

there are two types of increment-
1.if we write a++; it is post-increment +1 then use "a"
2.if we write ++a; it is pre-increment use "a" then +1.

i.e. - 
```C\C++
    int a =2, b = 3;
    int c;
    c = ++a - b--;
    printf("a=%d, b =%d, c = %d", a, b, c);
```

## Relational Operators
   Shows or tells interrelation between two variables.


| Relational Operator | Condition | Meaning                         |
|---------------------|-----------|---------------------------------|
| ==                  | x == y    | x is equal to y                 |
| !=                  | x != y    | x is not equal to y             |
| <                   | x < y     | x is less than y                |
| <=                  | x <= y    | x is less than or equal to y    |
| >                   | x > y     | x is greater than y             |
| >=                  | x >= y    | x is greater than or equal to y |

## LOGICAL OPERATORS 

|Operator |Meaning    |
|---------|-----------|
|"&&"     |Logical AND|
|"||"     |Logical OR |
|"!"      |Logical NOT|

## COMMA AND CONDITIONAL OPERATORS-
### Conditional operator-
we can use one to more variable at a time.

Syntax-
(condition)? (expression1):(expression2);
i.e. - 1. `x = (y<20), then x = 9 else x = 10;`
       2. `printf("%s\n", grade>=50?"passes":"failed");`

### Comma operator-
when we use two expression with separation.
OR we use comma op use to separate two expression.
x=(y-2, y-1);

## TYPE CAST OPERATOR
1. Whenever we want to change data types one to another.
2. but it is not work to all type of data-
    - All chars and short int are converted int. All floats are converted in double.
    - in case of binary operators if one of two operator in long double the other operator can be converted in long double.

 ## SIZE OF OPERATORS-
It tells the size of a variable.
 i.e. -  `sizeof(int);` --- 2 bytes.

## C SHORTHAND-
| Operators | Examples | Meaning            |
|-----------|----------|--------------------|
| +=        | a += 2   | a = a + 2          |
| -=        | a -= 2   | a = a - 2          |
| *=        | a *= 2   | a = a * 2          |
| /=        | a /= 2   | a = a / 2          |
| %=        | a %= 2   | a = a % 2          |
| &&=       | a &&= c  | a = a && c         |
| !=        | a != c   | a is not equal to c|

## PRIORITY OF OPERATORS-

| Precedence | Operators                        | Associativity  |
|------------|----------------------------------|----------------|
| Highest    | `()` `++` `--` `(type)` `sizeof` | Left to right  |
|            | `*` `/` `%`                      | Left to right  |
|            | `+` `-`                          | Left to right  |
|            | `<` `<=` `>` `>=`                | Left to right  |
|            | `==` `!=`                        | Left to right  |
|            | `&&`                             | Left to right  |
|            | `||`                             | Left to right  |
|            | `?:`                             | Right to left  |
| Lowest     | `=` `+=` `-=` `*=` `/=` `%=`     | Right to left  |

1. mathematical operator work left to right. 
2. except mathematical and arithmetic all works right to left(mixed operators).
 
 ~~this is end of UNIT -2~~ 

Continue to [SECOND class note](link) 

