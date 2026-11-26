export default class ObjectHelper {
    private readonly adapter;
    private readonly stateChangeTrigger;
    private readonly objectQueue;
    private readonly existingStates;
    private readonly adapterObjects;
    constructor(adapterInstance: ioBroker.Adapter);
    setOrUpdateObject(id: string, obj: Partial<ioBroker.Object>, obtainCustomFields: string[] | undefined, value?: ioBroker.StateValue | null, stateChangeCallback?: (stateVal: ioBroker.StateValue, state: ioBroker.State) => void, createNow?: boolean, callback?: () => void): void;
    deleteObject(id: string): void;
    isEquivalent(a: unknown, b: unknown): boolean;
    processObjectQueue(callback?: () => void): void;
    getObject(id: string): ioBroker.Object | undefined;
    loadExistingObjects(callback?: () => void): void;
    handleStateChange(id: string, state: ioBroker.State | null | undefined): void;
}
