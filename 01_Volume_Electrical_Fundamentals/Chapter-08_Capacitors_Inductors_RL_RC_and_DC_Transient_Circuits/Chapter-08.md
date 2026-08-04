\# Chapter 08

\# Capacitors, Inductors, RL, RC and DC Transient Circuits

\---

\## Introduction

Resistors oppose Current and normally convert electrical energy into heat. Capacitors and Inductors behave differently because they can store energy and return it to a Circuit. A Capacitor stores energy in an Electric Field, while an Inductor stores energy in a Magnetic Field.

When a DC source is connected, disconnected or changed, Capacitor Voltage and Inductor Current do not usually reach their final values instantly. The short period during which Circuit quantities change is called a Transient. RC and RL Circuits provide the basic models for understanding delay, charging, discharging, filtering, switching and energy storage.

This chapter explains Capacitors, Inductors and first-order DC Transient Circuits step by step without requiring advanced mathematics. It is suitable for BSc Engineering students, Diploma students, technical job preparation, competitive examinations and self-learning.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain the construction and operation of a Capacitor.
\- Calculate Capacitance using charge, Voltage and physical dimensions.
\- Identify common Capacitor types and their applications.
\- Calculate equivalent Capacitance in Series and Parallel.
\- Explain the construction and operation of an Inductor.
\- Relate Inductance to Flux Linkage and changing Current.
\- Identify common Inductor types and their applications.
\- Calculate equivalent Inductance for uncoupled Series and Parallel Inductors.
\- Calculate energy stored in Capacitors and Inductors.
\- Explain the operation of RC and RL Circuits.
\- Describe Capacitor charging and discharging step by step.
\- Explain natural, forced, transient and steady-state responses.
\- Calculate RC and RL Time Constants.
\- Estimate Circuit quantities at important multiples of one Time Constant.
\- Select Capacitors and Inductors for practical engineering applications.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Capacitors
2\. Capacitance and Capacitance Formula
3\. Types of Capacitors
4\. Capacitors in Series and Parallel
5\. Introduction to Inductors
6\. Inductance and Inductance Formula
7\. Types of Inductors
8\. Inductors in Series and Parallel
9\. Energy Stored in Capacitors and Inductors
10\. RC Circuits
11\. RL Circuits
12\. Charging and Discharging of Capacitors
13\. DC Transient Response
14\. Time Constant
15\. Practical Applications of Capacitors and Inductors

\---

\## Topic 01: Introduction to Capacitors

\### Definition

A Capacitor is a passive electrical component that stores separated electric charge and energy in an Electric Field. It normally consists of two Conductive Plates separated by an insulating material called a Dielectric.

\---

\### Importance

Capacitors are important because they can store energy temporarily, oppose sudden changes in Voltage and respond differently to steady and changing signals.

They are used for:

\- DC supply smoothing
\- Signal coupling and bypassing
\- Timing and delay Circuits
\- Motor starting and running
\- Power-factor correction
\- Energy storage
\- Noise and transient suppression

\---

\### Main Concepts

\#### 1. Basic Construction

The two Conductive Plates hold equal and opposite charges. The Dielectric prevents direct conduction between the plates under normal rated conditions.

\#### 2. Charging Process

When a DC source is connected through a Resistance, electrons accumulate on one plate and leave the other plate. The resulting Electric Field creates a Capacitor Voltage that opposes further charge movement.

\#### 3. Capacitor Current

Capacitor Current exists when its stored charge and Voltage are changing. For an ideal Capacitor:

\*\*iC = C(dvC/dt)\*\*

A faster Voltage change produces a larger Current for the same Capacitance.

\#### 4. DC Steady State

After a long time with a constant DC source, an ideal Capacitor is fully charged and its Current becomes zero. It therefore behaves as an Open Circuit in DC steady state.

\#### 5. Voltage Continuity

The Voltage across an ideal Capacitor cannot change instantaneously. An instantaneous Voltage change would require infinite Current, which is not physically available in an ordinary Circuit.

\#### 6. Ideal and Practical Capacitors

A practical Capacitor has leakage Resistance, Equivalent Series Resistance (ESR), limited Voltage rating, tolerance and temperature dependence.

| Feature | Ideal Capacitor | Practical Capacitor |
|---|---|---|
| Leakage Current | Zero | Small but non-zero |
| Series Resistance | Zero | ESR is present |
| Voltage Rating | Unlimited model | Specified maximum |
| Energy Loss | Zero | Dielectric and ESR losses |

\---

\### Real-Life Applications

\- A phone charger uses Capacitors to reduce output ripple.
\- A camera flash Capacitor stores energy and releases it quickly.
\- A ceiling-fan Capacitor helps create the required phase shift.
\- Electronic boards use bypass Capacitors near integrated circuits.

\---

\### Key Takeaways

\- A Capacitor stores energy in an Electric Field.
\- Two Conductive Plates are separated by a Dielectric.
\- Capacitor Voltage cannot change instantaneously.
\- An ideal Capacitor is an Open Circuit in DC steady state.
\- Practical Voltage, polarity, ESR and temperature ratings must be respected.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-01: Introduction to Capacitors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 02: Capacitance and Capacitance Formula

\### Definition

Capacitance is the ability of a Capacitor to store electric charge per unit Potential Difference.

\*\*C = Q/V\*\*

where C is Capacitance, Q is charge and V is Capacitor Voltage.

\---

\### Importance

Capacitance determines how much charge and energy a Capacitor can store at a specified Voltage. It also affects Current during Voltage changes and the timing of RC Circuits.

\---

\### Main Concepts

\#### 1. SI Unit

The SI unit of Capacitance is the Farad (F).

Common submultiples are:

\- 1 microfarad (µF) = 10⁻⁶ F
\- 1 nanofarad (nF) = 10⁻⁹ F
\- 1 picofarad (pF) = 10⁻¹² F

\#### 2. Charge–Voltage Relationship

From C = Q/V:

\*\*Q = CV\*\*

For a fixed Capacitor, stored charge is proportional to Voltage.

\#### 3. Parallel-Plate Formula

For an ideal parallel-plate Capacitor:

\*\*C = εA/d\*\*

where ε is Dielectric Permittivity, A is overlapping plate area and d is plate separation.

Capacitance increases with plate area and Permittivity, but decreases when plate separation increases.

\#### 4. Dielectric Constant

The Permittivity may be written as:

\*\*ε = ε₀εr\*\*

where ε₀ is free-space Permittivity and εr is Relative Permittivity or Dielectric Constant.

\#### 5. Solved Conceptual Example

A 10 µF Capacitor is connected across 12 V.

\*\*Q = CV = 10 × 10⁻⁶ × 12 = 120 × 10⁻⁶ C = 120 µC\*\*

Therefore, the magnitude of charge on each plate is 120 µC.

\#### 6. Rated Voltage

The applied Voltage must remain below the manufacturer-rated limit. Excessive Voltage may cause Dielectric Breakdown, overheating or failure.

\---

\### Real-Life Applications

\- Capacitance value sets timing intervals in RC Circuits.
\- Larger filter Capacitance usually reduces low-frequency ripple.
\- Sensor Capacitance changes with position, pressure or touch.
\- Cable Capacitance affects signal behavior and switching.

\---

\### Key Takeaways

\- C = Q/V and Q = CV.
\- The unit of Capacitance is the Farad.
\- For parallel plates, C = εA/d.
\- Greater area or Permittivity increases Capacitance.
\- Greater separation reduces Capacitance.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-02: Capacitance and Capacitance Formula
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 03: Types of Capacitors

\### Definition

Capacitors are classified according to Dielectric material, construction, polarity, adjustability, Voltage rating and intended application.

\---

\### Importance

No single Capacitor type is suitable for every Circuit. Correct selection improves reliability, accuracy, safety and service life.

\---

\### Main Concepts

\#### 1. Ceramic Capacitor

Ceramic Capacitors are commonly non-polarized, compact and useful for high-frequency bypassing and coupling. Some types change value with Voltage and temperature.

\#### 2. Electrolytic Capacitor

Aluminium Electrolytic Capacitors provide relatively large Capacitance. Most are polarized and must be connected with correct polarity.

\#### 3. Tantalum Capacitor

Tantalum Capacitors offer high Capacitance per volume and stable performance, but are sensitive to reverse Voltage and surge Current.

\#### 4. Film Capacitor

Film Capacitors are usually non-polarized and have good stability, low loss and useful pulse performance. They are used in timing, audio and power applications.

\#### 5. Mica Capacitor

Mica Capacitors provide high stability and low loss, especially in radio-frequency and precision Circuits.

\#### 6. Supercapacitor

Supercapacitors provide very high Capacitance for short-term energy storage. Their cell Voltage is comparatively low and balancing may be required in Series banks.

\#### 7. Variable Capacitor

A Variable Capacitor allows Capacitance adjustment and is used for tuning, calibration and sensing.

| Type | Polarity | Typical Strength | Common Use |
|---|---|---|---|
| Ceramic | Non-polarized | Small, high-frequency | Bypass and filtering |
| Electrolytic | Usually polarized | High Capacitance | DC supply smoothing |
| Film | Non-polarized | Stable, low loss | Timing and pulse Circuits |
| Mica | Non-polarized | Accurate, high-frequency | RF Circuits |
| Supercapacitor | Polarized | Very high Capacitance | Energy backup |

\#### 8. Selection Checklist

Check Capacitance, tolerance, rated Voltage, polarity, temperature, ESR, ripple Current, frequency and physical size.

\---

\### Real-Life Applications

\- Electrolytic Capacitors smooth rectifier output.
\- Ceramic Capacitors suppress high-frequency noise.
\- Film Capacitors operate in motor-run and pulse Circuits.
\- Supercapacitors provide memory or short-duration backup.

\---

\### Key Takeaways

\- Capacitor types have different electrical and physical characteristics.
\- Polarized Capacitors require correct polarity.
\- Rated Voltage needs a suitable engineering margin.
\- ESR and ripple Current are important in power Circuits.
\- Application requirements determine the best type.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-03: Types of Capacitors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 04: Capacitors in Series and Parallel

\### Definition

Capacitors are in Parallel when connected across the same two Nodes. They are in Series when connected end-to-end in one branch with no other connection at their intermediate Node under the intended model.

\---

\### Importance

Series and Parallel connections allow designers to obtain required Capacitance, Voltage capability and physical arrangement from available components.

\---

\### Main Concepts

\#### 1. Parallel Capacitors

Parallel Capacitors have the same Voltage. Their charges add, so:

\*\*Ceq = C₁ + C₂ + C₃ + ...\*\*

Parallel connection increases total Capacitance.

\#### 2. Series Capacitors

Ideal Series Capacitors carry equal charge magnitude. Their Voltages add, so:

\*\*1/Ceq = 1/C₁ + 1/C₂ + 1/C₃ + ...\*\*

For two Series Capacitors:

\*\*Ceq = C₁C₂/(C₁ + C₂)\*\*

Series equivalent Capacitance is smaller than the smallest individual Capacitance.

\#### 3. Voltage Division

For ideal Series Capacitors with equal charge:

\*\*V₁/V₂ = C₂/C₁\*\*

The smaller Capacitance receives the larger Voltage.

\#### 4. Comparison

| Property | Series Capacitors | Parallel Capacitors |
|---|---|---|
| Common Quantity | Charge magnitude | Voltage |
| Equivalent Formula | Reciprocal sum | Direct sum |
| Equivalent Value | Less than smallest | Greater than largest |
| Main Reason | Voltage sharing | Increased Capacitance |

\#### 5. Solved Conceptual Example

For 6 µF and 3 µF in Series:

\*\*Ceq = (6 × 3)/(6 + 3) = 2 µF\*\*

In Parallel:

\*\*Ceq = 6 + 3 = 9 µF\*\*

\#### 6. Practical Voltage Sharing

Leakage differences may cause unequal DC Voltage sharing in a Series bank. Balancing resistors may be required. Manufacturer guidance must be followed.

\---

\### Real-Life Applications

\- Parallel banks increase filter or energy-storage Capacitance.
\- Series banks increase total Voltage capability when properly balanced.
\- Capacitor combinations create standard or special values.
\- Power-electronic DC links use carefully designed Capacitor banks.

\---

\### Key Takeaways

\- Parallel Capacitances add directly.
\- Series Capacitances combine by reciprocal sum.
\- Series Capacitors ideally carry equal charge.
\- The smaller Series Capacitor has the larger Voltage.
\- Practical Series banks may require Voltage-balancing components.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-04: Capacitors in Series and Parallel
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 05: Introduction to Inductors

\### Definition

An Inductor is a passive electrical component that stores energy in a Magnetic Field when Current flows through it. It commonly consists of a coil of insulated conductor, with or without a magnetic core.

\---

\### Importance

Inductors oppose sudden changes in Current and are essential in filters, converters, transformers, relays, motors and electromagnetic systems.

\---

\### Main Concepts

\#### 1. Magnetic Field Creation

Current through a conductor produces a Magnetic Field. Winding the conductor into a coil concentrates the Flux and increases the magnetic effect.

\#### 2. Self-Induced EMF

When Current changes, Flux Linkage changes and an EMF is induced in the same coil. According to Lenz's Law, this induced EMF opposes the change that produced it.

For an ideal Inductor:

\*\*vL = L(diL/dt)\*\*

The sign depends on the selected Voltage polarity and Current reference convention.

\#### 3. Current Continuity

Current through an ideal Inductor cannot change instantaneously. An instantaneous Current change would require infinite Voltage.

\#### 4. DC Steady State

After a long time with constant DC Current, di/dt = 0 and the ideal Inductor Voltage becomes zero. It behaves as a Short Circuit in DC steady state.

\#### 5. Practical Inductor

A practical coil has winding Resistance, core loss, limited Current rating, parasitic Capacitance and possible magnetic saturation.

| Feature | Ideal Inductor | Practical Inductor |
|---|---|---|
| Winding Resistance | Zero | Non-zero |
| Core Loss | Zero | Present in magnetic cores |
| Current Limit | Unlimited model | Thermal and saturation limits |
| DC Steady State | Perfect short | Small winding Resistance remains |

\---

\### Real-Life Applications

\- Converter Inductors smooth Current.
\- Relay and solenoid coils produce mechanical force.
\- Chokes block changing components while passing DC.
\- Motor windings convert electrical energy into motion.

\---

\### Key Takeaways

\- An Inductor stores energy in a Magnetic Field.
\- Inductor Current cannot change instantaneously.
\- vL = L(di/dt) for the ideal model.
\- An ideal Inductor is a Short Circuit in DC steady state.
\- Practical winding Resistance, Current rating and saturation matter.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-05: Introduction to Inductors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 06: Inductance and Inductance Formula

\### Definition

Inductance is the property of a Circuit or coil by which a change in Current produces an opposing induced EMF through changing magnetic Flux Linkage.

\---

\### Importance

Inductance determines how strongly a coil resists a change in Current, how much magnetic energy it stores and how quickly Current changes in an RL Circuit.

\---

\### Main Concepts

\#### 1. SI Unit

The SI unit of Inductance is the Henry (H).

\- 1 millihenry (mH) = 10⁻³ H
\- 1 microhenry (µH) = 10⁻⁶ H

One Henry produces 1 V when Current changes at 1 A/s.

\#### 2. Flux-Linkage Formula

For a linear magnetic system:

\*\*L = NΦ/I\*\*

where N is the number of turns, Φ is Flux per turn and I is Current.

\#### 3. Induced-Voltage Formula

\*\*vL = L(di/dt)\*\*

A large Inductance or rapid Current change produces a large induced Voltage.

\#### 4. Solenoid Approximation

For a long ideal solenoid:

\*\*L = μN²A/l\*\*

where μ is core Permeability, A is core cross-sectional area and l is magnetic path length.

Therefore, Inductance increases with Permeability, area and the square of turns, but decreases with path length.

\#### 5. Solved Conceptual Example

If a 0.5 H Inductor Current changes by 4 A in 0.2 s at a constant rate:

\*\*|vL| = L|ΔI/Δt| = 0.5 × (4/0.2) = 10 V\*\*

The induced polarity opposes the Current change.

\#### 6. Saturation

In a ferromagnetic core, increasing Current may eventually produce little additional Flux. Effective Inductance falls during saturation and Current may rise dangerously.

\---

\### Real-Life Applications

\- Inductance sets Current ripple in DC converters.
\- Coil turns and core material determine relay behavior.
\- Air gaps help control energy storage and saturation.
\- Measurement of Inductance helps identify damaged windings.

\---

\### Key Takeaways

\- The unit of Inductance is the Henry.
\- L = NΦ/I for a linear magnetic model.
\- Induced Voltage increases with the rate of Current change.
\- More turns and higher Permeability generally increase Inductance.
\- Core saturation limits practical performance.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-06: Inductance and Inductance Formula
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 07: Types of Inductors

\### Definition

Inductors are classified by core material, construction, adjustability, shielding, frequency range and application.

\---

\### Importance

Core material and construction strongly affect Inductance, Current capacity, loss, size, frequency response and saturation.

\---

\### Main Concepts

\#### 1. Air-Core Inductor

An Air-Core Inductor avoids core saturation and has low core loss, making it useful at high frequency. It may require more turns or a larger size for the same Inductance.

\#### 2. Iron-Core Inductor

An Iron-Core Inductor provides high Permeability and relatively high Inductance. It is commonly used at low frequencies but may have significant core loss.

\#### 3. Ferrite-Core Inductor

Ferrite has high electrical Resistivity and therefore limits Eddy Current. Ferrite-core Inductors are widely used in high-frequency converters and filters.

\#### 4. Powdered-Iron Inductor

Distributed air gaps help powdered-iron cores store energy and tolerate DC bias. They are used in filters and power converters.

\#### 5. Toroidal Inductor

A toroidal core forms a closed magnetic path, reducing external magnetic leakage when correctly designed.

\#### 6. Variable Inductor

A movable core or adjustable structure allows Inductance tuning for calibration and resonant Circuits.

\#### 7. Choke

A Choke is an Inductor designed to oppose unwanted changing Current while allowing the required DC or lower-frequency component.

| Type | Main Advantage | Typical Application |
|---|---|---|
| Air Core | No magnetic saturation | RF Circuits |
| Iron Core | High low-frequency Inductance | Filters and electromagnets |
| Ferrite Core | Low high-frequency Eddy Current | Switching converters |
| Powdered Iron | Useful energy storage with DC bias | Power Inductors |
| Toroidal | Low external magnetic leakage | Filters and power supplies |

\#### 8. Selection Checklist

Check Inductance, tolerance, rated Current, saturation Current, DC Resistance, core loss, frequency and temperature rise.

\---

\### Real-Life Applications

\- Ferrite Inductors operate in phone chargers.
\- Toroidal chokes reduce conducted electrical noise.
\- Air-core coils operate in radio-frequency tuning.
\- Power Inductors store energy in switching regulators.

\---

\### Key Takeaways

\- Core material determines important Inductor behavior.
\- Air cores avoid saturation but may be larger.
\- Ferrite is useful at high switching frequencies.
\- Rated and saturation Current are not always identical.
\- DC Resistance causes copper loss and heating.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-07: Types of Inductors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 08: Inductors in Series and Parallel

\### Definition

Inductors may be connected in Series or Parallel to obtain a required equivalent Inductance. Simple formulas apply when the Inductors are uncoupled and mutual magnetic effects are negligible.

\---

\### Importance

Combination formulas help designers obtain suitable Inductance and distribute Current or Voltage, but magnetic coupling can change the expected result.

\---

\### Main Concepts

\#### 1. Uncoupled Series Inductors

The same Current flows through Series Inductors, and their Voltages add:

\*\*Leq = L₁ + L₂ + L₃ + ...\*\*

\#### 2. Uncoupled Parallel Inductors

Parallel Inductors have the same Voltage:

\*\*1/Leq = 1/L₁ + 1/L₂ + 1/L₃ + ...\*\*

For two Inductors:

\*\*Leq = L₁L₂/(L₁ + L₂)\*\*

\#### 3. Comparison with Capacitor Combinations

| Connection | Inductors | Capacitors |
|---|---|---|
| Series | Values add directly | Reciprocal sum |
| Parallel | Reciprocal sum | Values add directly |
| Continuous Quantity | Branch Current in Series | Voltage across each in Parallel |

\#### 4. Solved Conceptual Example

For uncoupled 6 mH and 3 mH Inductors:

Series: \*\*Leq = 6 + 3 = 9 mH\*\*

Parallel: \*\*Leq = (6 × 3)/(6 + 3) = 2 mH\*\*

\#### 5. Magnetic Coupling

When coils share Flux, Mutual Inductance changes the equivalent value. Series-aiding and Series-opposing formulas require dot convention and are beyond the uncoupled formulas above.

\#### 6. Practical Current Sharing

Parallel winding Resistance and Inductance tolerances may cause unequal Current sharing. Each component rating must be checked.

\---

\### Real-Life Applications

\- Series Inductors increase filtering Inductance.
\- Parallel Inductors may share Current in power converters.
\- Coupled windings form transformers and common-mode chokes.
\- Filter networks use combinations of Inductors and Capacitors.

\---

\### Key Takeaways

\- Uncoupled Series Inductances add directly.
\- Uncoupled Parallel Inductances combine by reciprocal sum.
\- Parallel equivalent Inductance is below the smallest branch value.
\- Magnetic coupling can invalidate the simple formulas.
\- Current rating and winding Resistance must be considered.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-08: Inductors in Series and Parallel
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 09: Energy Stored in Capacitors and Inductors

\### Definition

A Capacitor stores energy in its Electric Field, while an Inductor stores energy in its Magnetic Field.

\---

\### Importance

Stored energy explains transient behavior, discharge hazards, converter operation, pulse systems and the need for protective components.

\---

\### Main Concepts

\#### 1. Capacitor Energy

\*\*WC = ½CV²\*\*

Equivalent forms are WC = ½QV and WC = Q²/(2C).

Capacitor energy depends on the square of Voltage.

\#### 2. Inductor Energy

\*\*WL = ½LI²\*\*

Inductor energy depends on the square of Current.

\#### 3. Energy Comparison

| Component | Storage Field | Energy Formula | Quantity that Cannot Change Instantly |
|---|---|---|---|
| Capacitor | Electric Field | WC = ½CV² | Capacitor Voltage |
| Inductor | Magnetic Field | WL = ½LI² | Inductor Current |

\#### 4. Solved Capacitor Example

A 100 µF Capacitor charged to 20 V stores:

\*\*WC = ½ × 100 × 10⁻⁶ × 20² = 0.02 J\*\*

\#### 5. Solved Inductor Example

A 0.2 H Inductor carrying 3 A stores:

\*\*WL = ½ × 0.2 × 3² = 0.9 J\*\*

\#### 6. Stored-Energy Safety

A disconnected Capacitor can remain charged. An interrupted Inductor Current can generate a high Voltage. Safe discharge paths and suitable protection are necessary.

\---

\### Real-Life Applications

\- Flash units release stored Capacitor energy quickly.
\- DC-link Capacitors support converter operation.
\- Switching Inductors transfer energy between converter states.
\- Flyback diodes provide a path for coil Current after switch opening.

\---

\### Key Takeaways

\- Capacitor energy is ½CV².
\- Inductor energy is ½LI².
\- Doubling Voltage or Current makes stored energy four times larger.
\- Stored energy may remain after supply isolation.
\- Discharge and switching protection must be properly designed.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-09: Energy Stored in Capacitors and Inductors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 10: RC Circuits

\### Definition

An RC Circuit contains Resistance and Capacitance arranged so that Capacitor Voltage changes with time during charging, discharging or a change in source condition.

\---

\### Importance

RC Circuits provide simple timing, delay, filtering, waveform shaping and sensor-interface functions.

\---

\### Main Concepts

\#### 1. Series RC Charging Circuit

A DC source, resistor, switch and Capacitor form a basic charging Circuit. The resistor limits Current and controls how quickly the Capacitor charges.

\#### 2. Immediately After Switching

If initially uncharged, vC(0⁻) = 0. Because Capacitor Voltage is continuous:

\*\*vC(0⁺) = vC(0⁻) = 0\*\*

At the first instant, the Capacitor behaves like a zero-Volt source. For a simple Series Circuit, initial Current is V/R.

\#### 3. During Charging

As vC rises, resistor Voltage and charging Current fall. The change is exponential rather than linear.

For an initially uncharged Capacitor charged toward V:

\*\*vC(t) = V(1 − e⁻ᵗ/ᴿᶜ)\*\*

\*\*i(t) = (V/R)e⁻ᵗ/ᴿᶜ\*\*

\#### 4. Final DC Steady State

After a long time, vC approaches V and Current approaches zero. The ideal Capacitor behaves as an Open Circuit.

\#### 5. General First-Order Form

Any RC state variable may be written conceptually as:

\*\*x(t) = x(final) + [x(initial) − x(final)]e⁻ᵗ/τ\*\*

where τ = RthC and Rth is the Resistance seen by the Capacitor with independent sources deactivated.

\#### 6. Step-by-Step RC Analysis

1\. Determine vC(0⁻) from the Circuit before switching.
2\. Use continuity: vC(0⁺) = vC(0⁻).
3\. Determine vC(∞) from the new DC steady-state Circuit.
4\. Find the Resistance seen by the Capacitor.
5\. Calculate τ = RthC.
6\. Write the response and verify initial and final values.

\---

\### Real-Life Applications

\- Power-on reset delays
\- Switch-debounce Circuits
\- Simple low-pass and high-pass networks
\- LED fade or delay Circuits
\- Sensor averaging and noise reduction

\---

\### Key Takeaways

\- RC Circuits control Capacitor Voltage change.
\- Resistance limits charging or discharging Current.
\- Capacitor Voltage is continuous at switching.
\- The response approaches its final value exponentially.
\- The RC Time Constant is based on the Resistance seen by the Capacitor.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-10: RC Circuits
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 11: RL Circuits

\### Definition

An RL Circuit contains Resistance and Inductance arranged so that Inductor Current changes with time after a source or switching condition changes.

\---

\### Importance

RL Circuits model relay coils, solenoids, motor windings, Current smoothing, electromagnetic actuators and inductive switching.

\---

\### Main Concepts

\#### 1. Series RL Energizing Circuit

A DC source, resistor, switch and Inductor form a basic RL Circuit. Resistance limits the final Current and Inductance controls how quickly Current changes.

\#### 2. Immediately After Switching

If initially unenergized, iL(0⁻) = 0. Inductor Current is continuous:

\*\*iL(0⁺) = iL(0⁻) = 0\*\*

At the first instant, the ideal Inductor supports the source Voltage while Current begins from zero.

\#### 3. During Current Growth

For an initially unenergized Series RL Circuit:

\*\*iL(t) = (V/R)(1 − e⁻ᵗᴿ/ᴸ)\*\*

\*\*vL(t) = Ve⁻ᵗᴿ/ᴸ\*\*

Current rises while Inductor Voltage falls.

\#### 4. Final DC Steady State

After a long time, Current approaches V/R and ideal Inductor Voltage approaches zero. The ideal Inductor behaves as a Short Circuit.

\#### 5. RL Time Constant

\*\*τ = L/Rth\*\*

Rth is the Resistance seen by the Inductor in the post-switch Circuit with independent sources deactivated.

\#### 6. Step-by-Step RL Analysis

1\. Determine iL(0⁻).
2\. Use continuity: iL(0⁺) = iL(0⁻).
3\. Determine iL(∞) from the new DC steady state.
4\. Find the Resistance seen by the Inductor.
5\. Calculate τ = L/Rth.
6\. Write and verify the exponential response.

\#### 7. Switching Protection

Opening an inductive Current path can create a large Voltage. A flyback diode, snubber or other rated suppression network provides a safer energy-release path.

\---

\### Real-Life Applications

\- Relay and contactor coil energization
\- Solenoid valve operation
\- Motor-winding Current rise
\- DC converter Current smoothing
\- Inductive transient suppression

\---

\### Key Takeaways

\- RL Circuits control Inductor Current change.
\- Inductor Current is continuous at switching.
\- Current rises or falls exponentially.
\- In DC steady state, an ideal Inductor is a Short Circuit.
\- Inductive loads require suitable switching protection.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-11: RL Circuits
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 12: Charging and Discharging of Capacitors

\### Definition

Charging is the process by which Capacitor Voltage and stored energy move toward values established by a source. Discharging is the process by which stored charge and energy are released through a Circuit path.

\---

\### Importance

Understanding charging and discharging is necessary for timing, backup, pulse, filter and safety-discharge Circuits.

\---

\### Main Concepts

\#### 1. Charging an Initially Uncharged Capacitor

For a source V, resistor R and Capacitor C:

\*\*vC(t) = V(1 − e⁻ᵗ/ᴿᶜ)\*\*

\*\*iC(t) = (V/R)e⁻ᵗ/ᴿᶜ\*\*

At t = 0, vC = 0 and iC = V/R. As time increases, vC rises and iC falls.

\#### 2. Discharging Through a Resistor

If a Capacitor initially has Voltage V₀ and discharges through R:

\*\*vC(t) = V₀e⁻ᵗ/ᴿᶜ\*\*

The discharge Current direction is opposite to the original charging direction under the same reference choice.

\#### 3. Important Percentages

| Time | Charging Level | Remaining During Discharge |
|---|---:|---:|
| 1τ | 63.2% | 36.8% |
| 2τ | 86.5% | 13.5% |
| 3τ | 95.0% | 5.0% |
| 4τ | 98.2% | 1.8% |
| 5τ | 99.3% | 0.7% |

\#### 4. Solved Conceptual Example

For R = 100 kΩ and C = 10 µF:

\*\*τ = RC = 100,000 × 10 × 10⁻⁶ = 1 s\*\*

An initially uncharged Capacitor reaches about 63.2% of its final Voltage after 1 s and is practically charged after about 5 s.

\#### 5. General Initial Voltage

A Capacitor may already be charged before switching. Always find vC(0⁻), carry it into vC(0⁺), and then determine the new final value.

\#### 6. Safe Discharge

Never assume a Capacitor is discharged because equipment is switched OFF. Use an approved discharge method and verify Voltage with a suitably rated instrument.

\---

\### Real-Life Applications

\- Timing and delay networks
\- Camera flash charging
\- DC-link discharge resistors
\- Sample-and-hold Circuits
\- Backup and hold-up energy

\---

\### Key Takeaways

\- Charging Voltage rises exponentially toward a final value.
\- Discharging Voltage falls exponentially toward zero or another final value.
\- At 1τ, 63.2% of a total change is completed.
\- At about 5τ, the response is treated as practically complete.
\- Initial Capacitor Voltage and discharge safety must be checked.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-12: Charging and Discharging of Capacitors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 13: DC Transient Response

\### Definition

DC Transient Response is the time-dependent behavior of Circuit Voltage and Current immediately after a switching action or a change in a DC source, load or connection.

\---

\### Importance

Transient analysis predicts inrush Current, delays, overvoltage, energy release and the time required for a Circuit to settle safely.

\---

\### Main Concepts

\#### 1. Switching Instant

The notation 0⁻ means the instant just before switching, while 0⁺ means the instant just after switching.

\#### 2. Continuity Conditions

For ideal components:

\*\*vC(0⁺) = vC(0⁻)\*\*

\*\*iL(0⁺) = iL(0⁻)\*\*

Other Circuit quantities may change immediately if allowed by the Circuit.

\#### 3. Natural Response

The Natural Response is produced by energy initially stored in Capacitors or Inductors after independent excitation is removed or changed.

\#### 4. Forced Response

The Forced Response is produced by the applied source in the new Circuit condition. In a first-order DC Circuit, its long-term part becomes the final steady-state value.

\#### 5. Complete Response

The Complete Response contains the final value plus a decaying transient term:

\*\*x(t) = x(∞) + [x(0⁺) − x(∞)]e⁻ᵗ/τ\*\*

This form works for Capacitor Voltage in a first-order RC Circuit and Inductor Current in a first-order RL Circuit.

\#### 6. Initial and Final Equivalent Models

At t = 0⁺, preserve initial Capacitor Voltage and Inductor Current. Do not automatically replace them by steady-state Open or Short Circuits.

At t → ∞ under constant DC conditions:

\- Ideal Capacitor → Open Circuit
\- Ideal Inductor → Short Circuit

\#### 7. Step-by-Step Transient Method

1\. Analyze the Circuit for t < 0 to find stored-energy conditions.
2\. Apply continuity at t = 0.
3\. Analyze the new Circuit at t → ∞.
4\. Find Rth seen by the storage element.
5\. Calculate τ.
6\. Insert initial and final values into the general response.
7\. Check units, polarity and limiting values.

\#### 8. RC and RL Comparison

| Feature | RC Circuit | RL Circuit |
|---|---|---|
| State Quantity | Capacitor Voltage | Inductor Current |
| Continuity | vC(0⁺) = vC(0⁻) | iL(0⁺) = iL(0⁻) |
| DC Final Model | Capacitor open | Inductor short |
| Time Constant | RthC | L/Rth |

\---

\### Real-Life Applications

\- Power-supply startup and shutdown
\- Relay pickup and release
\- Motor inrush analysis
\- Electronic reset timing
\- Surge and transient protection

\---

\### Key Takeaways

\- A transient follows a switching or source change.
\- Capacitor Voltage and Inductor Current are continuous.
\- Initial and final states must be found separately.
\- First-order response is exponential.
\- Open/Short steady-state models apply only after sufficient time under constant DC.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-13: DC Transient Response
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 14: Time Constant

\### Definition

The Time Constant is a measure of how quickly a first-order Circuit response moves from its initial value toward its final value.

\---

\### Importance

The Time Constant allows engineers to estimate charging, discharging, energizing, release and settling time without evaluating the complete exponential expression at every instant.

\---

\### Main Concepts

\#### 1. RC Time Constant

\*\*τRC = RthC\*\*

Increasing Resistance or Capacitance makes an RC response slower.

\#### 2. RL Time Constant

\*\*τRL = L/Rth\*\*

Increasing Inductance makes an RL response slower, while increasing Resistance makes it faster.

\#### 3. Physical Meaning of One Time Constant

After 1τ, 63.2% of the total change has occurred and 36.8% remains.

This statement applies whether the response is increasing or decreasing.

\#### 4. Five-Time-Constant Rule

At 5τ, only about 0.7% of the original difference remains. The response is commonly treated as practically complete, although mathematically the exponential reaches its final value only as time approaches infinity.

\#### 5. Finding the Resistance Seen by the Element

1\. Use the post-switch Circuit.
2\. Remove the selected storage element from its port.
3\. Deactivate independent Voltage and Current sources.
4\. Keep dependent sources active.
5\. Find the equivalent Resistance seen from the port.

\#### 6. Solved RC Example

If Rth = 20 kΩ and C = 50 µF:

\*\*τ = 20,000 × 50 × 10⁻⁶ = 1 s\*\*

The response is practically complete after about 5 s.

\#### 7. Solved RL Example

If L = 2 H and Rth = 10 Ω:

\*\*τ = L/Rth = 2/10 = 0.2 s\*\*

The response is practically complete after about 1 s.

\#### 8. Common Mistakes

\- Using total drawn Resistance instead of Resistance seen by the storage element
\- Using the pre-switch rather than post-switch Circuit
\- Forgetting source internal Resistance
\- Mixing µF, mH, kΩ and base units
\- Assuming 1τ means complete response

\---

\### Real-Life Applications

\- Selecting power-on delay
\- Estimating relay response
\- Setting sensor filter speed
\- Designing safe discharge time
\- Estimating converter startup behavior

\---

\### Key Takeaways

\- τRC = RthC.
\- τRL = L/Rth.
\- One Time Constant completes 63.2% of a change.
\- Five Time Constants represent practical completion.
\- Rth must be found from the storage-element terminals in the post-switch Circuit.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-14: Time Constant
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\## Topic 15: Practical Applications of Capacitors and Inductors

\### Definition

Practical applications use the energy storage, frequency response and transient behavior of Capacitors and Inductors to filter, time, protect, convert, sense and control electrical systems.

\---

\### Importance

Capacitors and Inductors appear in almost every power, control, communication and electronic system. Correct selection prevents overheating, instability, excessive Voltage and premature failure.

\---

\### Main Concepts

\#### 1. Power-Supply Filtering

Capacitors reduce Voltage ripple by supplying load Current between rectifier peaks. Inductors reduce rapid Current variation. LC combinations provide stronger filtering when correctly designed.

\#### 2. Decoupling and Noise Suppression

Small Capacitors placed close to electronic devices provide short local Current pulses and divert high-frequency noise. Chokes impede unwanted changing Current.

\#### 3. Timing and Delay

RC Time Constants create simple delays, reset pulses, switch debounce and gradual Voltage changes. Component tolerance affects timing accuracy.

\#### 4. Electromagnetic Actuation

Relay, contactor and solenoid coils use Inductor magnetic fields to create force. Their stored energy requires a safe release path at switch-off.

\#### 5. Power Conversion

Switch-mode converters repeatedly store and transfer energy using Inductors and Capacitors. Saturation Current, ripple Current, ESR and thermal design are critical.

\#### 6. Motor Applications

Capacitors help start or run certain AC motors, while motor windings have Inductance. Only Capacitors specifically rated for the intended motor duty should be used.

\#### 7. Energy Backup and Pulse Systems

Capacitor banks provide short-duration backup or pulse energy. Stored-energy hazards increase rapidly with Voltage because WC = ½CV².

\#### 8. Protection Components

Flyback diodes, RC snubbers and suppression networks limit switching transients. Component type and rating depend on DC/AC operation, switching speed and energy.

\#### 9. Practical Selection Comparison

| Requirement | Capacitor Considerations | Inductor Considerations |
|---|---|---|
| Nominal Value | Capacitance and tolerance | Inductance and tolerance |
| Electrical Stress | Rated Voltage and ripple Current | RMS and saturation Current |
| Loss | ESR and dielectric loss | Winding and core loss |
| Environment | Temperature and lifetime | Temperature rise and core material |
| Safety | Polarity and stored charge | Switching overvoltage and stored energy |

\#### 10. Testing and Safety

1\. Isolate the supply using an approved procedure.
2\. Consider all stored-energy sources.
3\. Discharge Capacitors through a suitable rated path.
4\. Verify absence of hazardous Voltage.
5\. Avoid interrupting Inductor Current without protection.
6\. Use correctly rated instruments and components.
7\. Follow manufacturer and workplace procedures.

\---

\### Real-Life Applications

\- Chargers, adapters and UPS systems
\- Motor-control and relay panels
\- Solar and battery converters
\- Audio and communication equipment
\- Industrial sensors and instrumentation
\- Automotive electronic systems
\- Renewable-energy interfaces

\---

\### Key Takeaways

\- Capacitors mainly control Voltage change and store Electric-Field energy.
\- Inductors mainly control Current change and store Magnetic-Field energy.
\- Ratings, losses, tolerance and temperature determine reliability.
\- Stored energy remains important after switching or isolation.
\- Practical designs require suitable discharge and transient protection.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Capacitors, Inductors and First-Order Circuits — Topic-15: Practical Applications of Capacitors and Inductors
\- \*\*Supporting Text\*\*: Engineering Circuit Analysis — William H. Hayt, Jack E. Kemmerly and Steven M. Durbin — RC and RL Transients
\---

\# Chapter Summary

\- A Capacitor stores charge and energy in an Electric Field.
\- Capacitance is C = Q/V, and parallel-plate Capacitance is C = εA/d.
\- Capacitor selection depends on type, polarity, Voltage, ESR, ripple Current and temperature.
\- Parallel Capacitances add directly, while Series Capacitances combine by reciprocal sum.
\- An Inductor stores energy in a Magnetic Field and opposes changes in Current.
\- Inductance relates Flux Linkage and Current, while vL = L(di/dt).
\- Inductor selection depends on core, Current rating, saturation, winding Resistance and frequency.
\- Uncoupled Series Inductances add directly, while Parallel Inductances combine by reciprocal sum.
\- Capacitor energy is WC = ½CV², and Inductor energy is WL = ½LI².
\- Capacitor Voltage cannot change instantaneously.
\- Inductor Current cannot change instantaneously.
\- In DC steady state, an ideal Capacitor is Open and an ideal Inductor is Short.
\- First-order RC and RL responses change exponentially.
\- The general response is x(t) = x(∞) + [x(0⁺) − x(∞)]e⁻ᵗ/τ.
\- RC Time Constant is RthC, while RL Time Constant is L/Rth.
\- One Time Constant completes 63.2% of a change.
\- Five Time Constants represent practical completion.
\- Stored-energy and switching hazards require safe discharge and suppression methods.

\---

\# What's Next?

In the next chapter, you will study Magnetism and Electromagnetism, including Magnetic Materials, Magnetic Field, Magnetic Flux, Electromagnetic Induction, Faraday's Laws and Lenz's Law.

These concepts will build on your understanding of Inductors, Magnetic Fields, changing Current, stored magnetic energy and induced Voltage.

\---
