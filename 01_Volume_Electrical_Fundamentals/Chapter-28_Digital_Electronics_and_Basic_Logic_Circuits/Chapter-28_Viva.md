\# Chapter 28

\# Viva Questions and Answers

\## Digital Electronics and Basic Logic Circuits

\---

\## Viva-001

\*\*Question\*\*

What is Digital Electronics?

\*\*Answer\*\*

Digital Electronics is the branch of Electronics that processes, stores and communicates information using discrete signal levels. Most Digital systems use Binary Logic, where 0 and 1 represent two defined Voltage ranges rather than exact single Voltages.

\*\*Key Points\*\*

\- Uses discrete signal levels
\- Commonly based on Binary 0 and 1
\- Performs Logic, arithmetic, storage and control
\- Used in computers, controllers and instruments

\*\*Remember\*\*

Digital does not mean that Logic 0 must always be exactly 0 V; devices define valid Voltage ranges.

\*\*Follow-up Questions\*\*

1. What is a Logic level?
2. Name three Digital systems.
3. Why is Binary suitable for electronic circuits?
4. What is a Digital signal?

\*\*Reference\*\*

Chapter-28 → Topic-01

\---

\## Viva-002

\*\*Question\*\*

Differentiate between Analog and Digital systems.

\*\*Answer\*\*

An Analog system represents information with continuously varying quantities, while a Digital system uses discrete levels. Analog signals naturally represent quantities such as temperature and sound. Digital signals provide easier storage, processing, copying and noise-resistant decision-making within specified limits.

\*\*Key Points\*\*

\- Analog: continuous values
\- Digital: discrete values
\- Analog is directly affected by small variations
\- Digital information is easier to process and store

\*\*Remember\*\*

Real-world signals are often Analog, but modern controllers process their Digital representations.

\*\*Follow-up Questions\*\*

1. Give two Analog examples.
2. Give two Digital examples.
3. What converts Analog signals to Digital form?
4. Can Digital signals be affected by noise?

\*\*Reference\*\*

Chapter-28 → Topic-02

\---

\## Viva-003

\*\*Question\*\*

What is a Number System, and what is radix?

\*\*Answer\*\*

A Number System is a defined method of representing quantities using a set of symbols and positional rules. The radix or base is the number of distinct digits available in that system. Decimal, Binary, Octal and Hexadecimal have radices 10, 2, 8 and 16 respectively.

\*\*Key Points\*\*

\- Decimal base = 10
\- Binary base = 2
\- Octal base = 8
\- Hexadecimal base = 16

\*\*Remember\*\*

The highest digit in a positional system is always one less than its radix.

\*\*Follow-up Questions\*\*

1. Which digits are used in Binary?
2. Which symbols are used in Hexadecimal?
3. What is the positional weight of a digit?
4. Why are Octal and Hexadecimal useful?

\*\*Reference\*\*

Chapter-28 → Topic-03

\---

\## Viva-004

\*\*Question\*\*

How do you convert a Binary number into Decimal form?

\*\*Answer\*\*

Multiply each Binary digit by its corresponding power of 2 and add the results. For example, 1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 2 + 1 = 11₁₀.

\*\*Key Points\*\*

\- Start positional weights from 2⁰ at the right
\- Multiply each bit by its weight
\- Add all weighted values
\- Preserve the base notation in the answer

\*\*Remember\*\*

The rightmost Binary digit is the least significant bit.

\*\*Follow-up Questions\*\*

1. Convert 1101₂ to Decimal.
2. What is an MSB?
3. What is an LSB?
4. How is a Binary fraction weighted?

\*\*Reference\*\*

Chapter-28 → Topic-04

\---

\## Viva-005

\*\*Question\*\*

How do you convert a Decimal integer into Binary form?

\*\*Answer\*\*

Repeatedly divide the Decimal integer by 2, record each remainder and read the remainders from bottom to top. For Decimal 13, the remainders form 1101₂. The result can be checked using positional weights 8 + 4 + 1 = 13.

\*\*Key Points\*\*

\- Divide repeatedly by 2
\- Record remainders 0 or 1
\- Read remainders in reverse order
\- Verify using powers of 2

\*\*Remember\*\*

The first remainder becomes the LSB.

\*\*Follow-up Questions\*\*

1. Convert Decimal 25 to Binary.
2. How do you convert Binary to Octal quickly?
3. How do you convert Binary to Hexadecimal quickly?
4. Why are groups of three used for Octal?

\*\*Reference\*\*

Chapter-28 → Topic-04

\---

\## Viva-006

\*\*Question\*\*

State the basic rules of Binary addition and subtraction.

\*\*Answer\*\*

The main addition rules are 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1 and 1 + 1 = 10₂, which produces Sum 0 and Carry 1. In subtraction, 1 − 0 = 1, 1 − 1 = 0, and 0 − 1 requires borrowing from the next higher position.

\*\*Key Points\*\*

\- Binary arithmetic uses only 0 and 1
\- 1 + 1 produces a Carry
\- 0 − 1 requires a Borrow
\- Carry and Borrow propagate between positions

\*\*Remember\*\*

Binary 10₂ represents Decimal 2.

\*\*Follow-up Questions\*\*

1. Add 101₂ and 011₂.
2. What is a Carry?
3. What is a Borrow?
4. How can subtraction be performed using complements?

\*\*Reference\*\*

Chapter-28 → Topic-05

\---

\## Viva-007

\*\*Question\*\*

What is BCD, and how does it differ from a pure Binary number?

\*\*Answer\*\*

Binary Coded Decimal represents each Decimal digit separately using a four-bit code. For example, Decimal 59 is 0101 1001 in 8421 BCD. Its pure Binary representation is 111011₂, so BCD and ordinary Binary must not be treated as the same coding method.

\*\*Key Points\*\*

\- Each Decimal digit receives four bits
\- Valid 8421 BCD digit codes are 0000 to 1001
\- Codes 1010 to 1111 are invalid as single BCD digits
\- Useful in Decimal displays and instruments

\*\*Remember\*\*

Encode each Decimal digit separately in BCD.

\*\*Follow-up Questions\*\*

1. Write Decimal 27 in BCD.
2. Why are six four-bit combinations invalid in BCD?
3. Where is BCD used?
4. What does 8421 mean?

\*\*Reference\*\*

Chapter-28 → Topic-06

\---

\## Viva-008

\*\*Question\*\*

What is Gray Code, and why is it used?

\*\*Answer\*\*

Gray Code is a non-weighted Binary code in which adjacent values differ by only one bit. This property reduces uncertainty when a sensor moves from one position to the next, so Gray Code is widely used in rotary encoders and position-measurement systems.

\*\*Key Points\*\*

\- Adjacent codes differ by one bit
\- Non-weighted code
\- Reduces transition ambiguity
\- Common in position encoders

\*\*Remember\*\*

Gray Code changes one bit at a time.

\*\*Follow-up Questions\*\*

1. Is Gray Code a weighted code?
2. Where is Gray Code used?
3. Why can ordinary Binary cause transition errors?
4. How is Binary converted to Gray Code?

\*\*Reference\*\*

Chapter-28 → Topic-07

\---

\## Viva-009

\*\*Question\*\*

What is a Logic Gate?

\*\*Answer\*\*

A Logic Gate is an electronic circuit that performs a Boolean operation on one or more Binary inputs and produces a Binary output. AND, OR, NOT, NAND, NOR, XOR and XNOR are common Logic Gates.

\*\*Key Points\*\*

\- Implements a Boolean function
\- Accepts Binary Logic inputs
\- Produces a Binary Logic output
\- Basic building block of Digital circuits

\*\*Remember\*\*

Logic Gates convert logical conditions into electrical decisions.

\*\*Follow-up Questions\*\*

1. Which Gate has only one input in its basic form?
2. What is positive Logic?
3. Name the Universal Gates.
4. What determines a Gate's output?

\*\*Reference\*\*

Chapter-28 → Topic-08

\---

\## Viva-010

\*\*Question\*\*

Explain the operations of AND, OR and NOT Gates.

\*\*Answer\*\*

A two-input AND Gate gives 1 only when both inputs are 1. An OR Gate gives 1 when at least one input is 1. A NOT Gate has one input and produces its complement, changing 0 to 1 and 1 to 0.

\*\*Key Points\*\*

\- AND: Y = A·B
\- OR: Y = A + B
\- NOT: Y = A̅
\- These Gates form basic Logic decisions

\*\*Remember\*\*

AND needs all; OR needs any; NOT reverses.

\*\*Follow-up Questions\*\*

1. Draw the Truth Table of an AND Gate.
2. Give a practical AND operation example.
3. What is an Inverter?
4. Does Boolean plus mean ordinary addition?

\*\*Reference\*\*

Chapter-28 → Topic-08

\---

\## Viva-011

\*\*Question\*\*

Why are NAND and NOR called Universal Gates?

\*\*Answer\*\*

NAND and NOR are called Universal Gates because every basic Gate and any Boolean function can be constructed using only NAND Gates or only NOR Gates. This gives designers a common Gate type for implementing complete Logic systems.

\*\*Key Points\*\*

\- NAND = complemented AND
\- NOR = complemented OR
\- Either can realize NOT, AND and OR
\- Can implement any Boolean function

\*\*Remember\*\*

NAND and NOR are individually universal.

\*\*Follow-up Questions\*\*

1. How can NAND be used as a NOT Gate?
2. How can NOR be used as a NOT Gate?
3. Write the NAND expression.
4. Write the NOR expression.

\*\*Reference\*\*

Chapter-28 → Topic-08

\---

\## Viva-012

\*\*Question\*\*

Differentiate between XOR and XNOR Gates.

\*\*Answer\*\*

A two-input XOR Gate produces Logic 1 when its inputs are different. An XNOR Gate is the complement of XOR and produces Logic 1 when its inputs are equal. XOR is useful in addition and inequality detection, while XNOR is useful in equality comparison.

\*\*Key Points\*\*

\- XOR detects different inputs
\- XNOR detects equal inputs
\- XOR expression: A ⊕ B
\- XNOR is complemented XOR

\*\*Remember\*\*

XOR = difference; XNOR = equality.

\*\*Follow-up Questions\*\*

1. What is the XOR output for inputs 1 and 1?
2. Which Gate produces the Sum in a Half Adder?
3. Where is XNOR used?
4. Is XOR a Universal Gate?

\*\*Reference\*\*

Chapter-28 → Topic-08

\---

\## Viva-013

\*\*Question\*\*

What is a Truth Table?

\*\*Answer\*\*

A Truth Table lists every possible input combination of a Logic function and the corresponding output for each combination. A circuit with n Binary inputs has 2ⁿ input combinations, so a three-input circuit requires eight rows.

\*\*Key Points\*\*

\- Complete functional description
\- Lists all Binary input combinations
\- Shows corresponding outputs
\- Number of rows = 2ⁿ

\*\*Remember\*\*

A Truth Table is the behavior map of a Logic circuit.

\*\*Follow-up Questions\*\*

1. How many rows does a four-input Truth Table have?
2. What is a Boolean expression?
3. Can a Truth Table describe a complete circuit?
4. How are inputs arranged systematically?

\*\*Reference\*\*

Chapter-28 → Topic-09

\---

\## Viva-014

\*\*Question\*\*

What is Boolean Algebra, and why is it important?

\*\*Answer\*\*

Boolean Algebra is a mathematical system for variables that normally have two values, 0 and 1. It represents and manipulates Logic functions using operations such as AND, OR and NOT. Engineers use it to analyze, verify and simplify Digital circuits.

\*\*Key Points\*\*

\- Variables have Binary values
\- AND, OR and NOT are fundamental operations
\- Describes Digital Logic mathematically
\- Supports circuit simplification

\*\*Remember\*\*

Boolean operations follow Logic laws, not ordinary arithmetic rules.

\*\*Follow-up Questions\*\*

1. What does Boolean multiplication mean?
2. What does Boolean addition mean?
3. State the Complement Law.
4. State the Identity Law.

\*\*Reference\*\*

Chapter-28 → Topic-10

\---

\## Viva-015

\*\*Question\*\*

State De Morgan's Theorems and explain their use.

\*\*Answer\*\*

De Morgan's Theorems state that the complement of a product equals the sum of the complements, and the complement of a sum equals the product of the complements: overline(A·B) = A̅ + B̅ and overline(A + B) = A̅·B̅. They help transform and simplify complemented Logic expressions.

\*\*Key Points\*\*

\- Complemented AND changes to OR
\- Complemented OR changes to AND
\- Every variable is complemented
\- Useful for NAND and NOR implementation

\*\*Remember\*\*

Break the complement bar, complement each term and interchange AND with OR.

\*\*Follow-up Questions\*\*

1. Simplify overline(A + B).
2. How does De Morgan's theorem help NAND implementation?
3. Does the theorem apply to more than two variables?
4. What happens to every variable under the bar?

\*\*Reference\*\*

Chapter-28 → Topic-12

\---

\## Viva-016

\*\*Question\*\*

What is Logic circuit simplification, and what are its benefits?

\*\*Answer\*\*

Logic circuit simplification finds a smaller Boolean expression that produces exactly the same output for every input combination. It can reduce Gate count, wiring, propagation delay, Power Consumption, cost and fault probability.

\*\*Key Points\*\*

\- Preserves the original Truth Table
\- Uses Boolean laws or K-Maps
\- Reduces hardware complexity
\- Improves economy and reliability

\*\*Remember\*\*

An expression is simplified only when its Logic behavior remains unchanged.

\*\*Follow-up Questions\*\*

1. Simplify A + A·B.
2. What is the Absorption Law?
3. How can simplification reduce delay?
4. Name two simplification methods.

\*\*Reference\*\*

Chapter-28 → Topic-13

\---

\## Viva-017

\*\*Question\*\*

What is a Karnaugh Map, and how is it used?

\*\*Answer\*\*

A Karnaugh Map is a visual arrangement of Truth Table values used to simplify Boolean expressions. Adjacent cells differ in only one variable. The designer groups adjacent 1s in rectangular groups of 1, 2, 4, 8 or another power of two and keeps only the variables that remain constant within each group.

\*\*Key Points\*\*

\- Visual simplification method
\- Contains 2ⁿ cells for n variables
\- Uses Gray Code cell order
\- Groups powers of two

\*\*Remember\*\*

Use the largest valid groups and remember that opposite K-Map edges are adjacent.

\*\*Follow-up Questions\*\*

1. How many cells are in a four-variable K-Map?
2. Why is Gray Code order used?
3. Can K-Map groups overlap?
4. What group sizes are valid?

\*\*Reference\*\*

Chapter-28 → Topic-14

\---

\## Viva-018

\*\*Question\*\*

Compare a Half Adder and a Full Adder.

\*\*Answer\*\*

A Half Adder adds two one-bit inputs and gives Sum and Carry outputs, but it has no Carry-in input. A Full Adder adds two bits plus an incoming Carry and also produces Sum and Carry-out. Full Adders can therefore be cascaded for multi-bit addition.

\*\*Key Points\*\*

\- Half Adder inputs: A and B
\- Full Adder inputs: A, B and Carry-in
\- Both produce Sum and Carry
\- Full Adders support multi-bit addition

\*\*Remember\*\*

Half Adder has no Carry-in; Full Adder includes Carry-in.

\*\*Follow-up Questions\*\*

1. Write the Half Adder Sum expression.
2. Write the Half Adder Carry expression.
3. How can two Half Adders form a Full Adder?
4. Where are Adders used?

\*\*Reference\*\*

Chapter-28 → Topic-15

\---

\## Viva-019

\*\*Question\*\*

Compare a Multiplexer and a Demultiplexer.

\*\*Answer\*\*

A Multiplexer selects one of several Data inputs and forwards it to one output. A Demultiplexer receives one Data input and routes it to one of several outputs. Select lines determine the active path in both circuits.

\*\*Key Points\*\*

\- MUX: many inputs to one output
\- DEMUX: one input to many possible outputs
\- Select lines control routing
\- Used in Data communication and control

\*\*Remember\*\*

MUX selects an input; DEMUX selects a destination.

\*\*Follow-up Questions\*\*

1. How many Select lines does a 4-to-1 MUX need?
2. What is Data routing?
3. Give one MUX application.
4. Give one DEMUX application.

\*\*Reference\*\*

Chapter-28 → Topic-15

\---

\## Viva-020

\*\*Question\*\*

Compare an Encoder and a Decoder and state their applications.

\*\*Answer\*\*

An Encoder converts one active input among several lines into a coded Binary output. A Decoder performs the reverse type of operation by converting a Binary input code into one selected output. Encoders are used in keyboards and priority systems, while Decoders are used for display selection, memory addressing and device selection.

\*\*Key Points\*\*

\- Encoder: active input to Binary code
\- Decoder: Binary code to selected output
\- Encoder reduces the number of information lines
\- Decoder activates a specific destination

\*\*Remember\*\*

Encoding creates a code; decoding interprets it.

\*\*Follow-up Questions\*\*

1. What is a Priority Encoder?
2. What is a 3-to-8 Decoder?
3. Where is a Decoder used in a display?
4. How do Enable inputs control these circuits?

\*\*Reference\*\*

Chapter-28 → Topic-15

\---

\# End of Chapter 28 Viva
