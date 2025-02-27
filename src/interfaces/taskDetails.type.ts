import { ChangeEvent, ChangeEventHandler } from 'react';
export type taskDetailsDataType = {
    message?: string;
    taskData?: {
        assignee: string;
        completionAward: { dinero: number; neelam: number };
        createdBy: string;
        endsOn: number;
        isNoteworthy: boolean;
        dependsOn: string[];
        lossRate: { dinero: number; neelam: number };
        percentCompleted: number;
        priority: string;
        startedOn: number;
        status: string;
        title: string;
        type: string;
    };
};

export type ButtonProps = {
    buttonName: string;
    clickHandler: (value: any) => void;
    value?: boolean;
};
export type TextAreaProps = {
    name: string;
    value: string;
    onChange: ChangeEventHandler;
    testId: string;
};

export type TaskDependencyProps = {
    taskDependencyIds: string[];
    isEditing?: boolean;
    updatedDependencies: string[];
    handleChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
};
export type DependencyListProps = {
    taskDependencyIds: string[];
};
export type DependencyItem =
    | PromiseFulfilledResult<{
          title: string | undefined;
          id: string;
      }>
    | PromiseRejectedResult;
