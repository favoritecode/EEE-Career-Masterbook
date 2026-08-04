\# Chapter 27

\# Viva Questions and Answers

\## Transistors, Amplifiers and Operational Amplifiers

\---

\## Viva-001

\*\*Question\*\*

What is a Transistor and what are its main functions?

\*\*Answer\*\*

A Transistor is a three-terminal Semiconductor device that controls electrical Current or Voltage. Its main functions are amplification and switching. It is also used in regulation, signal processing, logic, oscillation and Load driving.

\*\*Key Points\*\*

\- Three-terminal active device
\- Amplification
\- Electronic switching
\- BJT and FET families

\*\*Remember\*\*

A small input controls a larger output using supply energy.

\*\*Follow-up Questions\*\*

1\. What is an active device?
2\. How does a Transistor act as a switch?
3\. What is amplification?
4\. Name two Transistor families.

\*\*Reference\*\*

Chapter-27 → Topic-01

\---

\## Viva-002

\*\*Question\*\*

What is a BJT and why is it called bipolar?

\*\*Answer\*\*

A Bipolar Junction Transistor is a three-region, two-junction device with Emitter, Base and Collector terminals. It is called bipolar because both electrons and Holes participate in its conduction process.

\*\*Key Points\*\*

\- Emitter, Base and Collector
\- Two PN Junctions
\- Electrons and Holes participate
\- NPN or PNP construction

\*\*Remember\*\*

Bipolar means two carrier polarities participate.

\*\*Follow-up Questions\*\*

1\. What are the two BJT types?
2\. State the terminal Current relation.
3\. What does β represent?
4\. Which terminal is the control terminal?

\*\*Reference\*\*

Chapter-27 → Topic-02

\---

\## Viva-003

\*\*Question\*\*

Explain the construction of an NPN Transistor.

\*\*Answer\*\*

An NPN Transistor has a heavily doped N-Type Emitter, a very thin and lightly doped P-Type Base, and an N-Type Collector designed to collect carriers and withstand Voltage and heat. The thin Base minimizes carrier recombination.

\*\*Key Points\*\*

\- N–P–N sequence
\- Heavily doped Emitter
\- Thin, lightly doped Base
\- Collector handles Voltage and heat

\*\*Remember\*\*

The three regions are not physically interchangeable.

\*\*Follow-up Questions\*\*

1\. Why is the Emitter heavily doped?
2\. Why is the Base thin?
3\. Why is the Collector usually larger?
4\. What are the two junctions?

\*\*Reference\*\*

Chapter-27 → Topic-03

\---

\## Viva-004

\*\*Question\*\*

Compare NPN and PNP Transistors.

\*\*Answer\*\*

An NPN uses N–P–N regions and mainly injects electrons; it turns on in normal active operation when its Base is positive relative to its Emitter. A PNP uses P–N–P regions, mainly injects Holes and uses reversed Voltage and conventional-Current polarities. The NPN Emitter arrow points out; the PNP arrow points in.

\*\*Key Points\*\*

\- Complementary structures
\- Opposite bias polarities
\- NPN arrow out
\- PNP arrow in

\*\*Remember\*\*

NPN: Not Pointing iN; PNP: Pointing iN.

\*\*Follow-up Questions\*\*

1\. Which device is common for low-side switching?
2\. Which is useful for simple high-side switching?
3\. What does the arrow show?
4\. Are the Emitter and Collector interchangeable?

\*\*Reference\*\*

Chapter-27 → Topic-03

\---

\## Viva-005

\*\*Question\*\*

Explain BJT operation in the active region.

\*\*Answer\*\*

In the active region, the Emitter-Base junction is forward biased and the Collector-Base junction is reverse biased. The Emitter injects carriers into the thin Base; most cross it and are swept into the Collector. A small Base input therefore controls a larger Collector Current.

\*\*Key Points\*\*

\- Emitter-Base junction forward biased
\- Collector-Base junction reverse biased
\- Low Base recombination
\- Used for linear amplification

\*\*Remember\*\*

In active operation, I_C is often approximated as βI_B.

\*\*Follow-up Questions\*\*

1\. What is carrier injection?
2\. What is Current Gain?
3\. Is β exactly constant?
4\. What is Transistor Power dissipation?

\*\*Reference\*\*

Chapter-27 → Topic-04

\---

\## Viva-006

\*\*Question\*\*

What are cutoff, active and saturation regions of a BJT?

\*\*Answer\*\*

Cutoff is the approximate OFF state with very small Current. Active region supports controlled, approximately linear amplification. Saturation is the approximate ON switching state in which both junctions are forward biased and the external Load circuit mainly limits Collector Current.

\*\*Key Points\*\*

\- Cutoff: OFF
\- Active: amplify
\- Saturation: ON
\- Breakdown is not a normal operating region

\*\*Remember\*\*

Do not apply I_C = βI_B as an exact saturation formula.

\*\*Follow-up Questions\*\*

1\. What is V_CE(sat)?
2\. Which region is used for switching ON?
3\. Which region is used for amplification?
4\. What limits saturated Current?

\*\*Reference\*\*

Chapter-27 → Topic-04

\---

\## Viva-007

\*\*Question\*\*

What is Transistor Biasing and what is a Q-Point?

\*\*Answer\*\*

Biasing establishes the DC Voltages and Currents required for the intended operating region. The Q-Point or Quiescent Point is the no-signal operating condition, commonly specified by I_CQ and V_CEQ. It should allow the required signal swing without cutoff, saturation or excessive heating.

\*\*Key Points\*\*

\- DC operating condition
\- Q means quiescent
\- Supports signal swing
\- Stability is important

\*\*Remember\*\*

The AC signal moves around the DC Q-Point.

\*\*Follow-up Questions\*\*

1\. What is Voltage-divider bias?
2\. Why is fixed bias less stable?
3\. How does an Emitter resistor help?
4\. What is thermal runaway?

\*\*Reference\*\*

Chapter-27 → Topic-05

\---

\## Viva-008

\*\*Question\*\*

Compare Common Base, Common Emitter and Common Collector configurations.

\*\*Answer\*\*

CB has low input Resistance, high output Resistance, Current Gain below unity and no phase reversal. CE provides useful Voltage and Current Gain with about 180° phase reversal. CC or Emitter Follower has Voltage Gain near unity, high input Resistance, low output Resistance and useful Current Gain.

\*\*Key Points\*\*

\- CB: high-frequency and low input Resistance
\- CE: general amplification
\- CC: buffering
\- Only CE reverses phase

\*\*Remember\*\*

CE gives high Power Gain; CC gives impedance transformation.

\*\*Follow-up Questions\*\*

1\. Which has Voltage Gain near unity?
2\. Which has Current Gain below unity?
3\. Which configuration is most common?
4\. Why does CE invert?

\*\*Reference\*\*

Chapter-27 → Topic-06

\---

\## Viva-009

\*\*Question\*\*

What are Transistor input, output and transfer characteristics?

\*\*Answer\*\*

An input characteristic relates input Current and Voltage at a controlled output condition. An output characteristic relates output Current and Voltage for several input levels. A transfer characteristic directly relates an output quantity to an input quantity, such as Collector Current to Base Current.

\*\*Key Points\*\*

\- Input terminal relation
\- Output curve family
\- Transfer control relation
\- Temperature affects curves

\*\*Remember\*\*

CE output curves commonly plot I_C against V_CE for several I_B values.

\*\*Follow-up Questions\*\*

1\. What regions appear on an output curve?
2\. What is a DC Load line?
3\. Where is the Q-Point located?
4\. Why do curves change with temperature?

\*\*Reference\*\*

Chapter-27 → Topic-07

\---

\## Viva-010

\*\*Question\*\*

What is a FET and how does it differ from a BJT?

\*\*Answer\*\*

A FET is a voltage-controlled device whose Gate Electric Field controls channel Current between Source and Drain. It is mainly a unipolar device and has high input Resistance. A BJT is bipolar and commonly requires Base Current as part of its control.

\*\*Key Points\*\*

\- Gate, Source and Drain
\- Voltage-controlled
\- Mainly one carrier type
\- High input Resistance

\*\*Remember\*\*

FET Gate Current is small, but Gate capacitance must be charged during switching.

\*\*Follow-up Questions\*\*

1\. What is V_GS?
2\. What is Drain Current?
3\. Why is FET called unipolar?
4\. What is the Body terminal?

\*\*Reference\*\*

Chapter-27 → Topic-08

\---

\## Viva-011

\*\*Question\*\*

Compare JFET and MOSFET.

\*\*Answer\*\*

A JFET uses a reverse-biased PN-Junction Gate to control channel width and is commonly normally ON at zero Gate bias. A MOSFET uses an insulated Gate. A common enhancement MOSFET is normally OFF and needs sufficient Gate-to-Source Voltage to form or enhance its channel.

\*\*Key Points\*\*

\- JFET: junction Gate
\- MOSFET: insulated Gate
\- JFET commonly normally ON
\- Enhancement MOSFET normally OFF

\*\*Remember\*\*

MOSFET threshold does not necessarily mean fully ON.

\*\*Follow-up Questions\*\*

1\. What is R_DS(on)?
2\. Why is a MOS Gate ESD-sensitive?
3\. What is pinch-off?
4\. What are N-channel and P-channel devices?

\*\*Reference\*\*

Chapter-27 → Topic-09

\---

\## Viva-012

\*\*Question\*\*

What is an Amplifier and where does its output energy come from?

\*\*Answer\*\*

An Amplifier produces an output signal representing the input with increased Voltage, Current or Power. The additional output energy comes from its Power supply; the input signal controls how that energy is delivered to the Load.

\*\*Key Points\*\*

\- Signal-controlled Power conversion
\- Uses a Power supply
\- May increase Voltage, Current or Power
\- Must preserve useful signal information

\*\*Remember\*\*

An Amplifier does not create energy.

\*\*Follow-up Questions\*\*

1\. What is linearity?
2\. What is loading?
3\. What is clipping?
4\. What is amplifier headroom?

\*\*Reference\*\*

Chapter-27 → Topic-10

\---

\## Viva-013

\*\*Question\*\*

How are Amplifiers commonly classified?

\*\*Answer\*\*

Amplifiers may be classified as Voltage, Current or Power amplifiers; small-signal or large-signal stages; DC, audio, RF or wideband stages; RC-coupled, transformer-coupled or direct-coupled circuits; and Class A, B, AB, C or D according to output-stage operation.

\*\*Key Points\*\*

\- Amplified quantity
\- Signal and Power level
\- Frequency range
\- Coupling and operating class

\*\*Remember\*\*

Amplifier selection begins with source, Load, Gain, frequency and Power needs.

\*\*Follow-up Questions\*\*

1\. What is a Power Amplifier?
2\. What is direct coupling?
3\. Compare Class A and Class D.
4\. What is crossover distortion?

\*\*Reference\*\*

Chapter-27 → Topic-11

\---

\## Viva-014

\*\*Question\*\*

Define Gain, Frequency Response and Bandwidth.

\*\*Answer\*\*

Gain is an output-to-input signal ratio. Frequency Response describes how Gain and phase change with frequency. For a basic band-limited amplifier, Bandwidth is the difference between the upper and lower cutoff frequencies: BW = f_H − f_L.

\*\*Key Points\*\*

\- A_v = V_o/V_i
\- Response includes magnitude and phase
\- BW = f_H − f_L
\- Cutoff is commonly about −3 dB for a first-order response

\*\*Remember\*\*

High midband Gain does not guarantee wide Bandwidth.

\*\*Follow-up Questions\*\*

1\. How is Voltage Gain expressed in dB?
2\. How is Power Gain expressed in dB?
3\. What causes low-frequency reduction?
4\. What limits high-frequency response?

\*\*Reference\*\*

Chapter-27 → Topic-12

\---

\## Viva-015

\*\*Question\*\*

What is an Operational Amplifier?

\*\*Answer\*\*

An Op-Amp is a high-Gain differential Voltage amplifier with Inverting and Non-Inverting inputs and a single-ended output. Its conceptual open-loop relation is V_o = A_OL(V_+ − V_-), and it is normally used with feedback.

\*\*Key Points\*\*

\- Differential input
\- Very high open-loop Gain
\- Single output
\- Normally uses feedback

\*\*Remember\*\*

A tiny differential input can drive an open-loop Op-Amp toward a supply limit.

\*\*Follow-up Questions\*\*

1\. Which input is marked plus?
2\. Which input is marked minus?
3\. What is open-loop Gain?
4\. Why is negative feedback used?

\*\*Reference\*\*

Chapter-27 → Topic-13

\---

\## Viva-016

\*\*Question\*\*

State the ideal characteristics and golden rules of an Op-Amp.

\*\*Answer\*\*

An ideal Op-Amp has infinite open-loop Gain, input Resistance, Bandwidth, Slew Rate, CMRR and PSRR; zero output Resistance, offset, bias Current and noise. During linear negative-feedback operation, its input Currents are zero and its two input Voltages are approximately equal.

\*\*Key Points\*\*

\- Infinite input Resistance
\- Zero output Resistance
\- Infinite Gain and Bandwidth
\- I_+ = I_- = 0 and V_+ ≈ V_-

\*\*Remember\*\*

The equal-input rule does not apply when the Op-Amp is saturated or lacks negative feedback.

\*\*Follow-up Questions\*\*

1\. What is CMRR?
2\. What is PSRR?
3\. What is Slew Rate?
4\. What is input offset Voltage?

\*\*Reference\*\*

Chapter-27 → Topic-14

\---

\## Viva-017

\*\*Question\*\*

Explain an ideal Inverting Op-Amp amplifier.

\*\*Answer\*\*

The signal reaches the Inverting input through R_in, the Non-Inverting input is referenced, and R_f provides negative feedback from output. Its ideal Gain is A_v = −R_f/R_in. The negative sign shows that output is inverted by 180°.

\*\*Key Points\*\*

\- Input through R_in
\- Feedback through R_f
\- A_v = −R_f/R_in
\- Phase inversion

\*\*Remember\*\*

With the Non-Inverting input grounded, the Inverting node is a virtual ground during linear ideal operation.

\*\*Follow-up Questions\*\*

1\. What is virtual ground?
2\. What is input Resistance approximately?
3\. What happens if R_f doubles?
4\. What practical limits can clip output?

\*\*Reference\*\*

Chapter-27 → Topic-15

\---

\## Viva-018

\*\*Question\*\*

Explain an ideal Non-Inverting Op-Amp amplifier.

\*\*Answer\*\*

The signal is applied to the Non-Inverting input, while R_f and R_g form the negative-feedback divider at the Inverting input. Its ideal closed-loop Gain is A_v = 1 + R_f/R_g, so the output has the same polarity as the input and Gain cannot be below unity in this basic form.

\*\*Key Points\*\*

\- Input at positive terminal
\- Same output polarity
\- High input Resistance
\- A_v = 1 + R_f/R_g

\*\*Remember\*\*

The added 1 must not be omitted.

\*\*Follow-up Questions\*\*

1\. What happens when R_f is zero?
2\. Why is input Resistance high?
3\. Can basic Gain be less than 1?
4\. How does resistor tolerance affect Gain?

\*\*Reference\*\*

Chapter-27 → Topic-15

\---

\## Viva-019

\*\*Question\*\*

What is a Voltage Follower and why is it useful?

\*\*Answer\*\*

A Voltage Follower directly feeds output back to the Inverting input and applies the signal to the Non-Inverting input. Its ideal Voltage Gain is 1. It provides high input Resistance and low output Resistance, so it isolates a weak source from a heavier following Load.

\*\*Key Points\*\*

\- Unity Voltage Gain
\- No phase reversal
\- High input Resistance
\- Low output Resistance

\*\*Remember\*\*

A buffer improves drive and isolation, not Voltage magnitude.

\*\*Follow-up Questions\*\*

1\. Is a follower useful without Voltage Gain?
2\. What is impedance matching?
3\. What limits output Current?
4\. What is unity-Gain stability?

\*\*Reference\*\*

Chapter-27 → Topic-15

\---

\## Viva-020

\*\*Question\*\*

Give practical applications and important limitations of Transistors and Op-Amps.

\*\*Answer\*\*

Transistors drive relays, Motors, lamps and Power converters and provide analog or RF amplification. Op-Amps condition sensors, buffer signals, implement active Filters and create control error amplifiers. Practical limits include Voltage, Current, Power, temperature, Gain variation, ESD, Bandwidth, Slew Rate, offset, noise, common-mode range and output swing.

\*\*Key Points\*\*

\- Signal processing and Load drive
\- Instrumentation and control
\- Electrical and thermal ratings
\- Protection, layout and ESD control

\*\*Remember\*\*

Use ideal equations first, then verify every relevant datasheet limit.

\*\*Follow-up Questions\*\*

1\. Why does an inductive Load need a clamp?
2\. Why is supply decoupling used?
3\. What causes Op-Amp saturation?
4\. How would you troubleshoot a dead driver stage?

\*\*Reference\*\*

Chapter-27 → Topic-16 and Topic-17

\---

\# End of Chapter-27 Viva Questions and Answers
