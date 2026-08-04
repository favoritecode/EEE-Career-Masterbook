\# Chapter 11

\# Complex Numbers, Phasors and AC Mathematics

\---

\## Introduction

Alternating Voltage and Current vary continuously with time. When AC quantities have different magnitudes and phase angles, ordinary arithmetic alone becomes inconvenient. Complex Numbers and Phasors provide a compact engineering method for representing magnitude and phase together.

A Complex Number contains a Real Part and an Imaginary Part. It may be written in Rectangular Form for easy addition and subtraction or in Polar Form for easy multiplication and division. A Phasor uses a Complex Number to represent the magnitude and phase of a sinusoidal AC quantity at one common frequency.

This chapter develops only the mathematics required for practical Electrical Engineering. It explains Complex Numbers, conversion methods, arithmetic, Phasors and Euler's Formula step by step. These ideas provide the mathematical foundation for AC Circuit Analysis in Chapter-12.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain the purpose of Complex Numbers in Electrical Engineering.
\- Distinguish Real and Imaginary Numbers.
\- Identify the Real and Imaginary Parts of a Complex Number.
\- Express a Complex Number in Rectangular Form.
\- Express a Complex Number in Polar Form.
\- Convert accurately between Rectangular and Polar Forms.
\- Add and subtract Complex Numbers.
\- Multiply and divide Complex Numbers.
\- Explain the meaning and limitations of a Phasor.
\- Represent sinusoidal Voltage and Current as Phasors.
\- Add and subtract AC Phasors correctly.
\- State Euler's Formula and relate it to Polar Form.
\- Apply Complex Numbers and Phasors to basic AC engineering quantities.
\- Prepare for Impedance, phase and power calculations in Chapter-12.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Complex Numbers
2\. Real and Imaginary Numbers
3\. Rectangular Form of Complex Numbers
4\. Polar Form of Complex Numbers
5\. Conversion Between Rectangular and Polar Forms
6\. Addition and Subtraction of Complex Numbers
7\. Multiplication and Division of Complex Numbers
8\. Introduction to Phasors
9\. Phasor Representation of AC Quantities
10\. Phasor Addition and Subtraction
11\. Euler's Formula (Basic Introduction)
12\. Practical Applications of Complex Numbers and Phasors in AC Circuits

\---

\## Topic 01: Introduction to Complex Numbers

\### Definition

A Complex Number is a number containing a Real Part and an Imaginary Part. It is commonly written as:

\*\*z = a + jb\*\*

where a and b are Real Numbers and j is the Imaginary Unit used in Electrical Engineering.

\---

\### Importance

Complex Numbers allow engineers to represent two related quantities, such as horizontal and vertical components or magnitude and phase, in one mathematical expression.

They are important for:

\- AC Voltage and Current calculations
\- Impedance and Admittance
\- Phase Difference
\- RLC Circuit Analysis
\- Complex Power
\- Filters and frequency response
\- Control, communication and signal systems

\---

\### Main Concepts

\#### 1. Why Ordinary Real Numbers Are Not Enough

A Real Number can represent one signed value. An AC quantity also needs a phase angle relative to a reference. Complex Numbers carry both component information in one number.

\#### 2. Imaginary Unit

In mathematics, the Imaginary Unit is often written as i. Electrical Engineering uses j because i commonly represents instantaneous Current.

\*\*j = √−1\*\*

Therefore:

\*\*j² = −1\*\*

\#### 3. Complex Plane

A Complex Number may be plotted on a Complex Plane:

\- Horizontal axis → Real Axis
\- Vertical axis → Imaginary Axis

The point (a, b) represents z = a + jb.

\#### 4. Two Equivalent Descriptions

| Form | Expression | Main Engineering Advantage |
|---|---|---|
| Rectangular | a + jb | Addition and subtraction |
| Polar | r∠θ | Multiplication and division |

\#### 5. Equality of Complex Numbers

Two Complex Numbers are equal only when both their Real Parts and Imaginary Parts are equal.

If a + jb = c + jd, then a = c and b = d.

\#### 6. Engineering Sign Convention

This chapter uses j for the Imaginary Unit and angles measured counterclockwise from the positive Real Axis unless stated otherwise.

\---

\### Real-Life Applications

Complex Numbers are used to:

\- Combine resistance and reactance into Impedance
\- Compare AC Voltage and Current phase
\- Calculate current in RLC networks
\- Represent Complex Power
\- Analyze filters and communication signals
\- Use engineering simulation and measurement software

\---

\### Key Takeaways

\- A Complex Number contains Real and Imaginary Parts.
\- Electrical Engineering uses j = √−1.
\- j² = −1.
\- Rectangular and Polar Forms describe the same number.
\- Complex Numbers make AC magnitude and phase calculations manageable.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-01: Introduction to Complex Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 02: Real and Imaginary Numbers

\### Definition

A Real Number lies on the Real Axis and has no Imaginary component. An Imaginary Number is a Real coefficient multiplied by j.

Examples:

\- 5 is Real.
\- j4 is Imaginary.
\- 5 + j4 is Complex.

\---

\### Importance

Recognizing Real and Imaginary components is necessary for interpreting resistance, reactance, Impedance and phase in AC Circuits.

\---

\### Main Concepts

\#### 1. Real Part

For z = a + jb:

\*\*Re(z) = a\*\*

In Impedance, the Real Part commonly represents Resistance.

\#### 2. Imaginary Part

For z = a + jb:

\*\*Im(z) = b\*\*

The Imaginary Part is the coefficient b, not jb. In Impedance, it commonly represents net Reactance.

\#### 3. Positive and Negative Imaginary Values

In the Complex Plane:

\- +jb lies above the Real Axis.
\- −jb lies below the Real Axis.

In standard AC Impedance notation, positive Reactance is Inductive and negative Reactance is Capacitive.

\#### 4. Powers of j

The powers repeat every four steps:

| Power | Value |
|---|---|
| j⁰ | 1 |
| j¹ | j |
| j² | −1 |
| j³ | −j |
| j⁴ | 1 |

\#### 5. Complex Conjugate

The Complex Conjugate of z = a + jb is:

\*\*z\* = a − jb\*\*

The Real Part remains unchanged and the sign of the Imaginary Part is reversed.

\#### 6. Worked Example

For z = 8 − j6:

\- Real Part = 8
\- Imaginary Part = −6
\- Complex Conjugate = 8 + j6

\---

\### Real-Life Applications

\- Resistance appears on the Real Axis of an Impedance diagram.
\- Inductive and Capacitive Reactances appear on opposite Imaginary directions.
\- Complex Conjugates are used in division and Complex Power calculations.
\- Instrument software may display Real and Imaginary measurement components.

\---

\### Key Takeaways

\- Re(a + jb) = a.
\- Im(a + jb) = b.
\- The sign of b determines the Imaginary direction.
\- Powers of j repeat every four powers.
\- A Complex Conjugate reverses only the Imaginary sign.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-02: Real and Imaginary Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 03: Rectangular Form of Complex Numbers

\### Definition

Rectangular Form expresses a Complex Number as the sum of its Real and Imaginary components:

\*\*z = a + jb\*\*

It is also called Cartesian Form.

\---

\### Importance

Rectangular Form makes addition and subtraction direct because like components can be combined separately.

\---

\### Main Concepts

\#### 1. Coordinate Meaning

The number a + jb corresponds to the point (a, b) on the Complex Plane.

\#### 2. Four Quadrants

| Quadrant | Real Part | Imaginary Part | Typical Angle Range |
|---|---:|---:|---:|
| I | Positive | Positive | 0° to 90° |
| II | Negative | Positive | 90° to 180° |
| III | Negative | Negative | −180° to −90° or 180° to 270° |
| IV | Positive | Negative | −90° to 0° |

\#### 3. Purely Real Number

If b = 0, then z = a. Its angle is normally 0° for positive a and 180° for negative a.

\#### 4. Purely Imaginary Number

If a = 0, then z = jb. Its angle is +90° for positive b and −90° for negative b.

\#### 5. Engineering Example

An Impedance written as:

\*\*Z = 6 + j8 Ω\*\*

has 6 Ω Resistance and +8 Ω Inductive Reactance.

\#### 6. Advantages and Limitations

Rectangular Form is excellent for component-wise addition and subtraction. Multiplication and division are possible but usually require more algebra than Polar Form.

\---

\### Real-Life Applications

Rectangular Form is used for:

\- Adding Series Impedances
\- Separating Resistance and Reactance
\- Combining Complex Power components
\- Plotting Complex quantities
\- Entering data into engineering software

\---

\### Key Takeaways

\- Rectangular Form is a + jb.
\- a is the horizontal Real component.
\- b is the vertical Imaginary component.
\- Signs determine the Complex Plane quadrant.
\- Rectangular Form is preferred for addition and subtraction.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-03: Rectangular Form of Complex Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 04: Polar Form of Complex Numbers

\### Definition

Polar Form expresses a Complex Number by its magnitude and angle:

\*\*z = r∠θ\*\*

where r is the magnitude and θ is the phase angle measured from the positive Real Axis.

\---

\### Importance

Polar Form clearly displays magnitude and phase and makes multiplication and division simple.

\---

\### Main Concepts

\#### 1. Magnitude

For z = a + jb:

\*\*r = |z| = √(a² + b²)\*\*

Magnitude is non-negative.

\#### 2. Phase Angle

The basic tangent relation is:

\*\*θ = tan⁻¹(b/a)\*\*

The correct quadrant must be determined from the signs of a and b. A calculator's atan2(b, a) function handles quadrants directly when available.

\#### 3. Angle Units

Engineering Phasors are often expressed in degrees. Mathematical exponential functions may use radians. Calculator mode must match the intended unit.

\#### 4. Equivalent Angles

Angles differing by 360° describe the same direction:

\*\*10∠30° = 10∠390°\*\*

Principal angles are commonly written within a selected range such as −180° to +180°.

\#### 5. Worked Example

For z = 3 + j4:

\*\*r = √(3² + 4²) = 5\*\*

\*\*θ = tan⁻¹(4/3) = 53.13°\*\*

Therefore:

\*\*3 + j4 = 5∠53.13°\*\*

\#### 6. Polar Form Limitation

Polar numbers should not normally be added or subtracted by adding magnitudes and angles separately. Convert to Rectangular Form first.

\---

\### Real-Life Applications

Polar Form is used for:

\- AC Voltage and Current Phasors
\- Impedance division using Ohm's Law
\- Gain and phase calculations
\- Transformer and filter relationships
\- Comparing leading and lagging quantities

\---

\### Key Takeaways

\- Polar Form is r∠θ.
\- r = √(a² + b²).
\- The angle must be placed in the correct quadrant.
\- Calculator degree/radian mode must be checked.
\- Polar Form is preferred for multiplication and division.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-04: Polar Form of Complex Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 05: Conversion Between Rectangular and Polar Forms

\### Definition

Conversion changes a Complex Number between component-based Rectangular Form and magnitude-angle Polar Form without changing the represented quantity.

\---

\### Importance

AC analysis often requires addition in Rectangular Form and multiplication or division in Polar Form. Accurate conversion allows the most convenient form to be used at each step.

\---

\### Main Concepts

\#### 1. Rectangular to Polar Procedure

For z = a + jb:

1\. Calculate r = √(a² + b²).
2\. Calculate a reference angle using tan⁻¹(|b/a|).
3\. Determine the quadrant from the signs of a and b.
4\. Write z = r∠θ.
5\. Convert back as a check when practical.

\#### 2. Polar to Rectangular Procedure

For z = r∠θ:

\*\*a = r cos θ\*\*

\*\*b = r sin θ\*\*

Therefore:

\*\*z = r cos θ + j r sin θ\*\*

\#### 3. Worked Example: Rectangular to Polar

Convert −3 + j4.

Magnitude:

\*\*r = √[(−3)² + 4²] = 5\*\*

The point lies in Quadrant II. The reference angle is 53.13°, so:

\*\*θ = 180° − 53.13° = 126.87°\*\*

Therefore:

\*\*−3 + j4 = 5∠126.87°\*\*

\#### 4. Worked Example: Polar to Rectangular

Convert 10∠−30°.

\*\*a = 10 cos(−30°) = 8.66\*\*

\*\*b = 10 sin(−30°) = −5\*\*

Therefore:

\*\*10∠−30° = 8.66 − j5\*\*

\#### 5. Quadrant Guide

| Signs of a and b | Quadrant | Angle Guidance |
|---|---|---|
| +, + | I | Positive acute angle |
| −, + | II | 180° − reference angle |
| −, − | III | −180° + reference angle or equivalent |
| +, − | IV | Negative acute angle |

\#### 6. Calculator Check

Use Rectangular-to-Polar and Polar-to-Rectangular calculator functions only after understanding the signs, angle mode and expected quadrant.

\---

\### Real-Life Applications

Conversion is required when:

\- Adding Impedances and then finding magnitude and angle
\- Dividing Voltage by Impedance
\- Combining AC Phasors
\- Converting measured Real/Imaginary data into magnitude/phase
\- Checking simulation output

\---

\### Key Takeaways

\- Rectangular to Polar uses magnitude and angle calculations.
\- Polar to Rectangular uses cosine and sine components.
\- Quadrant checking prevents major angle errors.
\- Degree and radian modes must not be mixed.
\- Back-conversion is a useful verification method.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-05: Conversion Between Rectangular and Polar Forms
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 06: Addition and Subtraction of Complex Numbers

\### Definition

Complex Numbers are added or subtracted by combining their Real Parts together and their Imaginary Parts together.

\---

\### Importance

This operation is used to combine Series Impedances, Phasor Voltages, Phasor Currents and Complex Power components.

\---

\### Main Concepts

\#### 1. Addition Rule

\*\*(a + jb) + (c + jd) = (a + c) + j(b + d)\*\*

\#### 2. Subtraction Rule

\*\*(a + jb) − (c + jd) = (a − c) + j(b − d)\*\*

\#### 3. Worked Addition Example

Add 4 + j3 and 2 − j5.

\*\*(4 + j3) + (2 − j5) = (4 + 2) + j(3 − 5)\*\*

\*\*= 6 − j2\*\*

\#### 4. Worked Subtraction Example

Subtract 3 + j4 from 8 − j2.

\*\*(8 − j2) − (3 + j4) = (8 − 3) + j(−2 − 4)\*\*

\*\*= 5 − j6\*\*

\#### 5. Geometric Meaning

Addition combines horizontal components and vertical components, just like vector addition on perpendicular axes.

\#### 6. Polar Quantities

Before adding or subtracting Polar quantities with different angles:

1\. Convert each to Rectangular Form.
2\. Add or subtract like components.
3\. Convert the result to Polar Form if magnitude and phase are required.

\#### 7. Engineering Example

For Series Impedances Z₁ = 5 + j4 Ω and Z₂ = 3 − j2 Ω:

\*\*ZT = Z₁ + Z₂ = 8 + j2 Ω\*\*

\---

\### Real-Life Applications

\- Combining Series RLC Impedances
\- Applying KVL with Phasor Voltages
\- Applying KCL with Phasor Currents
\- Combining real and reactive power
\- Adding measured harmonic components at a common frequency

\---

\### Key Takeaways

\- Add Real Parts to Real Parts.
\- Add Imaginary Parts to Imaginary Parts.
\- Apply subtraction signs to both components.
\- Use Rectangular Form for addition and subtraction.
\- Convert the final answer to Polar Form only when needed.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-06: Addition and Subtraction of Complex Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 07: Multiplication and Division of Complex Numbers

\### Definition

Complex multiplication combines magnitudes by multiplication and angles by addition. Complex division combines magnitudes by division and angles by subtraction when Polar Form is used.

\---

\### Importance

Multiplication and division are central to Phasor Ohm's Law, Impedance, Admittance, gain and Complex Power calculations.

\---

\### Main Concepts

\#### 1. Polar Multiplication

\*\*(r₁∠θ₁)(r₂∠θ₂) = r₁r₂∠(θ₁ + θ₂)\*\*

\#### 2. Polar Division

\*\*(r₁∠θ₁)/(r₂∠θ₂) = (r₁/r₂)∠(θ₁ − θ₂)\*\*

\#### 3. Worked Multiplication Example

\*\*(4∠30°)(2∠−20°) = 8∠10°\*\*

The magnitudes multiply and the angles add.

\#### 4. Worked Division Example

\*\*(12∠40°)/(3∠10°) = 4∠30°\*\*

The magnitudes divide and the denominator angle is subtracted.

\#### 5. Rectangular Multiplication

Use ordinary algebra and j² = −1:

\*\*(a + jb)(c + jd) = (ac − bd) + j(ad + bc)\*\*

Example:

\*\*(2 + j3)(4 − j1) = 11 + j10\*\*

\#### 6. Rectangular Division and Conjugate

Multiply numerator and denominator by the Complex Conjugate of the denominator so that the denominator becomes Real.

For c + jd, the conjugate is c − jd and:

\*\*(c + jd)(c − jd) = c² + d²\*\*

\#### 7. Engineering Example: Phasor Ohm's Law

If V = 100∠0° V and Z = 5∠30° Ω:

\*\*I = V/Z = 20∠−30° A\*\*

The Current magnitude is 20 A and it lags the reference Voltage by 30°.

\---

\### Real-Life Applications

\- Calculating I = V/Z
\- Calculating V = IZ
\- Converting Impedance to Admittance
\- Determining gain magnitude and phase
\- Calculating Complex Power using conjugates

\---

\### Key Takeaways

\- In Polar multiplication, multiply magnitudes and add angles.
\- In Polar division, divide magnitudes and subtract angles.
\- Use j² = −1 in Rectangular multiplication.
\- A conjugate simplifies Rectangular division.
\- Polar Form is normally most convenient for Phasor multiplication and division.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-07: Multiplication and Division of Complex Numbers
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 08: Introduction to Phasors

\### Definition

A Phasor is a Complex Number that represents the magnitude and phase angle of a sinusoidal quantity at a specified common frequency.

\---

\### Importance

Phasors replace time-domain differential relationships with simpler algebraic relationships for sinusoidal steady-state AC analysis.

\---

\### Main Concepts

\#### 1. Sinusoidal Quantity

A sinusoidal Voltage may be written as:

\*\*v(t) = Vm cos(ωt + φ)\*\*

Its Phasor may be written using RMS magnitude:

\*\*V = Vrms∠φ\*\*

where Vrms = Vm/√2 for a pure sine wave.

\#### 2. What the Phasor Omits

The common time factor associated with ωt is not written in the Phasor. Frequency must therefore be known separately.

\#### 3. Reference Phasor

One quantity is commonly selected as the 0° reference. Other phases are measured relative to it.

\#### 4. RMS or Peak Convention

Phasors may use RMS or Peak magnitude, but one convention must be stated and used consistently. Power-system and Circuit calculations normally use RMS Phasors.

\#### 5. Leading and Lagging

If I = 5∠−30° A relative to V = 100∠0° V, Current lags Voltage by 30°.

If I = 5∠+30° A, Current leads Voltage by 30°.

\#### 6. Phasor Limitations

Basic Phasor algebra applies to sinusoidal steady-state quantities at the same frequency. It does not directly represent switching transients or combine different frequencies into one Phasor calculation.

| Time-Domain Quantity | Phasor Information |
|---|---|
| Instantaneous waveform | Magnitude and phase |
| Contains ωt explicitly | Common time factor omitted |
| Useful for transients and waveforms | Useful for sinusoidal steady state |

\---

\### Real-Life Applications

\- AC Circuit Voltage and Current analysis
\- Phase-sequence and phase-angle studies
\- Transformer and motor calculations
\- Power-factor analysis
\- Oscilloscope and instrument phase interpretation

\---

\### Key Takeaways

\- A Phasor represents magnitude and phase at a common frequency.
\- RMS magnitude is commonly used in engineering.
\- The time factor is omitted but frequency is still essential.
\- Positive or negative relative angle indicates lead or lag.
\- Phasors apply to sinusoidal steady state, not directly to transients.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-08: Introduction to Phasors
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 09: Phasor Representation of AC Quantities

\### Definition

Phasor representation converts a sinusoidal Voltage or Current into a Complex magnitude-angle form relative to a selected cosine reference and magnitude convention.

\---

\### Importance

Correct Phasor representation prevents magnitude, sign and 90° phase errors before AC Circuit equations are solved.

\---

\### Main Concepts

\#### 1. Cosine Reference

This chapter uses cosine as the reference:

\*\*x(t) = Xm cos(ωt + φ)\*\*

Using RMS magnitude:

\*\*X = (Xm/√2)∠φ\*\*

\#### 2. Sine-to-Cosine Conversion

Because sin α = cos(α − 90°):

\*\*Xm sin(ωt + φ) = Xm cos(ωt + φ − 90°)\*\*

The angle must be adjusted before writing a cosine-reference Phasor.

\#### 3. Worked Voltage Example

Given:

\*\*v(t) = 141.4 cos(ωt + 30°) V\*\*

The RMS magnitude is 141.4/√2 = 100 V. Therefore:

\*\*V = 100∠30° V RMS\*\*

\#### 4. Worked Current Example

Given:

\*\*i(t) = 14.14 sin(ωt − 20°) A\*\*

Convert to cosine:

\*\*i(t) = 14.14 cos(ωt − 110°) A\*\*

Therefore:

\*\*I = 10∠−110° A RMS\*\*

\#### 5. Reconstructing the Waveform

From X = Xrms∠φ:

\*\*x(t) = √2 Xrms cos(ωt + φ)\*\*

Frequency or ω must be specified separately.

\#### 6. Unit and Convention Check

Always state whether a Phasor uses RMS or Peak magnitude. Do not mix a Peak Voltage Phasor with an RMS Current Phasor in the same power calculation.

\---

\### Real-Life Applications

\- Converting oscilloscope waveforms into Phasors
\- Interpreting RMS meter readings
\- Preparing AC Circuit equations
\- Comparing Voltage and Current phase
\- Calculating Impedance and Power Factor

\---

\### Key Takeaways

\- Select a common cosine or sine reference.
\- Convert Peak magnitude to RMS when RMS Phasors are used.
\- Keep the waveform phase angle.
\- Adjust a sine angle when using a cosine reference.
\- Frequency is not contained in the written Phasor value.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-09: Phasor Representation of AC Quantities
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 10: Phasor Addition and Subtraction

\### Definition

Phasor addition and subtraction combine sinusoidal quantities of the same frequency by adding or subtracting their Complex components.

\---

\### Importance

Phasor addition is required by KCL and KVL in AC networks and for finding resultant Voltage or Current from quantities with different phase angles.

\---

\### Main Concepts

\#### 1. Same-Frequency Requirement

Only sinusoidal quantities at the same frequency can be combined directly as constant Phasors.

\#### 2. Addition Procedure

1\. Confirm the same frequency and magnitude convention.
2\. Convert each Phasor to Rectangular Form.
3\. Add Real components.
4\. Add Imaginary components.
5\. Convert the result to Polar Form if required.

\#### 3. Worked Addition Example

Add V₁ = 10∠0° V and V₂ = 10∠90° V.

Rectangular forms:

\*\*V₁ = 10 + j0\*\*

\*\*V₂ = 0 + j10\*\*

Therefore:

\*\*VT = 10 + j10 = 14.14∠45° V\*\*

The magnitudes do not simply add to 20 V because the Phasors point in different directions.

\#### 4. Worked Subtraction Example

Subtract I₂ = 2∠90° A from I₁ = 5∠0° A.

\*\*I₁ = 5 + j0\*\*

\*\*I₂ = 0 + j2\*\*

\*\*I = I₁ − I₂ = 5 − j2 = 5.39∠−21.8° A\*\*

\#### 5. Graphical Meaning

Phasor addition follows vector-like head-to-tail addition on the Complex Plane. Algebraic Rectangular addition gives the same result more accurately.

\#### 6. KCL and KVL

In sinusoidal steady state at one frequency:

\- KCL applies to Phasor Currents.
\- KVL applies to Phasor Voltages.

All reference directions and polarities must remain consistent.

\#### 7. Common Error

Do not add magnitudes directly unless the Phasors have exactly the same angle and direction.

\---

\### Real-Life Applications

\- Adding R, L and C Voltage drops
\- Combining branch Currents
\- Finding neutral Current in phase systems
\- Comparing measured signal components
\- Checking AC KCL and KVL

\---

\### Key Takeaways

\- Phasors must have the same frequency for direct addition.
\- Convert Polar Phasors to Rectangular Form before adding.
\- Add Real and Imaginary components separately.
\- Convert the result back to Polar Form when needed.
\- Do not simply add magnitudes at different phase angles.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-10: Phasor Addition and Subtraction
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 11: Euler's Formula (Basic Introduction)

\### Definition

Euler's Formula connects Complex Exponential Form with trigonometric sine and cosine functions:

\*\*eʲθ = cos θ + j sin θ\*\*

\---

\### Importance

Euler's Formula explains why a magnitude and angle can be represented by a Complex Number and provides the mathematical basis of Phasors.

\---

\### Main Concepts

\#### 1. Exponential Form

A Polar Complex Number may be written as:

\*\*z = r∠θ = reʲθ\*\*

Using Euler's Formula:

\*\*z = r cos θ + j r sin θ\*\*

This is exactly the Polar-to-Rectangular conversion.

\#### 2. Negative Angle

\*\*e⁻ʲθ = cos θ − j sin θ\*\*

The cosine term remains even, while the sine term changes sign.

\#### 3. Important Values

| Angle | Exponential Value |
|---|---|
| 0° | eʲ⁰ = 1 |
| 90° | eʲπ/2 = j |
| 180° | eʲπ = −1 |
| −90° | e⁻ʲπ/2 = −j |

Radians are normally used inside the mathematical exponential expression.

\#### 4. Rotating-Quantity Interpretation

The factor eʲθ represents a unit-magnitude direction at angle θ in the Complex Plane. Multiplication by eʲθ rotates a Complex quantity by θ without changing its magnitude.

\#### 5. Worked Example

Write 5eʲ⁶⁰° in Rectangular Form:

\*\*5eʲ⁶⁰° = 5(cos 60° + j sin 60°)\*\*

\*\*= 2.5 + j4.33\*\*

\#### 6. Engineering Scope

Students do not need advanced proof of Euler's Formula for basic AC Circuit Analysis. The important skill is understanding the connection among Rectangular, Polar and Exponential Forms.

\---

\### Real-Life Applications

Euler's Formula supports:

\- Phasor notation
\- Sinusoidal steady-state analysis
\- Frequency-response calculations
\- Signal and communication theory
\- Control-system analysis

\---

\### Key Takeaways

\- eʲθ = cos θ + j sin θ.
\- reʲθ and r∠θ are equivalent forms.
\- Euler's Formula connects Polar and Rectangular Forms.
\- Complex Exponential multiplication represents rotation.
\- Basic application is more important here than advanced proof.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-11: Euler's Formula (Basic Introduction)
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\## Topic 12: Practical Applications of Complex Numbers and Phasors in AC Circuits

\### Definition

Practical AC Phasor analysis uses Complex Numbers to represent sinusoidal Voltage, Current, Impedance and Power so that AC Circuit laws can be applied with algebra.

\---

\### Importance

Complex Numbers and Phasors connect AC waveforms with the engineering calculations used for power systems, machines, transformers, filters and electronic Circuits.

\---

\### Main Concepts

\#### 1. Complex Impedance

In AC Circuits, Impedance is written as:

\*\*Z = R + jX\*\*

where R is Resistance and X is net Reactance.

\- Inductive Reactance contributes +jXL.
\- Capacitive Reactance contributes −jXC.

These quantities are developed fully in Chapter-12.

\#### 2. Phasor Ohm's Law

\*\*V = IZ\*\*

\*\*I = V/Z\*\*

Polar Form makes magnitude and phase division convenient.

\#### 3. Worked AC Current Example

Let:

\*\*V = 120∠0° V\*\*

\*\*Z = 6 + j8 Ω\*\*

Convert Z to Polar Form:

\*\*Z = 10∠53.13° Ω\*\*

Then:

\*\*I = V/Z = 12∠−53.13° A\*\*

The negative Current angle means Current lags the reference Voltage by 53.13°.

\#### 4. Series Impedance

Series Impedances add in Rectangular Form. For example:

\*\*(4 + j6) + (3 − j2) = 7 + j4 Ω\*\*

The result may then be converted to Polar Form for Current calculation.

\#### 5. KCL and KVL with Phasors

At one common frequency and sinusoidal steady state, Kirchhoff's Laws apply to Phasors exactly as algebraic Circuit equations, provided reference directions and polarities are consistent.

\#### 6. Complex Power Preview

Using RMS Phasors, Complex Power is commonly written as:

\*\*S = VI\*\*\*\*

where I\* is the Complex Conjugate of Current. The Real Part relates to active Power and the Imaginary Part to reactive Power. Detailed power analysis appears later in the roadmap.

\#### 7. Engineering Workflow

1\. Confirm sinusoidal steady state and common frequency.
2\. Select RMS or Peak convention.
3\. Choose a reference angle.
4\. Convert Circuit elements into Complex Impedances.
5\. Use Rectangular Form for sums.
6\. Use Polar Form for multiplication and division.
7\. Apply KCL, KVL and Ohm's Law.
8\. Interpret magnitude, lead/lag and units.
9\. Check the result against physical expectations.

\#### 8. Common Practical Errors

\- Mixing RMS and Peak magnitudes
\- Mixing degrees and radians
\- Using the wrong angle quadrant
\- Treating j as a variable instead of √−1
\- Adding Polar magnitudes directly
\- Combining different frequencies in one Phasor equation
\- Reversing Inductive and Capacitive signs

\#### 9. Link to Chapter-12

Chapter-12 will use these skills to calculate Resistance, Inductive Reactance, Capacitive Reactance, Impedance, phase relationships, Series RLC response, Power Factor and the Power Triangle.

\---

\### Real-Life Applications

Complex Numbers and Phasors are used in:

\- AC Circuit and RLC analysis
\- Power-factor calculation
\- Transformer and motor studies
\- Protection and power-system software
\- Filter and frequency-response design
\- Audio, communication and instrumentation systems
\- Oscilloscope and phasor-measurement interpretation

\---

\### Key Takeaways

\- Complex Impedance combines Resistance and Reactance.
\- Phasor Ohm's Law is V = IZ.
\- Rectangular Form is convenient for Impedance addition.
\- Polar Form is convenient for Voltage, Current and Impedance division.
\- Phasor analysis requires a common frequency and consistent magnitude convention.
\- These skills are direct prerequisites for Chapter-12 AC Circuit Analysis.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Advanced Engineering Mathematics
\- \*\*Author\*\*: Erwin Kreyszig
\- \*\*Relevant Chapter\*\*: Complex Numbers and Phasor Representation — Topic-12: Practical Applications of Complex Numbers and Phasors in AC Circuits
\- \*\*Supporting Text\*\*: Fundamentals of Electric Circuits — Charles K. Alexander and Matthew N. O. Sadiku — Sinusoids and Phasors
\---

\# Chapter Summary

\- A Complex Number is written as z = a + jb.
\- Electrical Engineering uses j = √−1 because i commonly represents Current.
\- The Real Part lies on the horizontal axis and the Imaginary Part lies on the vertical axis.
\- Powers of j repeat every four steps.
\- The Complex Conjugate of a + jb is a − jb.
\- Rectangular Form is preferred for addition and subtraction.
\- Polar Form is preferred for multiplication and division.
\- Magnitude is √(a² + b²), and angle must be placed in the correct quadrant.
\- Polar-to-Rectangular conversion uses a = r cos θ and b = r sin θ.
\- Complex addition combines Real and Imaginary components separately.
\- Polar multiplication adds angles, while Polar division subtracts angles.
\- A Phasor represents magnitude and phase of a sinusoidal quantity at a common frequency.
\- RMS Phasors are commonly used for Electrical Engineering calculations.
\- Sine and cosine references must be converted consistently.
\- Phasors of different angles must be converted to Rectangular Form before addition.
\- Euler's Formula is eʲθ = cos θ + j sin θ.
\- Complex Impedance is written as Z = R + jX.
\- Phasor Ohm's Law is V = IZ.
\- Basic Phasor analysis applies to sinusoidal steady state, not directly to switching transients.
\- Consistent units, angle modes, frequency and reference directions prevent common errors.

\---

\# What's Next?

In the next chapter, you will study AC Circuit Analysis, including Resistance, Inductance, Capacitance, Reactance, Impedance, phase relationships, Series RLC Circuits, Power Factor and the Power Triangle.

Chapter-12 will apply the Complex Number conversions, Phasor arithmetic and magnitude-angle methods developed in this chapter to practical AC electrical networks.

\---
