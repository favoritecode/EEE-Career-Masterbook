\# Chapter 07

\# DC Network Theorems and Circuit Simplification

\---

\## Introduction

DC electrical networks may contain several independent sources, branches and resistors. Kirchhoff's Laws can analyze these networks directly, but repeated equations may become lengthy when only one branch Current or load Voltage is required.

Network Theorems provide systematic methods for replacing, separating or transforming parts of a linear Circuit. Superposition examines one independent source at a time. Thevenin's and Norton's Theorems replace a network by a simple equivalent source and Resistance. Maximum Power Transfer identifies a special load condition. Source Transformation and Delta-Star transformations simplify source-resistor and three-terminal resistor networks.

This chapter explains the major DC Network Theorems step by step with conceptual examples, comparison tables and practical applications. It is intended for university students, diploma students, technical job preparation, competitive examinations and self-learning.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain the purpose and limitations of Network Theorems.
\- Apply the Superposition Theorem to linear DC Circuits.
\- Determine Thevenin Voltage and Thevenin Resistance.
\- Determine Norton Current and Norton Resistance.
\- Convert between Thevenin and Norton equivalents.
\- Apply the Maximum Power Transfer Theorem to resistive DC networks.
\- Perform practical Source Transformation.
\- Convert a Delta resistor network into an equivalent Star network.
\- Convert a Star resistor network into an equivalent Delta network.
\- Select a suitable simplification method for a practical DC Circuit.
\- Verify equivalent circuits using terminal Voltage, Current and Power.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Network Theorems
2\. Superposition Theorem
3\. Thevenin's Theorem
4\. Norton's Theorem
5\. Maximum Power Transfer Theorem
6\. Source Transformation
7\. Delta (Δ) to Star (Y) Transformation
8\. Star (Y) to Delta (Δ) Transformation
9\. Practical DC Circuit Simplification
10\. Real-Life Applications of Network Theorems

\---

\## Topic 01: Introduction to Network Theorems

\### Definition

Network Theorems are analytical principles used to simplify or study electrical networks while preserving specified terminal behavior or determining the contribution of individual sources.

In this chapter, a Network is an interconnection of electrical elements, while a Circuit is a network containing one or more closed Current paths.

\---

\### Importance

Network Theorems reduce calculation effort and reveal useful relationships that may be difficult to see from Kirchhoff equations alone.

They are important for:

\- Simplifying multi-source DC networks
\- Finding one required branch Voltage or Current
\- Repeating calculations for different loads
\- Replacing a complex source network by an equivalent
\- Checking Kirchhoff-based solutions
\- Designing sensor, battery and control circuits
\- Preparing for technical examinations and interviews

\---

\### Main Concepts

\#### 1. Linearity

Most theorems in this chapter assume a linear network. In a linear resistor, Voltage and Current are proportional and the Resistance remains constant within the operating condition.

If an input is multiplied by a constant, the corresponding response is multiplied by the same constant. Responses from several independent sources may also be added.

\#### 2. Bilateral Elements

An ideal resistor is bilateral because its Voltage-Current relationship is the same when its connection direction is reversed. Delta-Star transformation is normally applied to linear resistor networks.

\#### 3. Independent and Dependent Sources

An Independent Source has a specified value that does not depend on another Circuit variable.

A Dependent Source is controlled by a Voltage or Current elsewhere in the Circuit. Dependent sources are not deactivated when finding an equivalent Resistance.

\#### 4. Terminal Equivalence

Two networks are terminally equivalent when they produce the same external Voltage-Current relationship at the selected terminals.

Their internal structures may be different, but an external load connected to the terminals behaves identically under the assumed conditions.

\#### 5. Theorem Comparison

| Method | Main Purpose | Key Result |
|---|---|---|
| Superposition | Separate source contributions | Total linear response |
| Thevenin | Replace a network by a Voltage source | Vth in series with Rth |
| Norton | Replace a network by a Current source | IN in parallel with RN |
| Maximum Power Transfer | Select a special load | RL = Rth for resistive DC networks |
| Source Transformation | Change source form | Vs-Rs ↔ Is-Rs |
| Delta-Star | Simplify three-terminal resistors | Equivalent Y or Δ network |

\#### 6. General Verification

After applying a theorem:

1\. Check units and polarity.
2\. Check Current directions.
3\. Compare terminal behavior.
4\. Apply KCL, KVL or Power balance where practical.
5\. Consider component tolerance and non-ideal sources.

\---

\### Real-Life Applications

Network Theorems are used in:

\- Battery and power-supply modeling
\- Sensor and bridge circuits
\- Control-panel troubleshooting
\- Automotive electrical systems
\- Electronic bias networks
\- Load-matching calculations
\- Circuit simulation and design verification

\---

\### Key Takeaways

\- Network Theorems simplify linear electrical networks.
\- Each theorem has specific assumptions and purposes.
\- Equivalent networks preserve behavior at selected terminals.
\- Dependent sources require special treatment.
\- KCL, KVL and Power balance remain useful verification tools.
\- Practical components and sources are not perfectly ideal.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-01: Introduction to Network Theorems
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 02: Superposition Theorem

\### Definition

The Superposition Theorem states that, in a linear network containing multiple independent sources, the Voltage or Current in any element equals the algebraic sum of the responses produced by each independent source acting alone.

While one independent source acts alone:

\- Other ideal independent Voltage Sources are replaced by short circuits.
\- Other ideal independent Current Sources are replaced by open circuits.
\- Dependent sources remain active.

\---

\### Importance

Superposition shows how each source contributes to a branch response. It is important for:

\- Multi-source Circuit analysis
\- Separating source effects
\- Verifying Current direction and Voltage polarity
\- Studying bias and signal contributions
\- Understanding linearity
\- Checking complete Circuit solutions

\---

\### Main Concepts

\#### 1. Step-by-Step Procedure

1\. Identify the required branch Voltage or Current.
2\. Keep one independent source active.
3\. Deactivate all other independent sources using their internal ideal Resistance.
4\. Keep dependent sources active.
5\. Calculate the partial response with its sign or direction.
6\. Repeat for every independent source.
7\. Add all partial responses algebraically.

\#### 2. Source Deactivation Table

| Source | Deactivated Replacement | Reason for Ideal Model |
|---|---|---|
| Ideal Voltage Source | Short Circuit | Zero Voltage Source has 0 V |
| Ideal Current Source | Open Circuit | Zero Current Source has 0 A |
| Dependent Source | Remains Active | Its value depends on a Circuit variable |

Source Resistance, if explicitly present, remains in the Circuit.

\#### 3. Conceptual Solved Example

A 10 Ω resistor carries 2 A to the right due to Source 1 acting alone. Source 2 acting alone produces 0.5 A to the left.

Choose rightward Current as positive:

\*\*I₁ = +2 A\*\*

\*\*I₂ = −0.5 A\*\*

Therefore:

\*\*I total = I₁ + I₂ = 2 − 0.5 = 1.5 A to the right\*\*

The corresponding resistor Voltage is:

\*\*V = IR = 1.5 × 10 = 15 V\*\*

\#### 4. Power Is Not Directly Superposed

Power is a nonlinear function such as P = I²R or P = V²/R. Therefore, partial Powers must not normally be added to obtain total Power.

First add the partial Voltages or Currents, then calculate Power from the total response.

\#### 5. Practical Sources

For a practical Voltage Source, deactivate the ideal Voltage Source but keep its Series Resistance. For a practical Current Source, deactivate the ideal Current Source but keep its Parallel Resistance.

\---

\### Real-Life Applications

Superposition is applied in:

\- Circuits with batteries and auxiliary supplies
\- DC bias and small-signal reasoning
\- Sensor offset analysis
\- Fault-source contribution studies
\- Control Circuit verification
\- Multi-source laboratory experiments

\---

\### Key Takeaways

\- Superposition applies to linear responses.
\- One independent source is considered at a time.
\- Ideal Voltage Sources become shorts when deactivated.
\- Ideal Current Sources become opens when deactivated.
\- Dependent sources remain active.
\- Partial responses require algebraic signs.
\- Power is calculated after the total Voltage or Current is found.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-02: Superposition Theorem
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 03: Thevenin's Theorem

\### Definition

Thevenin's Theorem states that any linear two-terminal network can be replaced, as viewed from those terminals, by an equivalent Voltage Source Vth in series with an equivalent Resistance Rth.

\*\*Thevenin Equivalent = Vth in Series with Rth\*\*

\---

\### Importance

Thevenin's Theorem is especially useful when one load changes repeatedly while the rest of the network remains unchanged.

It is important for:

\- Load Voltage and Current calculations
\- Repeated load analysis
\- Source and battery modeling
\- Maximum Power Transfer calculations
\- Simplifying sensor and control networks
\- Troubleshooting from accessible terminals

\---

\### Main Concepts

\#### 1. Step-by-Step Procedure

1\. Identify the load and its two connection terminals.
2\. Remove the load.
3\. Calculate the open-circuit terminal Voltage. This is Vth.
4\. Determine Rth as viewed into the network from the terminals.
5\. Draw Vth in series with Rth.
6\. Reconnect the load.
7\. Calculate load Current, Voltage and Power.

\#### 2. Finding Thevenin Voltage

The Thevenin Voltage is the open-circuit Voltage:

\*\*Vth = Voc\*\*

The terminal polarity must be defined before calculation.

\#### 3. Finding Thevenin Resistance

For a network containing only independent sources:

1\. Remove the load.
2\. Deactivate independent Voltage Sources by shorting them.
3\. Deactivate independent Current Sources by opening them.
4\. Calculate the Resistance seen from the terminals.

If dependent sources are present, keep them active and apply a test source at the terminals:

\*\*Rth = Vtest / Itest\*\*

For a linear network, Rth may also be obtained from:

\*\*Rth = Voc / Isc\*\*

when the values and conditions are properly defined.

\#### 4. Conceptual Solved Example

A network has an open-circuit terminal Voltage of 12 V. With all independent sources deactivated, the Resistance seen at the terminals is 3 Ω.

Therefore:

\*\*Vth = 12 V\*\*

\*\*Rth = 3 Ω\*\*

If a 9 Ω load is connected:

\*\*IL = Vth / (Rth + RL)\*\*

\*\*IL = 12 / (3 + 9) = 1 A\*\*

Load Voltage:

\*\*VL = ILRL = 1 × 9 = 9 V\*\*

Load Power:

\*\*PL = I²LRL = 1² × 9 = 9 W\*\*

\#### 5. Terminal Behavior

The Thevenin equivalent produces the same load Voltage and Current as the original linear network at the selected terminals. It does not reproduce every internal branch quantity.

\---

\### Real-Life Applications

Thevenin's Theorem is used for:

\- Modeling a battery with internal Resistance
\- Analyzing changing loads
\- Studying Voltage-divider loading
\- Simplifying sensor output networks
\- Finding fault behavior at accessible terminals
\- Preparing equivalent models for simulation

\---

\### Key Takeaways

\- A Thevenin equivalent contains Vth in series with Rth.
\- Vth is the open-circuit terminal Voltage.
\- Rth is the Resistance viewed into the deactivated network.
\- Dependent sources remain active when a test source is used.
\- The load is removed while the equivalent is determined.
\- The equivalent preserves external terminal behavior.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-03: Thevenin's Theorem
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 04: Norton's Theorem

\### Definition

Norton's Theorem states that any linear two-terminal network can be replaced, as viewed from those terminals, by an equivalent Current Source IN in parallel with an equivalent Resistance RN.

\*\*Norton Equivalent = IN in Parallel with RN\*\*

\---

\### Importance

Norton's Theorem is convenient when load Currents, parallel branches or Current division are central to the analysis.

It is important for:

\- Parallel load calculations
\- Repeated Current analysis
\- Current-source modeling
\- Converting between source equivalents
\- Simplifying control and electronic networks
\- Checking Thevenin results

\---

\### Main Concepts

\#### 1. Step-by-Step Procedure

1\. Identify and remove the load.
2\. Short the two load terminals through an ideal connection.
3\. Calculate the short-circuit Current. This is IN.
4\. Find RN as viewed from the terminals.
5\. Draw IN in parallel with RN.
6\. Reconnect the load.
7\. Use Current Division or another suitable method.

Short-circuit calculations must be treated as analytical procedures. A physical short circuit must not be created unless an approved, protected test specifically requires it.

\#### 2. Norton Current

The Norton Current equals the short-circuit terminal Current:

\*\*IN = Isc\*\*

The reference direction must be stated.

\#### 3. Norton Resistance

For the same linear two-terminal network:

\*\*RN = Rth\*\*

It is found using source deactivation, a test source or the Voc/Isc relationship as appropriate.

\#### 4. Conceptual Solved Example

A network supplies 4 A when its terminals are shorted. Its equivalent terminal Resistance is 6 Ω.

Therefore:

\*\*IN = 4 A\*\*

\*\*RN = 6 Ω\*\*

If RL = 3 Ω is connected in parallel, load Current by Current Division is:

\*\*IL = IN × RN / (RN + RL)\*\*

\*\*IL = 4 × 6 / (6 + 3) = 24 / 9 = 2.67 A\*\*

Load Voltage is approximately:

\*\*VL = ILRL = 2.67 × 3 = 8 V\*\*

\#### 5. Thevenin-Norton Relationship

| Thevenin Quantity | Norton Quantity | Relationship |
|---|---|---|
| Vth | IN | Vth = INRN |
| Rth in series | RN in parallel | Rth = RN |
| Voltage-source form | Current-source form | Terminally equivalent |

\---

\### Real-Life Applications

Norton's Theorem is used in:

\- Parallel load networks
\- Current-divider analysis
\- Current-output sensor models
\- Electronic bias circuits
\- Fault-current studies
\- Source-equivalent verification

\---

\### Key Takeaways

\- A Norton equivalent contains IN in parallel with RN.
\- IN is the short-circuit terminal Current.
\- RN equals Rth for the same linear network.
\- Physical short-circuit testing can be hazardous.
\- Thevenin and Norton forms are terminally equivalent.
\- Current Division is useful after reconnecting the load.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-04: Norton's Theorem
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 05: Maximum Power Transfer Theorem

\### Definition

The Maximum Power Transfer Theorem states that a variable resistive load receives maximum Power from a linear DC source network when the load Resistance equals the Thevenin Resistance seen from the load terminals.

\*\*For Resistive DC Networks: RL = Rth\*\*

\---

\### Importance

The theorem identifies the load condition that extracts the greatest possible Power from a source network. It is important for:

\- Understanding load matching
\- Low-power signal and sensor systems
\- Communication and electronic interfaces
\- Thevenin equivalent applications
\- Examination and interview problems
\- Comparing Power and Efficiency objectives

\---

\### Main Concepts

\#### 1. Step-by-Step Procedure

1\. Remove the variable load.
2\. Determine Vth and Rth at the load terminals.
3\. Set RL equal to Rth.
4\. Calculate the load Current.
5\. Calculate maximum load Power.
6\. Check whether maximum Power or high Efficiency is the actual design objective.

\#### 2. Maximum Power Formula

At RL = Rth:

\*\*IL = Vth / (Rth + RL) = Vth / (2Rth)\*\*

Maximum load Power is:

\*\*PL(max) = V²th / (4Rth)\*\*

\#### 3. Conceptual Solved Example

Suppose:

\*\*Vth = 20 V\*\*

\*\*Rth = 5 Ω\*\*

For maximum Power:

\*\*RL = 5 Ω\*\*

Load Current:

\*\*IL = 20 / (5 + 5) = 2 A\*\*

Maximum load Power:

\*\*PL(max) = I²LRL = 2² × 5 = 20 W\*\*

The formula gives the same result:

\*\*PL(max) = 20² / (4 × 5) = 20 W\*\*

\#### 4. Efficiency at Maximum Power

In the ideal Thevenin resistive model, when RL = Rth, equal Power is dissipated in Rth and RL. The load receives half of the Power associated with the two-resistor path, so the transfer Efficiency is 50%.

Therefore, maximum Power Transfer is generally not the normal design target for high-power transmission and distribution systems, where high Efficiency and low loss are more important.

\#### 5. Power Trend

| Load Condition | Load Power Behavior |
|---|---|
| RL much smaller than Rth | Voltage is low; Power below maximum |
| RL = Rth | Load Power is maximum |
| RL much larger than Rth | Current is low; Power below maximum |

\---

\### Real-Life Applications

Maximum Power Transfer concepts are used in:

\- Sensor interfaces
\- Low-power signal circuits
\- Audio and communication matching
\- Source characterization
\- Electronic test problems
\- Comparing matching and Efficiency requirements

\---

\### Key Takeaways

\- For resistive DC networks, maximum load Power occurs at RL = Rth.
\- The source network is first replaced by its Thevenin equivalent.
\- PL(max) = V²th/(4Rth).
\- Efficiency is 50% in the ideal resistive model at maximum Power.
\- Maximum Power and maximum Efficiency are different objectives.
\- High-power systems normally prioritize Efficiency rather than this matching condition.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-05: Maximum Power Transfer Theorem
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 06: Source Transformation

\### Definition

Source Transformation is the conversion of a practical Voltage Source into an equivalent practical Current Source, or vice versa, while preserving terminal behavior.

A Voltage Source Vs in series with Resistance Rs is equivalent to a Current Source Is in parallel with the same Resistance Rs.

\*\*Is = Vs / Rs\*\*

\*\*Vs = IsRs\*\*

\---

\### Importance

Source Transformation can reveal series or parallel combinations that were not obvious in the original Circuit.

It is important for:

\- Simplifying mixed-source networks
\- Converting between Thevenin and Norton forms
\- Reducing simultaneous equations
\- Combining compatible sources
\- Performing rapid examination calculations
\- Checking equivalent Circuit models

\---

\### Main Concepts

\#### 1. Step-by-Step Voltage-to-Current Transformation

1\. Identify an ideal Voltage Source Vs in series with Rs.
2\. Calculate Is = Vs/Rs.
3\. Replace the pair with Current Source Is in parallel with Rs.
4\. Set the Current direction consistent with the original terminal polarity.
5\. Confirm the same open-circuit Voltage and short-circuit Current.

\#### 2. Step-by-Step Current-to-Voltage Transformation

1\. Identify an ideal Current Source Is in parallel with Rs.
2\. Calculate Vs = IsRs.
3\. Replace the pair with Voltage Source Vs in series with Rs.
4\. Set the Voltage polarity consistent with the original Current direction.
5\. Verify terminal behavior.

\#### 3. Conceptual Solved Example

A 12 V source is in series with 4 Ω.

Equivalent Current Source:

\*\*Is = Vs / Rs = 12 / 4 = 3 A\*\*

The equivalent is a 3 A Current Source in parallel with 4 Ω.

Open-circuit Voltage of the Current form:

\*\*Voc = IsRs = 3 × 4 = 12 V\*\*

Short-circuit Current of the Voltage form:

\*\*Isc = Vs/Rs = 12/4 = 3 A\*\*

Both forms therefore have the same terminal characteristics.

\#### 4. Valid Source-Resistance Arrangement

The Resistance must be directly in series with the Voltage Source or directly in parallel with the Current Source as viewed from the same two terminals.

An ideal Voltage Source without Series Resistance cannot be transformed into a finite ideal Current Source. Similarly, an ideal Current Source without Parallel Resistance cannot be transformed into a finite ideal Voltage Source.

\#### 5. Combining Sources

After transformation, parallel Current Sources with compatible directions may be combined algebraically, and parallel Resistances may be reduced. Equivalent Voltage sources require correct series conditions before combination.

\---

\### Real-Life Applications

Source Transformation is applied in:

\- Battery and supply models
\- Current-source sensor models
\- Thevenin-Norton conversion
\- Parallel network simplification
\- Electronic bias analysis
\- Circuit simulation verification

\---

\### Key Takeaways

\- Vs in series with Rs is equivalent to Is in parallel with Rs.
\- Is = Vs/Rs and Vs = IsRs.
\- The Resistance value remains unchanged.
\- Direction and polarity must be consistent.
\- Only the correct source-resistor arrangement can be transformed directly.
\- Equivalent forms preserve terminal behavior, not internal branch behavior.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-06: Source Transformation
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 07: Delta (Δ) to Star (Y) Transformation

\### Definition

Delta-to-Star Transformation converts three resistors connected in a closed triangular Delta network into an equivalent three-branch Star network connected to a common central point.

Let the Delta resistors be:

\- RAB between terminals A and B
\- RBC between terminals B and C
\- RCA between terminals C and A

Let the equivalent Star resistors be RA, RB and RC from terminals A, B and C to the Star center.

\---

\### Importance

A Delta group cannot always be simplified using only direct series and parallel rules. Converting it to Star may reveal simple series combinations.

The transformation is important for:

\- Bridge Circuit simplification
\- Three-terminal resistor networks
\- Balanced and unbalanced networks
\- Measurement bridges
\- Distribution and load-network analysis
\- Competitive examination problems

\---

\### Main Concepts

\#### 1. Delta-to-Star Formulas

Let:

\*\*SΔ = RAB + RBC + RCA\*\*

Then:

\*\*RA = (RAB × RCA) / SΔ\*\*

\*\*RB = (RAB × RBC) / SΔ\*\*

\*\*RC = (RBC × RCA) / SΔ\*\*

Each Star resistor equals the product of the two adjacent Delta resistors divided by the sum of all three Delta resistors.

\#### 2. Step-by-Step Procedure

1\. Label the three external terminals A, B and C.
2\. Identify RAB, RBC and RCA correctly.
3\. Calculate the Delta sum SΔ.
4\. For terminal A, multiply the two Delta resistors touching A.
5\. Divide by SΔ to obtain RA.
6\. Repeat for terminals B and C.
7\. Redraw the Circuit with a Star center.
8\. Continue with series-parallel reduction if possible.

\#### 3. Conceptual Solved Example

Suppose:

\*\*RAB = 6 Ω, RBC = 9 Ω, RCA = 3 Ω\*\*

Delta sum:

\*\*SΔ = 6 + 9 + 3 = 18 Ω\*\*

Star resistors:

\*\*RA = (6 × 3) / 18 = 1 Ω\*\*

\*\*RB = (6 × 9) / 18 = 3 Ω\*\*

\*\*RC = (9 × 3) / 18 = 1.5 Ω\*\*

The new Star network has the same Resistance between each pair of external terminals as the original Delta network.

\#### 4. Balanced Delta

If all Delta resistors equal RΔ:

\*\*RY = RΔ / 3\*\*

Therefore, a balanced 12 Ω Delta converts to three 4 Ω Star resistors.

\#### 5. Common Error

Do not use the product of non-adjacent labels incorrectly. The Star resistor connected to terminal A uses the two Delta resistors that meet at A: RAB and RCA.

\---

\### Real-Life Applications

Delta-to-Star Transformation is used in:

\- Bridge resistor networks
\- Strain-gauge and sensor bridges
\- Three-terminal load models
\- Distribution Circuit calculations
\- Balanced resistor networks
\- Circuit reduction software checks

\---

\### Key Takeaways

\- Delta is a closed three-resistor triangle.
\- Star uses three resistors connected to a central point.
\- Each Star resistor uses the product of adjacent Delta resistors.
\- The denominator is the sum of all Delta resistors.
\- For a balanced network, RY = RΔ/3.
\- External terminal behavior remains equivalent.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-07: Delta (Δ) to Star (Y) Transformation
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 08: Star (Y) to Delta (Δ) Transformation

\### Definition

Star-to-Delta Transformation converts three resistors connected from terminals A, B and C to a common Star point into an equivalent closed triangular Delta network.

Let the Star resistors be RA, RB and RC. The equivalent Delta resistors are RAB, RBC and RCA.

\---

\### Importance

Converting Star to Delta can create direct parallel paths or provide the resistor form required for a different analysis method.

It is important for:

\- Reconfiguring bridge networks
\- Simplifying three-terminal Circuits
\- Comparing Star and Delta loads
\- Reversing a Delta-to-Star conversion
\- Solving examination problems
\- Verifying resistor-network equivalence

\---

\### Main Concepts

\#### 1. Star-to-Delta Formulas

First calculate the sum of pairwise Star products:

\*\*P = RARB + RBRC + RCRA\*\*

Then:

\*\*RAB = P / RC\*\*

\*\*RBC = P / RA\*\*

\*\*RCA = P / RB\*\*

The Delta resistor between two terminals is obtained by dividing P by the Star resistor connected to the opposite terminal.

Equivalent alternative forms include:

\*\*RAB = RA + RB + (RARB / RC)\*\*

\#### 2. Step-by-Step Procedure

1\. Label Star branches RA, RB and RC.
2\. Calculate P = RARB + RBRC + RCRA.
3\. Identify the Star branch opposite each required Delta side.
4\. Divide P by the opposite Star Resistance.
5\. Repeat for all three Delta sides.
6\. Redraw the triangular network.
7\. Continue with Circuit simplification.

\#### 3. Conceptual Solved Example

Suppose:

\*\*RA = 1 Ω, RB = 3 Ω, RC = 1.5 Ω\*\*

Pairwise product sum:

\*\*P = (1 × 3) + (3 × 1.5) + (1.5 × 1)\*\*

\*\*P = 3 + 4.5 + 1.5 = 9 Ω²\*\*

Therefore:

\*\*RAB = P / RC = 9 / 1.5 = 6 Ω\*\*

\*\*RBC = P / RA = 9 / 1 = 9 Ω\*\*

\*\*RCA = P / RB = 9 / 3 = 3 Ω\*\*

This reproduces the Delta network from the previous example.

\#### 4. Balanced Star

If all Star resistors equal RY:

\*\*RΔ = 3RY\*\*

Therefore, three 4 Ω Star resistors convert to three 12 Ω Delta resistors.

\#### 5. Delta-Star Comparison

| Feature | Star (Y) | Delta (Δ) |
|---|---|---|
| Shape | Three branches to a center | Closed triangle |
| Internal center | Present | Absent |
| Balanced relationship | RY = RΔ/3 | RΔ = 3RY |
| Main simplification use | May create series branches | May create parallel branches |

\---

\### Real-Life Applications

Star-to-Delta Transformation is used in:

\- Bridge-network analysis
\- Three-terminal resistor models
\- Balanced network comparison
\- Sensor and measurement circuits
\- Circuit-equivalence verification
\- Network reduction exercises

\---

\### Key Takeaways

\- Star-to-Delta is the inverse of Delta-to-Star.
\- P is the sum of the three pairwise Star products.
\- Each Delta side divides P by the opposite Star branch.
\- For balanced networks, RΔ = 3RY.
\- Correct terminal labeling prevents formula errors.
\- The equivalent preserves Resistance between external terminal pairs.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-08: Star (Y) to Delta (Δ) Transformation
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 09: Practical DC Circuit Simplification

\### Definition

Practical DC Circuit Simplification is the systematic process of reducing a network to a form that makes the required Voltage, Current, Resistance or Power easier to calculate without changing the relevant electrical behavior.

No single theorem is best for every Circuit. The method should be selected from the Circuit structure and the required result.

\---

\### Importance

A planned approach reduces algebra, prevents unnecessary transformations and improves error detection.

Practical simplification is important for:

\- Fast and accurate Circuit analysis
\- Selecting the shortest valid solution method
\- Troubleshooting real equipment
\- Comparing calculated and measured results
\- Repeating analysis for different loads
\- Preparing for time-limited examinations

\---

\### Main Concepts

\#### 1. Simplification Sequence

1\. Redraw the Circuit clearly.
2\. Label Nodes, polarities and Current directions.
3\. Identify genuine series and parallel elements.
4\. Define the required quantity and terminals.
5\. Select a suitable theorem or transformation.
6\. Simplify step by step while preserving labels.
7\. Calculate the required result.
8\. Restore any transformed load or source relationship.
9\. Verify using KCL, KVL, limits or Power balance.

\#### 2. Method Selection Guide

| Circuit Condition | Useful First Choice |
|---|---|
| Several independent sources; one response required | Superposition |
| One load changes repeatedly | Thevenin or Norton |
| Maximum load Power requested | Thevenin + Maximum Power Transfer |
| Source-resistor forms block reduction | Source Transformation |
| Three-resistor bridge prevents series-parallel reduction | Delta-Star Transformation |
| Full network with several unknowns | KCL, KVL, Node or Mesh Analysis |

\#### 3. Conceptual Simplification Example

A complex source network has already been reduced to:

\*\*Vth = 18 V, Rth = 3 Ω\*\*

For RL = 6 Ω:

\*\*IL = 18 / (3 + 6) = 2 A\*\*

\*\*VL = 2 × 6 = 12 V\*\*

\*\*PL = 2² × 6 = 24 W\*\*

If the load changes to 15 Ω, the original network does not need to be solved again:

\*\*IL = 18 / (3 + 15) = 1 A\*\*

\*\*VL = 1 × 15 = 15 V\*\*

This demonstrates the advantage of an equivalent Circuit for repeated load analysis.

\#### 4. Common Mistakes

\- Treating elements as series when their common Node has another branch
\- Treating elements as parallel when they do not share both Nodes
\- Removing dependent sources
\- Superposing Power directly
\- Using the wrong open-circuit polarity
\- Creating a physical short to find Norton Current
\- Losing terminal labels during Delta-Star conversion
\- Ignoring units and negative signs

\#### 5. Reasonableness Checks

Ask:

\- Is the equivalent Resistance physically reasonable?
\- Does the open-circuit load Current become zero?
\- Does the short-circuit terminal Voltage become zero?
\- Do KCL and KVL balance?
\- Is supplied Power consistent with absorbed Power?

\---

\### Real-Life Applications

Practical simplification supports:

\- Field troubleshooting
\- Laboratory Circuit verification
\- Battery-load calculations
\- Control-system modifications
\- Sensor input analysis
\- Design comparison and simulation

\---

\### Key Takeaways

\- Redrawing and labeling are the first simplification steps.
\- Method selection depends on Circuit structure and the required result.
\- Series and parallel conditions must be verified by Nodes.
\- Equivalent circuits save work when loads change.
\- Common theorem limitations must be respected.
\- Every result should be checked for physical and mathematical consistency.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-09: Practical DC Circuit Simplification
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\## Topic 10: Real-Life Applications of Network Theorems

\### Definition

Real-Life Applications of Network Theorems are practical uses of equivalent circuits, source separation and resistor transformations in the analysis, design, testing and troubleshooting of electrical systems.

The theorem chosen depends on the system objective, accessible terminals, source type, load behavior and required accuracy.

\---

\### Importance

Network Theorems connect classroom Circuit analysis with engineering decisions. They allow a large system to be represented by a small model that is easier to test and understand.

They are important for:

\- Predicting load behavior
\- Modeling non-ideal sources
\- Locating abnormal Voltage or Current
\- Designing interfaces between systems
\- Comparing alternative loads
\- Developing simulation models
\- Communicating Circuit behavior clearly

\---

\### Main Concepts

\#### 1. Battery and DC Supply Models

A practical battery may be approximated by an ideal Voltage Source in series with internal Resistance. Its Thevenin model predicts terminal Voltage drop as load Current increases.

The equivalent model is valid only over the operating range for which the battery behavior is sufficiently linear.

\#### 2. Sensor Interfaces

A resistive sensor network can be represented by Vth and Rth at its output. This helps determine how a measuring instrument or controller input loads the sensor.

\#### 3. Control-Panel Troubleshooting

Thevenin Voltage measured at an open terminal and behavior under a known safe test load can help distinguish a weak source path from an open load, subject to authorized procedures.

\#### 4. Multi-Source Systems

Superposition can separate the contribution of a main DC supply, backup battery and control source in a linear model.

\#### 5. Bridge and Three-Terminal Networks

Delta-Star transformations simplify resistor bridges used in sensors and measurement circuits when ordinary series-parallel reduction is not possible.

\#### 6. Load Matching

Maximum Power Transfer helps explain matching in low-power signal systems. It must not be confused with high-efficiency power delivery.

\#### 7. Simulation and Measurement Workflow

1\. Define the terminals and operating condition.
2\. Calculate the equivalent Circuit.
3\. Simulate the original and equivalent networks.
4\. Compare open-circuit Voltage and short-circuit Current analytically.
5\. Connect a safe rated load in a supervised setup.
6\. Compare measured terminal Voltage and Current.
7\. Investigate differences caused by tolerance and non-ideal behavior.

\#### 8. Practical Limitations

Real components may be nonlinear, temperature-dependent or time-varying. Batteries, semiconductors, lamps and protective devices may not be represented accurately by one fixed linear model over every condition.

Actual testing must follow safe isolation, instrument-rating, supervision and equipment procedures. Analytical short circuits must not be confused with unsafe physical short circuits.

\---

\### Real-Life Applications

Network Theorems are applied in:

\- Battery, charger and UPS systems
\- Automotive and control wiring
\- Sensor and instrumentation Circuits
\- Electronic bias networks
\- Bridge measurement systems
\- Renewable-energy DC interfaces
\- Circuit simulation and education
\- Maintenance and fault diagnosis

\---

\### Key Takeaways

\- Equivalent circuits turn large linear networks into useful terminal models.
\- Thevenin models practical Voltage-source behavior.
\- Norton is useful for Current-source and parallel-load behavior.
\- Superposition separates independent source contributions.
\- Delta-Star transformations simplify bridge networks.
\- Maximum Power Transfer is mainly a matching concept, not a high-efficiency rule.
\- Model assumptions, component tolerance and safety procedures must be considered.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Circuit Theorems — Topic-10: Real-Life Applications of Network Theorems
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — Network Theorems
\---

\# Chapter Summary

\- Network Theorems simplify linear electrical networks and preserve specified terminal behavior.
\- Superposition adds the signed Voltage or Current contributions of independent sources.
\- Deactivated ideal Voltage Sources become shorts, while ideal Current Sources become opens.
\- Thevenin's equivalent contains Vth in series with Rth.
\- Norton's equivalent contains IN in parallel with RN.
\- Vth = INRN and Rth = RN for the same linear two-terminal network.
\- Maximum Power is transferred to a resistive DC load when RL = Rth.
\- Maximum Power Transfer and maximum Efficiency are different objectives.
\- Source Transformation converts Vs-Rs and Is-Rs forms without changing terminal behavior.
\- Delta-to-Star uses adjacent Delta products divided by the total Delta Resistance.
\- Star-to-Delta uses the sum of pairwise Star products divided by the opposite Star branch.
\- Correct Node, terminal, polarity and direction labels prevent major errors.
\- KCL, KVL, limiting cases and Power balance help verify simplified Circuits.
\- Practical components may depart from ideal linear models.

\---

\# What's Next?

In the next chapter, you will study Capacitors, Inductors, stored energy, RC and RL charging or discharging, Time Constant and DC Transient Circuits.

These concepts will build on your understanding of Voltage, Current, Resistance, Circuit simplification, equivalent sources and changing Circuit conditions.

\---
