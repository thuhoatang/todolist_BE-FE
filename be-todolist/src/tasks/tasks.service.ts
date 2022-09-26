import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  create(createTaskDto: CreateTaskDto) {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return await this.taskModel.findOne({ _id: id});
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskModel.findOneAndUpdate({_id: id}, {title: updateTaskDto.title}, {returnOriginal: false});
  }

  async remove(id: string)  {
    return await this.taskModel.deleteOne({ _id: id });
  }
}
