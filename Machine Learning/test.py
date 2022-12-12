# Import the necessary libraries
import sounddevice as sd
import numpy as np
import matplotlib.pyplot as plt
from scipy import signal

# Define the sample rate and duration of the recording
fs = 44100  # Sample rate (Hz)
duration = 5  # Duration (s)

# Record audio for the specified duration
recording = sd.rec(int(duration * fs), samplerate=fs, channels=1)
sd.wait()  # Wait until the recording is finished

# Compute the short-time Fourier transform of the signal
f, t, Zxx = signal.stft(recording, fs=fs, nperseg=1024)

# Compute the magnitude of the STFT
Xmag = np.abs(Zxx)

# Find the dominant frequency in each frame
f_dominant = np.argmax(Xmag, axis=0)

# Convert the frame index to frequency (Hz)
f_dominant = f[f_dominant]

# Plot the dominant frequency over time
plt.plot(t, f_dominant)
plt.xlabel('Time (s)')
plt.ylabel('Frequency (Hz)')
plt.show()