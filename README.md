## About
Use remote quantum computers from IBM to generate a sequence of numbers that is ostensibly 'truely random' by virtue of the fact that knowing
the underlying random number generation algorithm does not enable one to predict the sequence of numbers with success.

Cache the sequence of numbers and use it to perform dice rolls, iteratively retrieving numbers and mathematically adjusting the result 
for different dice sizes.

A maximum possible sample size (IBMQ's one-sitting maximum is 8192 shots of a given analysis) is used to reduce statistical error and ensure
as uniform a distribution of all potential results as possible.

## Requirements
- Python3
- Anaconda3
- Qiskit

## Limitations
The web application uses a previously generated sequence of 8192 random numbers between 1 and 32 to produce random numbers as requested
by the user through a browser. If more than 8000 rolls are performed on the app in a single session or the same given array of numbers is used too many times, the 'randomness' of the results could be negated--the Python script(s) should be run every now and again with the new set of 8192 numbers produced copied to the array in the roller.js file to maintain the integrity of the dice roll's randomness (the QASM_simulator.py script at 8192 shots tends to produce a more uniform distribution of numbers by frequency than the quantum_computer.py script, so it's recommended that the former is used to periodically produce a replacement for the JavaScript array).

## Thanks to
- IBM Quantum Computing for use of IBM Q remote systems and simulators
- Roll20 for inspiration to seek out Quantum technologies for dice rolls
- Abe Asfaw for his informative tutorials on using IBM Quantum computing
