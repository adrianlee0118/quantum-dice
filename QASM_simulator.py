import numpy as np
from qiskit import(
  QuantumCircuit,
  execute,
  Aer)
from qiskit.visualization import plot_histogram

if __name__ == "__main__":

    simulator = Aer.get_backend('qasm_simulator')

    # Set up five quantum bits to be superpositioned and five classical bits for storing measurements
    circuit = QuantumCircuit(5,5)

    # Add Hadamard Gates to create entanglement and measure
    circuit.h(0)
    circuit.h(1)
    circuit.h(2)
    circuit.h(3)
    circuit.h(4)

    # Set up measurements - store measurements from quantum register in classical register
    circuit.measure([0, 1, 2, 3, 4], [0, 1, 2, 3, 4])

    # Collapse bits 4096 times, generates a random number between 0 and 31 (five bits, max is 2^5 = 32) over four thousand times
    shots = 8192
    job = execute(circuit,simulator,shots=shots,memory=True)

    # Get the results
    result = job.result()
    memory = result.get_memory()

    # Print in comma delimited form for copy/paste into javascript vector in web app and into Excel file for analysis
    diceResults = []
    print("Quantum numbers generated by QASM simulator are: ")
    for x in range(0, shots):
       diceResults.append(int(memory[x],2))

    print(diceResults)