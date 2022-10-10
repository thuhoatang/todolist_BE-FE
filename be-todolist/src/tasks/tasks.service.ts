import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { promises } from 'stream';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  async create(createTaskDto: CreateTaskDto) {
    const createdTask = new this.taskModel(createTaskDto);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(createdTask.save());
      }, 500);
    });
    return await myPromise;
  }

  findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.taskModel.findOne({ _id: id }));
      }, 500);
    });
    return await myPromise;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    // return await

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          this.taskModel.findOneAndUpdate(
            { _id: id },
            { title: updateTaskDto.title },
            { returnOriginal: false },
          ),
        );
      }, 500);
    });
    return await myPromise;
  }

  async remove(id: string) {
    // return await this.taskModel.deleteOne({ _id: id });
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(async () => {
        resolve(await this.taskModel.deleteOne({ _id: id }));
      }, 500);
    });

    return await myPromise;
  }
}
