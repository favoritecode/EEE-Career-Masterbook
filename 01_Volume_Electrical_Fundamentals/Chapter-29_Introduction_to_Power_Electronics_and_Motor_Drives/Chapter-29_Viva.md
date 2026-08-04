\# Chapter 29

\# Viva Questions and Answers

\## Introduction to Power Electronics and Motor Drives

\---

\## Viva-001

\*\*Question\*\*

What is Power Electronics?

\*\*Answer\*\*

Power Electronics is the branch of engineering that uses solid-state switching devices and control techniques to convert, regulate and condition Electrical Power. It combines Electrical Power, electronic devices and control systems.

\*\*Key Points\*\*

\- Converts and controls Electrical Power
\- Uses Power Semiconductor switches
\- Controls Voltage, Current, Frequency and Power Flow
\- Covers AC-DC, DC-DC, DC-AC and AC-AC conversion

\*\*Remember\*\*

Power Electronics connects low-Power control with high-Power Loads.

\*\*Follow-up Questions\*\*

1. Name the four conversion families.
2. What is a Power converter?
3. Why are Semiconductor switches used?
4. Give three applications.

\*\*Reference\*\*

Chapter-29 → Topic-01

\---

\## Viva-002

\*\*Question\*\*

Why is Power Electronics important in modern engineering?

\*\*Answer\*\*

Power Electronics delivers Power in the form required by a Load with high Efficiency and rapid control. It enables compact Power Supplies, renewable-energy interfaces, Electric Vehicles, efficient lighting, battery systems and variable-speed Motor Drives.

\*\*Key Points\*\*

\- High-Efficiency conversion
\- Flexible control
\- Compact equipment
\- Essential for automation and renewable Energy

\*\*Remember\*\*

Modern Energy control depends heavily on Power Electronic conversion.

\*\*Follow-up Questions\*\*

1. How does it improve Motor performance?
2. Where is it used in renewable Energy?
3. What is Power conditioning?
4. Name one utility-scale application.

\*\*Reference\*\*

Chapter-29 → Topic-02

\---

\## Viva-003

\*\*Question\*\*

Explain the operation and applications of a Power Diode.

\*\*Answer\*\*

A Power Diode is an uncontrolled two-terminal device. It conducts mainly from Anode to Cathode when forward biased and blocks reverse Voltage within its rating. It is used in Rectifiers, freewheeling paths, reverse-polarity protection and snubber circuits.

\*\*Key Points\*\*

\- Anode and Cathode terminals
\- Uncontrolled conduction
\- Forward conduction and reverse blocking
\- Current, Voltage, surge and recovery ratings matter

\*\*Remember\*\*

A Power Diode has no Gate terminal.

\*\*Follow-up Questions\*\*

1. What is forward bias?
2. What is Peak Inverse Voltage?
3. Why is a freewheeling Diode used?
4. What is reverse-recovery time?

\*\*Reference\*\*

Chapter-29 → Topic-03

\---

\## Viva-004

\*\*Question\*\*

What is an SCR, and how is it turned ON and OFF?

\*\*Answer\*\*

An SCR is a unidirectional latching Power device with Anode, Cathode and Gate terminals. When forward biased, a suitable Gate pulse turns it ON. After latching, the Gate normally cannot turn it OFF; the Anode Current must fall below Holding Current or be forced to zero.

\*\*Key Points\*\*

\- Silicon Controlled Rectifier
\- Gate-triggered turn-ON
\- Latching behavior
\- Main Current must fall for turn-OFF

\*\*Remember\*\*

The conventional SCR Gate controls turn-ON, not normal turn-OFF.

\*\*Follow-up Questions\*\*

1. What is Latching Current?
2. What is Holding Current?
3. Where are SCRs used?
4. What is commutation?

\*\*Reference\*\*

Chapter-29 → Topic-03

\---

\## Viva-005

\*\*Question\*\*

Differentiate between TRIAC and DIAC.

\*\*Answer\*\*

A TRIAC is a three-terminal bidirectional controlled Power device used to regulate AC Load Current. A DIAC is a two-terminal bidirectional trigger device that conducts after reaching breakover Voltage and is commonly used to trigger a TRIAC more symmetrically.

\*\*Key Points\*\*

\- TRIAC controls AC Power
\- DIAC provides trigger action
\- Both can operate bidirectionally
\- Common pair in simple phase controllers

\*\*Remember\*\*

DIAC triggers; TRIAC carries and controls Load Power.

\*\*Follow-up Questions\*\*

1. Name a TRIAC application.
2. What is breakover Voltage?
3. Why is symmetrical triggering useful?
4. Can a DIAC continuously control a large Motor Load alone?

\*\*Reference\*\*

Chapter-29 → Topic-03

\---

\## Viva-006

\*\*Question\*\*

Compare a Power MOSFET and an IGBT.

\*\*Answer\*\*

Both are Voltage-controlled devices with insulated Gates. A Power MOSFET generally switches faster and is widely used at lower and medium Voltages and high switching Frequencies. An IGBT commonly provides strong medium- and high-Power capability at moderate switching Frequencies and is widely used in VFDs and traction.

\*\*Key Points\*\*

\- Both use insulated-Gate control
\- MOSFET generally switches faster
\- IGBT is common in higher-Power Drives
\- Selection depends on ratings, Frequency, loss and cost

\*\*Remember\*\*

No device is universally best; use the datasheet and application conditions.

\*\*Follow-up Questions\*\*

1. Does a MOSFET Gate need charging Current during switching?
2. What is R_DS(on)?
3. What is IGBT saturation Voltage?
4. Which device is common in a VFD?

\*\*Reference\*\*

Chapter-29 → Topic-03

\---

\## Viva-007

\*\*Question\*\*

Explain the switching principle used in Power Electronics.

\*\*Answer\*\*

A Power device is repeatedly operated between blocking and conducting states. A controller varies the switching sequence, Frequency or Duty Cycle to regulate average output. Because an ideal switch has either zero Current or zero Voltage across it, ideal switching loss is zero, although practical devices have conduction and switching losses.

\*\*Key Points\*\*

\- ON and OFF operation
\- PWM control
\- Duty Cycle D = t_ON/T
\- Practical conduction and switching losses

\*\*Remember\*\*

Fast switching improves control but creates loss and EMI trade-offs.

\*\*Follow-up Questions\*\*

1. Define Duty Cycle.
2. Define switching Frequency.
3. What is Dead Time?
4. What is a Gate Driver?

\*\*Reference\*\*

Chapter-29 → Topic-04

\---

\## Viva-008

\*\*Question\*\*

Classify Rectifiers from a Power Electronics perspective.

\*\*Answer\*\*

An uncontrolled Rectifier uses Diodes and has no firing control. A fully controlled Rectifier uses SCRs to control average DC output through firing angle. A semi-controlled Rectifier uses a combination of Diodes and SCRs. Active Rectifiers use fully controlled switches for improved input-Current control and possible regeneration.

\*\*Key Points\*\*

\- Diode: uncontrolled
\- SCR: phase controlled
\- Diode plus SCR: semi-controlled
\- Active front end: controlled and potentially bidirectional

\*\*Remember\*\*

Rectifier means AC-to-DC conversion.

\*\*Follow-up Questions\*\*

1. What is firing angle?
2. Why is a freewheeling path needed?
3. What is a bridge Rectifier?
4. What is an Active Front End?

\*\*Reference\*\*

Chapter-29 → Topic-05

\---

\## Viva-009

\*\*Question\*\*

Compare Buck, Boost and Buck-Boost Converters.

\*\*Answer\*\*

A Buck Converter steps DC Voltage down. A Boost Converter steps DC Voltage up. A Buck-Boost family can produce an output magnitude lower or higher than the input, and output polarity depends on the selected topology. All use controlled switching and Energy-storage components.

\*\*Key Points\*\*

\- Buck: step-down
\- Boost: step-up
\- Buck-Boost: step-up or step-down
\- Feedback regulates practical output

\*\*Remember\*\*

For an ideal continuous Buck Converter, V_o ≈ D V_in.

\*\*Follow-up Questions\*\*

1. What does an Inductor do in a Converter?
2. Why is a Capacitor used?
3. What is an isolated DC-DC Converter?
4. Give one DC-DC application.

\*\*Reference\*\*

Chapter-29 → Topic-06

\---

\## Viva-010

\*\*Question\*\*

What is an Inverter, and how does it produce AC from DC?

\*\*Answer\*\*

An Inverter uses controlled switches in a bridge to connect a DC source to the Load with alternating polarity. PWM changes the switching pattern to control the effective AC Voltage, Frequency and waveform. Single-Phase and three-Phase Inverters are common.

\*\*Key Points\*\*

\- DC-to-AC conversion
\- Bridge switching
\- PWM waveform control
\- Single-Phase or three-Phase output

\*\*Remember\*\*

Dead Time prevents destructive shoot-through in a bridge leg.

\*\*Follow-up Questions\*\*

1. What is an H-bridge?
2. What is a Voltage-source Inverter?
3. Name two Inverter applications.
4. Why may an output Filter be required?

\*\*Reference\*\*

Chapter-29 → Topic-07

\---

\## Viva-011

\*\*Question\*\*

Explain AC-DC conversion and the function of a DC link.

\*\*Answer\*\*

An AC-DC Converter changes AC input into DC output using Diodes, SCRs or controlled active switches. A DC link connects conversion stages and commonly uses Capacitors, and sometimes Inductors, to smooth Voltage and temporarily store Energy.

\*\*Key Points\*\*

\- AC input to DC output
\- Diode, SCR or active conversion
\- DC link smooths and stores Energy
\- Pre-charge and discharge may be required

\*\*Remember\*\*

DC-link Capacitors may remain hazardous after the supply is disconnected.

\*\*Follow-up Questions\*\*

1. What is pre-charging?
2. Why is a discharge resistor used?
3. What is regeneration?
4. How can an Active Front End improve Power Factor?

\*\*Reference\*\*

Chapter-29 → Topic-08

\---

\## Viva-012

\*\*Question\*\*

What is an AC-AC Controller?

\*\*Answer\*\*

An AC-AC Controller accepts AC input and delivers controlled AC output. An AC Voltage Controller changes RMS output Voltage while usually retaining supply Frequency. Frequency-changing forms include Cycloconverters, Matrix Converters and indirect AC-DC-AC Converters such as common VFDs.

\*\*Key Points\*\*

\- AC input and AC output
\- Voltage or Frequency control
\- TRIAC or SCR phase control
\- Direct or indirect Frequency conversion

\*\*Remember\*\*

Phase-angle control can produce harmonics, EMI and reduced Power Factor.

\*\*Follow-up Questions\*\*

1. What is a Cycloconverter?
2. What is a Matrix Converter?
3. Give one AC Voltage Controller application.
4. Does a lamp dimmer normally change supply Frequency?

\*\*Reference\*\*

Chapter-29 → Topic-09

\---

\## Viva-013

\*\*Question\*\*

What is a Motor Drive, and what are its main parts?

\*\*Answer\*\*

A Motor Drive is a coordinated system that controls Motor starting, stopping, speed, Torque, direction and braking. Its main parts are the source, Power converter, Motor, controller, sensors or estimators, command interface and protection system.

\*\*Key Points\*\*

\- Controls Motor motion and Power
\- Includes converter and controller
\- Uses commands and feedback
\- Must match Motor and Load

\*\*Remember\*\*

The Drive is the complete controlled system, not only the Inverter module.

\*\*Follow-up Questions\*\*

1. What is open-loop control?
2. What is closed-loop control?
3. What is Load Torque?
4. Name four Drive applications.

\*\*Reference\*\*

Chapter-29 → Topic-10

\---

\## Viva-014

\*\*Question\*\*

Name and compare common types of Motor Drives.

\*\*Answer\*\*

A DC Drive controls a brushed DC Motor, commonly through Armature Voltage and field control. A VFD controls AC Motor Frequency and Voltage. A Servo Drive provides precise position, speed and Torque control. A Stepper Drive supplies controlled pulse sequences, while a BLDC Drive performs electronic commutation.

\*\*Key Points\*\*

\- DC Drive for brushed DC Motor
\- VFD for AC Motor
\- Servo Drive for precision motion
\- Stepper and BLDC Drives for specialized applications

\*\*Remember\*\*

Select a Drive by Motor, Load, control accuracy, speed range and duty.

\*\*Follow-up Questions\*\*

1. What is regeneration?
2. What is a four-quadrant Drive?
3. Where is a Servo Drive used?
4. What is electronic commutation?

\*\*Reference\*\*

Chapter-29 → Topic-11

\---

\## Viva-015

\*\*Question\*\*

Explain the basic construction and working principle of a VFD.

\*\*Answer\*\*

A common VFD first Rectifies fixed AC into DC. A DC link smooths and stores Energy. A three-Phase Inverter then uses controlled PWM switching to produce variable-Voltage, variable-Frequency AC for the Motor. The controller processes commands, Motor data and protective feedback.

\*\*Key Points\*\*

\- Rectifier input stage
\- DC-link stage
\- PWM Inverter output stage
\- Controller, sensing and protection

\*\*Remember\*\*

For a fixed pole count, Synchronous Speed is N_s = 120f/P.

\*\*Follow-up Questions\*\*

1. What is V/f control?
2. What is vector control?
3. Why is Motor Slip important?
4. Which VFD parameters use Motor nameplate data?

\*\*Reference\*\*

Chapter-29 → Topic-12

\---

\## Viva-016

\*\*Question\*\*

Compare a Soft Starter with a VFD.

\*\*Answer\*\*

A Soft Starter mainly reduces starting and stopping stress by controlling Motor Voltage and normally runs the Motor at supply Frequency through a bypass Contactor. A VFD controls both Frequency and Voltage and therefore provides continuous speed control, improved process regulation and potential Energy saving.

\*\*Key Points\*\*

\- Soft Starter: smooth start and stop
\- VFD: continuous speed control
\- Soft Starter normally uses SCRs
\- VFD uses Rectifier, DC link and Inverter

\*\*Remember\*\*

Use a Soft Starter for fixed-speed smooth starting; use a VFD when variable speed is required.

\*\*Follow-up Questions\*\*

1. Why is a bypass Contactor used?
2. How does reduced Voltage affect starting Torque?
3. Which device can save pump Energy at reduced speed?
4. Which option is normally simpler?

\*\*Reference\*\*

Chapter-29 → Topic-13

\---

\## Viva-017

\*\*Question\*\*

Explain interlock, permissive and trip in an Industrial Motor Control System.

\*\*Answer\*\*

An interlock prevents unsafe or conflicting actions. A permissive is a healthy condition required before operation is allowed. A trip is a protective stop command generated when a fault or unsafe condition is detected.

\*\*Key Points\*\*

\- Interlock prevents conflict
\- Permissive confirms readiness
\- Trip responds to fault
\- PLCs and hardwired circuits may implement these functions

\*\*Remember\*\*

Forward and reverse Contactors must never be energized together.

\*\*Follow-up Questions\*\*

1. Give one permissive example.
2. Give one trip example.
3. What is an Emergency Stop?
4. What is Local/Remote selection?

\*\*Reference\*\*

Chapter-29 → Topic-14

\---

\## Viva-018

\*\*Question\*\*

How can a VFD save Energy in pump and fan applications?

\*\*Answer\*\*

A VFD reduces Motor speed when process demand falls instead of wasting Energy through throttling or bypassing. For suitable centrifugal Loads, flow varies approximately with speed, pressure with speed squared and Power with speed cubed, so a modest speed reduction may substantially reduce Power.

\*\*Key Points\*\*

\- Match speed to demand
\- Avoid unnecessary full-speed operation
\- Power approximately follows speed cubed for applicable Loads
\- Actual saving depends on the complete system

\*\*Remember\*\*

At 80% speed, idealized centrifugal Load Power is approximately 0.8³ = 51.2%.

\*\*Follow-up Questions\*\*

1. State the Affinity Laws.
2. What is a variable-Torque Load?
3. Why should baseline Energy be measured?
4. Does every VFD installation guarantee Energy saving?

\*\*Reference\*\*

Chapter-29 → Topic-15

\---

\## Viva-019

\*\*Question\*\*

State the principal advantages and limitations of Power Electronics.

\*\*Answer\*\*

Advantages include high Efficiency, rapid response, compact size, flexible Voltage and Frequency control, automation and possible Energy saving. Limitations include switching and conduction losses, harmonics, EMI, cooling needs, insulation stress, control complexity and the requirement for skilled installation and maintenance.

\*\*Key Points\*\*

\- Efficient and flexible
\- Fast and compact
\- Creates harmonics and EMI
\- Requires thermal, protection and EMC design

\*\*Remember\*\*

Efficient does not mean lossless or problem-free.

\*\*Follow-up Questions\*\*

1. What causes switching loss?
2. What is EMI?
3. Why is cooling required?
4. What is common-mode Voltage?

\*\*Reference\*\*

Chapter-29 → Topic-16

\---

\## Viva-020

\*\*Question\*\*

What safety precautions are essential before working on a VFD or Power Electronic Converter?

\*\*Answer\*\*

Only trained and authorized persons should work on hazardous equipment. Identify and isolate all Energy sources, apply Lockout/Tagout, wait for the specified DC-link discharge time, prove a correctly rated tester, verify absence of Voltage, re-prove the tester and prevent unexpected Motor movement. Use suitable PPE, insulated tools, protective Earthing and manufacturer procedures.

\*\*Key Points\*\*

\- Lockout/Tagout
\- Stored DC-link Energy
\- Prove-test-re-prove method
\- PPE, grounding and correct instrument rating

\*\*Remember\*\*

Pressing Stop is not electrical isolation.

\*\*Follow-up Questions\*\*

1. Why can a DC link remain dangerous?
2. What is an instrument CAT rating?
3. Why must a tester be proven before and after testing?
4. What is Arc Flash?

\*\*Reference\*\*

Chapter-29 → Topic-18

\---

\# End of Chapter 29 Viva
