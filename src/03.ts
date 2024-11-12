// 설계용 > 클래스와 같이
// 명세 > 객체의 타입

interface IPerson {
    name: string;
    gender: 'man' | 'woman';
    readonly year: number;
    marketing?: boolean;
}

const p: IPerson = {
    name: 'inflearn',
    gender: 'man',
    year: 2024,
    marketing: true,
};

console.log(p?.marketing ?? 'default value');
