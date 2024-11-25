// 조건식 ? 여기 참값 반환 : 여기에 있는 반환값 반환

type Istring<T> = T extends string ? string : never;
type IsPhoneNumber<T> =
    T extends `${string}-${string}-${string}`
        ? string
        : never;

type IsColor<T> = T extends `#${string}` ? string : never;

const data = '010-1234-5678';
type Result = Istring<typeof data>;
type Result2 = IsColor<typeof data>;

type Target = {
    id: number;
    city: string;
};

type FilterType<T, K> = T extends { [P in keyof T]: K }
    ? T
    : never;
