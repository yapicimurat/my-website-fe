export default interface Pageable<T> {
    elements: Array<T>;
    totalPages: number;
    totalElementsPerPage: number;
    currentPage: number;
    hasNext: boolean;
    hasPrevious: boolean;
}
