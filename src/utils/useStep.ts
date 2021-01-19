import { useState } from 'react';

interface IStep {
    readonly id: string;
}

export interface INavigatiom {
    next(): void;
    previous(): void;
}

export interface IUseSpet {
    readonly step: IStep;
    readonly navigation: INavigatiom;
}

export function useStep(steps: IStep[], initialStep: number): IUseSpet {
    const [index, setIndex] = useState(initialStep);
    const stepsSize = steps.length;
    const step = steps[index];

    const navigation: INavigatiom = {
        next: () => setIndex((prev) => (index >= stepsSize - 1 ? stepsSize - 1 : ++prev)),
        previous: () => setIndex((prev) => (!index ? 0 : --prev)),
    };

    return { step, navigation };
}
