export interface TodoItem {
    id: string;
    version: 1;
    title: string;
    description?: string;
    children: TodoItem[];
    dueDate?: number;
    prioritySettings: {
        priority: number;
        priorityInterval: number;
        priorityIncrement: number;
        autoIncreasePriority: boolean;
    };
    dateTracking: DateTracking;
}

export interface TodoList {
    id: string;
    version: 1;
    name: string;
    description: string;
    children: TodoItem[];
    prioritySettings: {
        freezePriority: boolean;
        minPriority: number;
        maxPriority: number;
    };
    dateTracking: DateTracking;
}

export interface UserTodoRecords {
    userId: string;
    version: 1;
    todoLists: TodoList[];
    dateTracking: DateTracking;
}

export interface DateTracking {
    created: Date;
    updated?: Date;
    deleted?: Date;
}
