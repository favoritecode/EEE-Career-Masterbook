\# Chapter 13

\# Resonance and Basic Filter Circuits

\---

\## Introduction

Inductors and Capacitors oppose AC differently. Inductive Reactance increases with Frequency, while Capacitive Reactance decreases. At one particular Frequency, their effects can become equal. This condition is called Resonance.

Resonance allows a Circuit to respond strongly to a selected Frequency or reject unwanted Frequencies. The same frequency-dependent behavior is used in Filters. A Filter passes a required range of Frequencies and reduces Frequencies outside that range.

This chapter explains Series Resonance, Parallel Resonance, Resonant Frequency, Quality Factor, Bandwidth, Selectivity and basic passive Filters. The focus is practical Electrical Engineering with clear Phasor relationships and simple calculations based on Chapter-12 AC Circuit Analysis.

\---

\## Learning Objectives

After completing this chapter, you will be able to:

\- Explain Resonance in an RLC Circuit.
\- Describe Series Resonance and its electrical behavior.
\- Describe Parallel Resonance and its electrical behavior.
\- Calculate Resonant Frequency.
\- Explain and calculate Quality Factor.
\- Define lower and upper cutoff Frequencies.
\- Calculate Bandwidth.
\- Explain Selectivity and its relationship with Q and Bandwidth.
\- Explain the purpose and basic classification of Filters.
\- Describe Low Pass and High Pass Filters.
\- Describe Band Pass and Band Stop Filters.
\- Interpret basic frequency-response curves.
\- Relate Resonance and Filters to practical electrical and electronic systems.

\---

\## Chapter Contents

This chapter covers the following topics:

1\. Introduction to Resonance
2\. Series Resonance
3\. Parallel Resonance
4\. Resonant Frequency
5\. Quality Factor (Q)
6\. Bandwidth
7\. Selectivity
8\. Introduction to Filters
9\. Low Pass Filter
10\. High Pass Filter
11\. Band Pass Filter
12\. Band Stop Filter
13\. Practical Applications of Resonance and Filters

\---

\## Topic 01: Introduction to Resonance

\### Definition

Resonance is the condition in an AC Circuit when Inductive Reactance and Capacitive Reactance are equal in magnitude:

\*\*XL = XC\*\*

At Resonance, the net Reactance becomes zero under the ideal tuned condition.

\---

\### Importance

Resonance is important because it provides Frequency selection, maximum or minimum input Impedance, controlled Current or Voltage magnification and efficient tuning.

It is used in:

\- Radio and communication tuning
\- Frequency-selective Filters
\- Oscillators
\- Induction heating
\- Impedance matching
\- Measurement instruments
\- Power-system harmonic studies

\---

\### Main Concepts

\#### 1. Frequency-Dependent Reactance

Inductive Reactance is:

\*\*XL = 2πfL\*\*

Capacitive Reactance is:

\*\*XC = 1/(2πfC)\*\*

As Frequency rises, XL rises and XC falls.

\#### 2. Resonant Condition

At Resonant Frequency f₀:

\*\*XL = XC\*\*

The positive Inductive Reactance and negative Capacitive Reactance cancel in the total Circuit expression.

\#### 3. Energy Exchange

The Capacitor stores Electric-Field energy, while the Inductor stores Magnetic-Field energy. Near Resonance, energy is exchanged repeatedly between these fields.

\#### 4. Ideal and Practical Resonance

An ideal LC Circuit has no loss. A practical Circuit contains Resistance, winding loss, Capacitor ESR and other losses that limit response and Quality Factor.

\#### 5. Series and Parallel Comparison

| Feature | Series Resonance | Parallel Resonance |
|---|---|---|
| Input Impedance at Resonance | Minimum | Maximum in the ideal practical model |
| Supply Current | Maximum | Minimum |
| Power Factor | Unity | Unity at the input |
| Common Description | Acceptor Circuit | Rejector or Tank Circuit |

\#### 6. Resonance Safety

Component Voltage or branch Current may greatly exceed the supply value near Resonance. Component ratings and losses must therefore be checked.

\---

\### Real-Life Applications

\- A radio receiver selects one station Frequency.
\- A tuned sensor detects a narrow Frequency range.
\- Resonant converters transfer energy efficiently under controlled conditions.
\- Power engineers investigate unwanted harmonic Resonance.

\---

\### Key Takeaways

\- Resonance occurs when XL = XC.
\- Inductive and Capacitive effects cancel at the tuned Frequency.
\- Series and Parallel Resonance have opposite input-Impedance behavior.
\- Practical loss limits the response.
\- Resonant magnification can create component stress.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-01: Introduction to Resonance
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 02: Series Resonance

\### Definition

Series Resonance occurs in a Series RLC Circuit when XL = XC, causing the net Reactance to become zero and the total Impedance to become purely Resistive.

\---

\### Importance

Series Resonance produces minimum Impedance and maximum supply Current, making it useful for selecting or accepting a desired Frequency.

\---

\### Main Concepts

\#### 1. Series RLC Impedance

\*\*Z = R + j(XL − XC)\*\*

Its magnitude is:

\*\*|Z| = √[R² + (XL − XC)²]\*\*

\#### 2. At Resonance

When XL = XC:

\*\*Z = R\*\*

\*\*I = V/R\*\*

Therefore, Current is maximum for a fixed supply Voltage and Circuit Resistance.

\#### 3. Phase and Power Factor

At Resonance, the source Voltage and Current are in phase. The Circuit Power Factor is unity.

\#### 4. Below and Above Resonance

| Frequency Region | Relationship | Circuit Nature |
|---|---|---|
| f < f₀ | XC > XL | Capacitive |
| f = f₀ | XC = XL | Resistive |
| f > f₀ | XL > XC | Inductive |

\#### 5. Voltage Magnification

At Resonance:

\*\*VL = IXL\*\*

\*\*VC = IXC\*\*

VL and VC are equal in magnitude and opposite in phase. Each may be much larger than the supply Voltage even though their Phasor sum cancels.

\#### 6. Worked Example

At Resonance, a Series Circuit has R = 10 Ω and supply V = 100 V RMS.

\*\*I = V/R = 100/10 = 10 A\*\*

If XL = XC = 50 Ω:

\*\*VL = VC = 10 × 50 = 500 V\*\*

The large component Voltages show why ratings must be checked.

\---

\### Real-Life Applications

\- Frequency-selective receiver Circuits
\- Series-tuned Filters
\- Impedance matching
\- Resonant power converters
\- Laboratory measurement of unknown L or C

\---

\### Key Takeaways

\- Series Resonance makes Z minimum and purely Resistive.
\- Supply Current is maximum.
\- Source Power Factor is unity.
\- Below Resonance the Circuit is Capacitive; above it is Inductive.
\- VL and VC can be much larger than supply Voltage.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-02: Series Resonance
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 03: Parallel Resonance

\### Definition

Parallel Resonance occurs when the net reactive effect of Inductive and Capacitive branches cancels, making the input Admittance purely Conductive and the input Impedance maximum under the ideal tuned condition.

\---

\### Importance

Parallel Resonance produces low supply Current while allowing circulating reactive branch Currents. It is used for Frequency rejection, tuning and energy exchange.

\---

\### Main Concepts

\#### 1. Ideal Parallel LC Circuit

For ideal branches:

\*\*IL = V/XL\*\*

\*\*IC = V/XC\*\*

At Resonance, IL and IC are equal in magnitude and opposite in phase, so their reactive supply components cancel.

\#### 2. Input Admittance

For a simple Parallel RLC model:

\*\*Y = 1/R + j(1/XC − 1/XL)\*\*

At Resonance, the imaginary part becomes zero.

\#### 3. Input Behavior

At Parallel Resonance:

\- Input Impedance is maximum.
\- Supply Current is minimum.
\- Input Power Factor is unity.
\- Large Current may circulate between L and C.

\#### 4. Tank Circuit

A Parallel LC combination is often called a Tank Circuit because energy moves between the Inductor's Magnetic Field and the Capacitor's Electric Field.

\#### 5. Practical Coil Resistance

A real Inductor has winding Resistance. This changes the exact Resonant Frequency, maximum Impedance and Q. Simple ideal formulas are approximations.

\#### 6. Series and Parallel Response

| Quantity | Series Resonance | Parallel Resonance |
|---|---|---|
| Input Impedance | Minimum | Maximum |
| Supply Current | Maximum | Minimum |
| Internal Stress | High component Voltage | High branch Current |

\---

\### Real-Life Applications

\- Oscillator Tank Circuits
\- Parallel-tuned amplifiers
\- Frequency traps
\- Communication receivers
\- Harmonic filtering

\---

\### Key Takeaways

\- Parallel Resonance cancels reactive input Current.
\- Input Impedance is maximum and supply Current minimum.
\- Branch Currents may be large.
\- The LC combination is called a Tank Circuit.
\- Practical loss changes ideal predictions.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-03: Parallel Resonance
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 04: Resonant Frequency

\### Definition

Resonant Frequency is the Frequency at which Inductive Reactance equals Capacitive Reactance.

\*\*f₀ = 1/(2π√LC)\*\*

for the ideal basic RLC model.

\---

\### Importance

Resonant Frequency sets the center or tuned Frequency of Resonant Circuits and many Filters.

\---

\### Main Concepts

\#### 1. Formula Development

At Resonance:

\*\*2πf₀L = 1/(2πf₀C)\*\*

Solving gives:

\*\*f₀ = 1/(2π√LC)\*\*

Angular Resonant Frequency is:

\*\*ω₀ = 2πf₀ = 1/√LC\*\*

\#### 2. Effect of L and C

Increasing either L or C lowers Resonant Frequency. Decreasing either raises it.

\#### 3. Worked Example

For L = 10 mH and C = 10 µF:

\*\*LC = 10 × 10⁻³ × 10 × 10⁻⁶ = 10⁻⁷\*\*

\*\*f₀ = 1/[2π√(10⁻⁷)] ≈ 503.3 Hz\*\*

\#### 4. Verification

Calculate XL and XC at the result. Both should be equal within rounding.

\#### 5. Practical Tolerance

Actual L and C values have tolerance and may change with temperature, Voltage, Current, Frequency and aging. Actual Resonance may differ from the calculated value.

\#### 6. Measurement

Resonant Frequency may be found by sweeping Frequency and observing maximum Current in Series Resonance or maximum Impedance/minimum source Current in Parallel Resonance.

\---

\### Real-Life Applications

\- Tuning radio channels
\- Setting Filter center Frequency
\- Designing resonant converters
\- Measuring component values
\- Detecting Frequency shifts in sensors

\---

\### Key Takeaways

\- f₀ = 1/(2π√LC).
\- ω₀ = 1/√LC.
\- Increasing L or C lowers f₀.
\- XL and XC should be equal at f₀.
\- Tolerance and loss shift practical response.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-04: Resonant Frequency
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 05: Quality Factor (Q)

\### Definition

Quality Factor is a dimensionless measure of how sharply a Resonant Circuit responds around its Resonant Frequency and how small its energy loss is relative to stored energy.

\---

\### Importance

Q helps engineers compare Resonance sharpness, Selectivity, Bandwidth and internal magnification.

\---

\### Main Concepts

\#### 1. General Meaning

A high-Q Circuit has low relative loss, narrow Bandwidth and sharp Resonance. A low-Q Circuit has higher relative loss and broader response.

\#### 2. Series RLC Formula

For a simple Series RLC Circuit:

\*\*Q = XL/R = ω₀L/R\*\*

Also:

\*\*Q = 1/(ω₀CR)\*\*

\#### 3. Bandwidth Relationship

For a standard Resonant response:

\*\*Q = f₀/BW\*\*

\#### 4. Voltage Magnification

In an idealized Series Resonant Circuit:

\*\*VL/V ≈ VC/V ≈ Q\*\*

This relationship assumes the defined Series RLC model.

\#### 5. Worked Example

If f₀ = 10 kHz and BW = 500 Hz:

\*\*Q = 10,000/500 = 20\*\*

\#### 6. Practical Limitations

Q depends on coil Resistance, Capacitor ESR, dielectric loss, radiation, loading and measurement connections. Loaded Q is generally lower than unloaded component or Circuit Q.

| Q | Bandwidth | Selectivity | Loss |
|---|---|---|---|
| High | Narrow | High | Low relative loss |
| Low | Wide | Low | Higher relative loss |

\---

\### Real-Life Applications

\- Receiver channel selection
\- Oscillator stability
\- Resonant sensor sensitivity
\- Filter specification
\- Component and coil testing

\---

\### Key Takeaways

\- Q is dimensionless.
\- High Q means sharp Resonance and narrow Bandwidth.
\- For Series RLC, Q = ω₀L/R.
\- Q = f₀/BW for the standard Resonant response.
\- Practical loading and losses reduce Q.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-05: Quality Factor (Q)
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 06: Bandwidth

\### Definition

Bandwidth is the Frequency range between the lower cutoff Frequency fL and upper cutoff Frequency fH:

\*\*BW = fH − fL\*\*

\---

\### Importance

Bandwidth indicates the range of Frequencies a Resonant Circuit or Filter passes or responds to according to a stated criterion.

\---

\### Main Concepts

\#### 1. Half-Power Frequencies

For a common Resonant response, fL and fH are the Frequencies where output Power is half its maximum value.

For the same Resistive reference, amplitude becomes:

\*\*1/√2 ≈ 0.707\*\*

of its maximum. This corresponds to −3 dB.

\#### 2. Bandwidth Formula

\*\*BW = fH − fL\*\*

For a simple Series RLC Circuit:

\*\*BW = R/(2πL)\*\*

and Q = f₀/BW.

\#### 3. Worked Example

If fL = 950 Hz and fH = 1050 Hz:

\*\*BW = 1050 − 950 = 100 Hz\*\*

If f₀ = 1000 Hz:

\*\*Q = 1000/100 = 10\*\*

\#### 4. Center Relationship

For the standard Resonant response:

\*\*f₀ = √(fLfH)\*\*

The arithmetic average is only an approximation when the Bandwidth is narrow.

\#### 5. Bandwidth and Information

A wider communication Bandwidth can carry a wider range of signal Frequencies, while a narrow tuned Circuit provides stronger Frequency selection.

\#### 6. Measurement Caution

The cutoff criterion and measured quantity must be stated. Voltage, Current, Power and transfer gain may produce different interpretations depending on Circuit topology.

\---

\### Real-Life Applications

\- Communication channel width
\- Audio Frequency range
\- Sensor response range
\- Filter testing
\- Resonant Circuit characterization

\---

\### Key Takeaways

\- BW = fH − fL.
\- Half-power amplitude is approximately 0.707 of maximum.
\- Half Power corresponds to −3 dB.
\- Narrow Bandwidth normally means higher Selectivity.
\- The measurement definition must be stated.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-06: Bandwidth
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 07: Selectivity

\### Definition

Selectivity is the ability of a Resonant Circuit or Filter to respond strongly to desired Frequencies while reducing nearby unwanted Frequencies.

\---

\### Importance

Selectivity determines how well closely spaced channels, signals, noise or harmonics can be separated.

\---

\### Main Concepts

\#### 1. Relationship with Q

For comparable Resonant Circuits, higher Q produces sharper response and greater Selectivity.

\#### 2. Relationship with Bandwidth

At a fixed center Frequency:

\- Narrower Bandwidth → Higher Selectivity
\- Wider Bandwidth → Lower Selectivity

because Q = f₀/BW.

\#### 3. Response Curve

A highly selective response has a narrow peak or notch with steep sides. A less selective response changes more gradually with Frequency.

\#### 4. Selectivity Trade-Off

Very narrow Bandwidth may reject useful modulation or create slow time response. The required application determines the correct balance.

\#### 5. Cascaded Stages

Multiple Filter stages can produce steeper attenuation than one simple first-order stage, but also add loss, phase shift, cost and tolerance sensitivity.

\#### 6. Loaded Selectivity

Connecting a source and load changes effective Resistance and Q. A Circuit that is sharp without a load may become broader after connection.

\---

\### Real-Life Applications

\- Separating radio stations
\- Rejecting power-line hum
\- Selecting sensor Frequencies
\- Removing harmonics
\- Limiting measurement noise

\---

\### Key Takeaways

\- Selectivity describes Frequency discrimination.
\- Higher Q usually increases Selectivity.
\- Narrow Bandwidth usually increases Selectivity.
\- Source and load Resistance affect practical response.
\- Excessive Selectivity may remove useful signal content.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-07: Selectivity
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 08: Introduction to Filters

\### Definition

A Filter is a Frequency-selective Circuit that passes a desired range of Frequencies and attenuates unwanted Frequencies.

\---

\### Importance

Filters reduce noise, separate signals, smooth power supplies, limit Bandwidth and protect measurement or control systems from unwanted Frequency components.

\---

\### Main Concepts

\#### 1. Passband

The Passband is the Frequency range transmitted with acceptable loss.

\#### 2. Stopband

The Stopband is the Frequency range intentionally attenuated.

\#### 3. Transition Band

The Transition Band lies between Passband and Stopband, where response changes from passing to attenuation.

\#### 4. Cutoff Frequency

The Cutoff Frequency marks a specified response boundary. In a simple first-order passive Filter, it commonly corresponds to 0.707 of the Passband Voltage ratio or −3 dB under appropriate loading assumptions.

\#### 5. Passive and Active Filters

| Filter Type | Components | Main Features |
|---|---|---|
| Passive | R, L and C | No external gain supply; may load source |
| Active | Operational amplifier with R and C | Can provide gain and buffering; limited by active device |

This chapter focuses mainly on basic passive Filter behavior.

\#### 6. Four Basic Response Types

\- Low Pass
\- High Pass
\- Band Pass
\- Band Stop

\#### 7. Filter Order

Filter Order is related to the number of independent energy-storage sections and determines the asymptotic attenuation slope. A first-order Filter changes approximately 20 dB per decade beyond its transition region.

\---

\### Real-Life Applications

\- Power-supply ripple reduction
\- Audio tone control
\- Communication channel selection
\- Sensor noise removal
\- Anti-aliasing and signal conditioning

\---

\### Key Takeaways

\- A Filter separates Frequencies by response.
\- Passband is accepted; Stopband is attenuated.
\- Cutoff is defined by a stated criterion.
\- Passive Filters use R, L and C.
\- Filter loading changes practical performance.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-08: Introduction to Filters
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 09: Low Pass Filter

\### Definition

A Low Pass Filter passes Frequencies below its cutoff region with relatively low attenuation and reduces higher Frequencies.

\---

\### Importance

Low Pass Filters remove high-frequency noise, smooth waveforms and limit signal Bandwidth.

\---

\### Main Concepts

\#### 1. Basic RC Low Pass Circuit

A resistor is connected in Series, a Capacitor is connected from output to the return path, and output is taken across the Capacitor.

\#### 2. Frequency Behavior

At low Frequency, XC is large and output remains close to input under light loading. At high Frequency, XC becomes small and the Capacitor diverts more signal away from the output.

\#### 3. Cutoff Frequency

For an unloaded first-order RC Low Pass Filter:

\*\*fc = 1/(2πRC)\*\*

At fc, ideal magnitude ratio is approximately 0.707 and phase is −45°.

\#### 4. Transfer Function

\*\*H(jω) = 1/(1 + jωRC)\*\*

This form shows that magnitude falls and phase becomes more negative as Frequency rises.

\#### 5. Worked Example

For R = 1 kΩ and C = 0.1 µF:

\*\*fc = 1/[2π(1000)(0.1 × 10⁻⁶)] ≈ 1591.5 Hz\*\*

\#### 6. Loading Effect

A load connected across the output changes effective Resistance and therefore changes gain and cutoff. Source Resistance also affects the design.

\---

\### Real-Life Applications

\- Sensor smoothing
\- Audio treble reduction
\- Power-supply noise bypassing
\- Anti-aliasing preparation
\- PWM waveform averaging

\---

\### Key Takeaways

\- A Low Pass Filter passes lower Frequencies.
\- A basic RC output is taken across C.
\- fc = 1/(2πRC) for the simple unloaded model.
\- At cutoff, magnitude is about 0.707.
\- Source and load Resistance change practical response.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-09: Low Pass Filter
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 10: High Pass Filter

\### Definition

A High Pass Filter passes Frequencies above its cutoff region with relatively low attenuation and reduces lower Frequencies, including DC in the ideal capacitor-coupled case.

\---

\### Importance

High Pass Filters remove DC offset, block slow variations and emphasize rapid signal changes.

\---

\### Main Concepts

\#### 1. Basic RC High Pass Circuit

A Capacitor is connected in Series, a resistor is connected from output to the return path, and output is taken across the resistor.

\#### 2. Frequency Behavior

At low Frequency, XC is large and little signal reaches the output. At high Frequency, XC becomes small and output approaches input under light loading.

\#### 3. Cutoff Frequency

For an unloaded first-order RC High Pass Filter:

\*\*fc = 1/(2πRC)\*\*

At fc, ideal magnitude ratio is approximately 0.707 and output phase is +45° relative to input.

\#### 4. Transfer Function

\*\*H(jω) = jωRC/(1 + jωRC)\*\*

\#### 5. Worked Example

For R = 10 kΩ and C = 1 µF:

\*\*fc = 1/[2π(10,000)(1 × 10⁻⁶)] ≈ 15.9 Hz\*\*

\#### 6. DC Blocking

At 0 Hz, an ideal Series Capacitor is Open. Therefore, steady DC does not appear across the output resistor in the ideal basic model.

\---

\### Real-Life Applications

\- AC coupling between amplifier stages
\- DC offset removal
\- Audio bass reduction
\- Edge and pulse detection
\- Sensor drift rejection

\---

\### Key Takeaways

\- A High Pass Filter passes higher Frequencies.
\- A basic RC output is taken across R.
\- fc = 1/(2πRC) for the simple unloaded model.
\- The Series Capacitor blocks ideal steady DC.
\- Loading affects gain and cutoff.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-10: High Pass Filter
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 11: Band Pass Filter

\### Definition

A Band Pass Filter passes a selected band of Frequencies between lower and upper cutoff Frequencies while attenuating Frequencies below and above that band.

\---

\### Importance

Band Pass Filters isolate a required signal channel or measurement band from lower- and higher-Frequency interference.

\---

\### Main Concepts

\#### 1. Passband

The desired band lies between fL and fH.

\*\*BW = fH − fL\*\*

\#### 2. Center Frequency

For a standard Band Pass response:

\*\*f₀ = √(fLfH)\*\*

\#### 3. Basic Implementations

A Band Pass response may be formed by:

\- A Resonant RLC Circuit
\- Cascading suitable High Pass and Low Pass stages
\- An active Filter stage

The High Pass cutoff must be below the Low Pass cutoff for a useful cascaded Passband.

\#### 4. Quality Factor

\*\*Q = f₀/BW\*\*

A narrower Bandwidth at the same center Frequency gives higher Q and Selectivity.

\#### 5. Worked Example

If fL = 900 Hz and fH = 1100 Hz:

\*\*BW = 200 Hz\*\*

\*\*f₀ = √(900 × 1100) ≈ 995 Hz\*\*

\#### 6. Practical Cascading

One stage may load another, shifting actual cutoffs. Buffering or full network analysis may be required.

\---

\### Real-Life Applications

\- Radio channel selection
\- Audio equalization
\- Biomedical signal extraction
\- Vibration monitoring
\- Communication receivers

\---

\### Key Takeaways

\- Band Pass Filters pass a middle Frequency range.
\- BW = fH − fL.
\- Center Frequency is commonly √(fLfH).
\- Q = f₀/BW.
\- Cascaded stages may interact through loading.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-11: Band Pass Filter
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 12: Band Stop Filter

\### Definition

A Band Stop Filter attenuates a selected band of Frequencies between lower and upper cutoff Frequencies while passing Frequencies below and above that band.

\---

\### Importance

Band Stop Filters remove narrow interference, unwanted tones or Frequency bands without rejecting the complete useful spectrum.

\---

\### Main Concepts

\#### 1. Alternative Names

A Band Stop Filter is also called a Band Reject Filter. A narrow Band Stop Filter is commonly called a Notch Filter.

\#### 2. Stopband

The rejected band lies between fL and fH. Its width is:

\*\*BW = fH − fL\*\*

\#### 3. Notch Frequency

The Frequency of maximum rejection is the Notch Frequency. In a standard symmetrical design, it is associated with the center Frequency.

\#### 4. Basic Implementations

Band Stop response may be produced by:

\- Resonant branches
\- Twin-T RC networks
\- Parallel paths combining Low Pass and High Pass behavior
\- Active Filter Circuits

\#### 5. Worked Application

A 50 Hz Notch Filter can reduce power-line interference in a low-level measurement system. Its Bandwidth must be wide enough for component tolerance but narrow enough to preserve nearby useful signal content.

\#### 6. Notch Depth

Actual rejection depends strongly on component matching, loss, source/load Impedance and active-device limitations.

\#### 7. Band Pass Comparison

| Filter | Middle Band | Frequencies Outside Middle Band |
|---|---|---|
| Band Pass | Passed | Attenuated |
| Band Stop | Attenuated | Passed |

\---

\### Real-Life Applications

\- 50 Hz or 60 Hz hum rejection
\- Removal of a mechanical vibration tone
\- Communication interference suppression
\- Harmonic traps
\- Audio feedback control

\---

\### Key Takeaways

\- Band Stop Filters reject a middle Frequency band.
\- A narrow Band Stop response is a Notch.
\- Component matching controls practical Notch depth.
\- Band Pass and Band Stop responses are complementary in purpose.
\- Useful nearby signals must be considered.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-12: Band Stop Filter
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\## Topic 13: Practical Applications of Resonance and Filters

\### Definition

Practical Resonance and Filter applications use Frequency-dependent RLC behavior to select, pass, reject, tune, measure or transfer electrical signals and energy.

\---

\### Importance

Nearly every power, control, communication and instrumentation system requires some form of Frequency selection or unwanted-signal reduction.

\---

\### Main Concepts

\#### 1. Communication Systems

Tuned Circuits and Band Pass Filters select desired channels. Low Pass and Band Stop Filters reduce out-of-band noise and interference.

\#### 2. Power Supplies and Converters

Low Pass Filters reduce switching ripple. Resonant converters use controlled LC behavior to reduce switching stress or shape energy transfer.

\#### 3. Audio Systems

Low Pass, High Pass and Band Pass networks divide audio Frequencies among speakers and shape tone. Component and speaker Impedance must be considered.

\#### 4. Instrumentation and Sensors

Filters remove noise, drift and mains hum. Resonant sensors convert changes in mass, position or material properties into a measurable Frequency shift.

\#### 5. Power-System Harmonics

Tuned Filters can reduce selected harmonics. Incorrect design may create harmful Resonance with the supply network.

\#### 6. Wireless Energy and Induction Heating

Resonance increases energy exchange at a selected Frequency. Coil coupling, losses, detuning and safe electromagnetic exposure require professional design.

\#### 7. Design Workflow

1\. Define required Passband or Stopband.
2\. Identify source and load Impedance.
3\. Select Filter or Resonant topology.
4\. Calculate f₀, cutoff Frequencies, Q and Bandwidth.
5\. Select components with suitable tolerance and ratings.
6\. Simulate the complete loaded Circuit.
7\. Build and measure safely.
8\. Compare actual and calculated response.
9\. Adjust for loss, tolerance and parasitic effects.

\#### 8. Practical Selection Table

| Requirement | Typical Starting Choice |
|---|---|
| Remove high-frequency noise | Low Pass Filter |
| Block DC or slow drift | High Pass Filter |
| Select one Frequency range | Band Pass Filter |
| Remove one interference range | Band Stop or Notch Filter |
| Tune strongly to one Frequency | Resonant RLC Circuit |

\#### 9. Safety and Reliability

Resonant component Voltages or Currents may exceed supply values. Check insulation, Current, Power, ESR, core saturation, heating and protective limits. Power-system and high-power Resonance requires qualified engineering procedures.

\---

\### Real-Life Applications

\- Radio, television and wireless receivers
\- Audio crossover and equalizer Circuits
\- Sensor and biomedical instrumentation
\- Chargers and switching power supplies
\- Industrial harmonic Filters
\- Induction heating and resonant converters
\- Vibration and condition monitoring

\---

\### Key Takeaways

\- Resonance selects or rejects a narrow Frequency region.
\- Filters shape the useful Frequency spectrum.
\- Source and load Impedance affect real response.
\- Tolerance, loss and parasitic elements shift Frequency characteristics.
\- Resonant magnification requires careful component ratings.
\- Simulation and measurement should verify calculations.

\---

\### Reference

\- \*\*Primary Textbook\*\*: Fundamentals of Electric Circuits
\- \*\*Author\*\*: Charles K. Alexander and Matthew N. O. Sadiku
\- \*\*Relevant Chapter\*\*: Frequency Response, Resonance and Filters — Topic-13: Practical Applications of Resonance and Filters
\- \*\*Supporting Text\*\*: Introductory Circuit Analysis — Robert L. Boylestad — Resonance and Filters
\---

\# Chapter Summary

\- Resonance occurs when Inductive and Capacitive Reactances are equal.
\- Series Resonance produces minimum input Impedance and maximum supply Current.
\- Parallel Resonance produces maximum input Impedance and minimum supply Current in the ideal tuned model.
\- Resonant Frequency is f₀ = 1/(2π√LC).
\- Series Resonance is Capacitive below f₀ and Inductive above f₀.
\- Resonant component Voltage or branch Current may exceed the supply quantity.
\- Quality Factor describes Resonance sharpness and relative loss.
\- For a standard response, Q = f₀/BW.
\- Bandwidth is BW = fH − fL.
\- Half-power amplitude is approximately 0.707 of maximum or −3 dB.
\- Selectivity increases as response becomes narrower at a fixed center Frequency.
\- A Filter passes desired Frequencies and attenuates unwanted Frequencies.
\- A Low Pass Filter passes low Frequencies.
\- A High Pass Filter passes high Frequencies.
\- A Band Pass Filter passes a middle Frequency band.
\- A Band Stop Filter rejects a middle Frequency band.
\- Source/load Impedance, tolerance, loss and parasitic effects change practical response.
\- Safe design must consider Resonant Voltage, Current, heating and insulation stress.

\---

\# What's Next?

In the next chapter, you will study Three-Phase AC Systems, including phase sequence, Star and Delta connections, line and phase quantities, balanced loads and Three-Phase Power.

These concepts will build on your understanding of AC Phasors, phase angles, Impedance, Frequency response and Power calculations.

\---
