export function useIsFilled<T>(value: T | undefined): value is T {
    return value !== undefined;
}
