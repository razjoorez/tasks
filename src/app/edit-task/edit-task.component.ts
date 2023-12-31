import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../services/tasks.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  editTaskForm!: FormGroup;
  

  constructor(private fb: FormBuilder,
    private taskService: TasksService,
    public dialogRef:
    MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
    this.editTaskForm = this.fb.group({
      name: [this.data.name,Validators.required],
      description: [this.data.description,Validators.required]
    })
  }

  editTask() {
    if(this.editTaskForm.valid) {
      this.taskService.updateTask(this.data.id, this.editTaskForm.controls['name'].value, this.editTaskForm.controls['description'].value)
      this.dialogRef.close();
      this.dialogRef.afterClosed().subscribe(
        
      )
      
    }
  }
  close() {
    this.dialogRef.close();
  }


}
