### MCSL-205 SECTION - 1(C PROGRAMING)
1. we use either TURBO C/C++ or BORLAND C/C++, but as per syllabus you can use BORLAND C/C++.
2. before going TO LEARN programming we should learn what is programming and why programming is required which is already discussed.
3. we need to know every programming has its GRAMMAR; grammar means there is some certain rule and regulation that has to follow and programming needs some in built things and predefined things.
4. every program has syntax which we must follow.

# write a program in C to print a massage.
means we need syntax of C 
include header file → main(){ body of program }

1. this is main function but 
2. there is some functions to be memorized  whatever the function!
3. what is the function-
               function  is set of instruction which can execute and produce result.
4. In mathematics we learn that if we write f() -- then we call function.
   so f(x) -- function of 'x'.

## Before going programming we encounter some function , symbols , keyword required to do programming.

1. Header file - Header file are those library which is required to compile and run the particular program.
for C the common header file -
"stdio.h" - standard input output.----
                                       |----common header file which can use in each and every program.
"conio.h" - console input output.--------  
   
After this we have-
"stdlib.h"-------
"math.h"--------|----common for different type of programming.
"string.h"-------
 
what is use of header file ?
when we write a program so header file use to attach the right compiler to link to translator.

2. Keyword-
lots of keyword, we will learn about keyword from block 1
the most important function is-
printf(); -- print the function.
scanf(); -- read the function.
getch(); -- get the character.
clrscr(); -- clear the screen.

## Now writing program-
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
void main(){
     printf("Hello Friends"); //output "Hello Friends"
     getch();
}```

1.(##) what is # ?
("#")is preprocessor that kind of file which directly included to the system(compiler)
	
header file - for create enviorment of program
void main () {} - for body of program
getch() - to hold output stream.

we can add five printf-
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
void main(){
     printf("Hello Friends\n"); //5 time output "Hello Friends"
     printf("Hello Friends\n");
     printf("Hello Friends\n");
     printf("Hello Friends\n");
     printf("Hello Friends\n");
      
     getch();
}```
It is use of new line character "\n".


## Can we write return 0 instead of getch() or is it compulsory to write getch() ?
why and when we use "return 0" ?
when we write integer value then we write return 0. in the code block there is not use of int data type.
like -
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
int main(){  //changes to void to int
     printf("Hello Friends"); //output "Hello Friends"
     
     return 0;
}```
It will not run the program.
Why int main -- because body should be written in integer type.

## We have to mathematical calculation so what we do ?
*Arithmetical program*
1. number-
 Data type-
 integer → int →"%d" → +32767 to -32768 → 2bytes
 character → char → "%c" → +127 to -128 → 1byte
 float → float → "%f" → +3.4 × 10e-38 to -3.4 × 10e+38 → 4 bytes

program to add two number-
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
void main() {
 int a = 4, b = 6, c;
   
  c = a + b;
  
  printf("Sun = %d", c); 
  printf("sun of %d and %d = %d", a, b, c); //sum of 4 and 6 = 10

getch();
}```

## use of user input-
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
void main() {
 int a = 4, b = 6, c;
printf("enter first number:");
scanf("%d", &a);

printf("Enter the second number");
scanf("%d", &b);
   
  c = a + b;
  
  printf("Sun = %d", c); 
  printf("sun of %d and %d = %d", a, b, c); //sum of 4 and 6 = 10

getch();
}```
After run the program it will ask number first then compute and print as per the program.

##Do by yourself 
Write a program to print area and circumference of the circle.
*Area of triangle*
```BORLAND C/C++
#include <stdio.h>
#include <conio.h>
#define PI 3.14      

void main() {
    int r;
    float area, cir;      
    printf("Enter the radius: ");
    scanf("%d", &r);

    area = PI * r * r;  
    cir = 2 * PI * r; 
    printf("Area = %f\n", area);
    printf("cir = %f", cir); 
    getch(); 
}```
 

if different compiler are giving different values for catalogs so how can we trust these compiler build complex program instructions ?
so every specific programming language has different kind of compiler like c and C++ we have turbo c and Borland c. if we are using g++ so we have some difference because different kind of platform and there is basic criteria to maintain all these disability. so for C and C++, whenever we are using C /C++ use either turbo C/C++ or Borland C/C++. that is best compiler, other compiler like other user using that are made for specific purpose only. like g++ is made for graphics part so that's the reason not showing. Use turbo or Borland compiler. 


*HOMEWORK*
1.write a program to find area and perimeter of rectangle.
2.write a program to sum and average of three number.

## Conditional Statement
1. if-else
use in English - if it will raid today i will not go school. 
1.e.- Check the greater number between two number
```BORLAND C/C++
  void main() {
 int a, b;
 a = 6;
 b = 8;

 if(a>b){
         printf("a is greater");
 }
  else {
        printf("b is greater");
}
}```

i.e. - Check the greater number between three number.
```void main (){
int a, b, c;
a = 6;
b = 7;
c = 8;

if(a>b && a>c){
printf("a is greater");
}
else if(b > c){
printf("b is greater");
}
else{
printf("c is greater");
}
}```

User input-
```BORLAND C/C++
  void main() {
 int a, b;
 a = 6;
 b = 8;

 if(a>b){
         printf("a is greater");
 }
  else {
        printf("b is greater");
}
}```
 2. else if
i.e. - Check the greater number between three number.
```void main (){
int a, b, c;
a = 6;
b = 7;
c = 8;

printf("enter three number: ");
scanf("%d %d %d", &a, &b, &c);

if(a>b && a>c){
printf("a is greater");
}
else if(b > c){
printf("b is greater");
}
else{
printf("c is greater");
}
}```

i.e. - Make a program to find out leap year.
```BORLAND C/C++
void main() {
int year, leapYear;
printf("enter your year: ");
scanf("%d", &year);
leapYear = year % 4;
if (leapYear == 0 && leapYear != 0) || ((leapYear)*100 == 0) {
printf("this is leap year");
}
else{
printf("this is not leap year");
}
}


i.e. - write a program check weather the student is eligible for BTECH or not the condition are qualification should be >= 12 and marks percent should be > 75.

```BORLAND C/C++
void main(){
    int qual, marks;
    printf("enter your qualification: ");
    scanf("%d", &qual);
    
    printf("enter your 12 marks: ");
    scanf("%d", &marks);
    
    
    if(qual >= 12 && marks > 75){
        printf("your are eligible for BTECH\n");
        else {
            printf("your are not eligible try next year");
        }
    }getch();
    
}``` 


i.e. - Make a program to check weather between two student for which one's age is bigger. 
```BORLAND C/C++
 void main(){
int age1, age2;
printf("enter first student age: ");
scanf("%d", &age1);

printf("enter age of second student: ");
scanf("%d", &age2);

if(age1 > age2){
printf("the first student is bigger.");
}
else{
printf("the second student is bigger.");
}
getch();
}```

~~END OF CLASS~~ but **LAB WILL BE CONTINUE**
 
*HOMEWORK*
if else normal program learn and practice.
develop algorithm of each program what have done.


