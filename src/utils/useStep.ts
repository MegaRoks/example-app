import { useState } from 'react';

interface IStep {
    readonly id: string;
}

export interface INavigation {
    next(): void;
    previous(): void;
}

export interface IUseStep {
    readonly step: IStep;
    readonly navigation: INavigation;
}

export function useStep(steps: IStep[], initialStep: number): IUseStep {
    const [index, setIndex] = useState(initialStep);
    const stepsSize = steps.length;
    const step = steps[index];

    const navigation: INavigation = {
        next: () => setIndex((prev) => (index >= stepsSize - 1 ? stepsSize - 1 : ++prev)),
        previous: () => setIndex((prev) => (!index ? 0 : --prev)),
    };

    return { step, navigation };
}
