export interface ItemPayload {
    id: string, 
    type: string
    status: ItemStatus,
    createdDate: string, 
    lastUpdatedDate: string,
    text: string
}

export enum ItemStatus {
    NotStarted,
    OnGoing, 
    Completed
}