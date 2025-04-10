import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-time-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-learn.component.html',
  styleUrl: './time-learn.component.scss'
})
export class TimeLearnComponent {
  constructor(){
    this.getEstimateHour();
    this.getTimeCalc();
  }

  getEstimateHour(){
    const tasksObj  = [
      { name: "Task 1", estimatedTime: 30 },
      { name: "Task 2", estimatedTime: 45 },
      { name: "Task 3", estimatedTime: 60 }
    ];
    
    const totalTime = tasksObj.reduce(
        (total, task) => total + task.estimatedTime, 0);
    console.log(`Array object Total Estimated Time: ${totalTime} minutes`);
    
    // Array total calculation
    const tasks = [30, 45.5, 160];
    
    // hour/minutes calculation methods
    const arrtotalhm = tasks.reduce((total, task) => total + task, 0);
    const hmHours = Math.floor(arrtotalhm / 60);
    const hmMinutes = arrtotalhm % 60;
    console.log(`Array Total Estimated Time: ${hmHours}h ${hmMinutes}m`);
    
    // hour/minutes/second calculation methods
    const totalMinutes = tasks.reduce((total, task) => total + task, 0);
    const totalSeconds = totalMinutes * 60;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    console.log(`Total Estimated Time: ${hours}h ${minutes}m ${seconds}s`);
  }

  // getAllDataTypeTime calculation
  getTimeCalc(){
    const tasks = [
      { name: "Task 1", estimatedTime: 1 },
      { name: "Task 2", estimatedTime: 2 },
      { name: "Task 3", estimatedTime: '3' },
      { name: "Task 4", estimatedTime: 10 },
      { name: "Task 5", estimatedTime: 'null' },
      { name: "Task 6", estimatedTime: null },
      { name: "Task 7", estimatedTime: undefined },
      { name: "Task 8", estimatedTime: '20' },
      { name: "Task 9", estimatedTime: 0.50 },
      { name: "Task 10", estimatedTime: 3.50 },
    ];
    
    const timeTotal = tasks.reduce((total, task) => {
      const time = Number(task.estimatedTime);
      return isNaN(time) ? total : total + time;
    }, 0);
    // console.log(`Total Estimated Time: ${timeTotal.toFixed(2)} minutes`);
    
    const totalSeconds = Math.round(timeTotal * 60);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    console.log(`Time in h:m:s = ${hours}h ${minutes}m ${seconds}s`);
  }
}
