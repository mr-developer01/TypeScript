declare const a = 300;
interface Obj {
    height: number;
    weight: number;
    gender?: boolean;
}
type FuncType = (n: number, m: number) => void;
interface NewObj extends Obj {
    scolar: boolean;
    func: FuncType;
}
declare const gigi: NewObj;
declare const kendal: NewObj;
declare const obj: Obj;
declare const obj2: Obj;
declare const obj3: Obj;
