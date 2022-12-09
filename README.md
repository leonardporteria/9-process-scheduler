# OPERATING SYSTEM: Process Scheduler

Process Scheduling Calculator.

### Technology:

- ReactJs (Vite)
- TailwindCSS

### Setup

- Clone repository

```
// SSH Key
git clone git@github.com:leonardporteria/OS-process-scheduler.git

// HTTPS
git clone https://github.com/leonardporteria/OS-process-scheduler.git
```

- Install Dependencies
- > make sure that nodeJS is installed in your machine

```
npm i
```

- Start Dev Server

```
npm run dev
```

- Open the port in a browser

```
http://127.0.0.1:5173/
```

## Overview

This Application prompts the user to get the number of Jobs to compute.

![Alt text](/src/assets/_md-assets/input.png 'Input')

Then the user shall fill all fields that are needed for calculation.

![Alt text](/src/assets/_md-assets/fill.png 'Fill')

Once completed, click solve, and the Application will do the work ;).

![Alt text](/src/assets/_md-assets/timeline.png 'TL')

## Non Preemptive Algorithm

The Non-preemptive scheduling is a where process will not be interrupted and will be executed until it is finished

This Application will give 3 output; Gannt Chart, Turn Around Time, and Waiting Time for each Jobs.

### FCFS (First Come First Serve Algorithm)

![Alt text](/src/assets/_md-assets/fcfs.png 'FCFS')

### SJF (Shortest Job First Algorithm)

![Alt text](/src/assets/_md-assets/sjf.png 'SJF')

### NPP (Non-Preemptive Priority Algorithm)

![Alt text](/src/assets/_md-assets/npp.png 'NPP')

## Preemptive Algorithm

The Preemptive scheduling is where a process can be interrupted to give way for another process that has a higher priority of shorter job than the current ongoing one.

> To Be Uptaded

> This Project serves as a practice for React Hooks and TailwindCSS
