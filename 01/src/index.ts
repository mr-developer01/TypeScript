// import {myAge} from "./function.js"

const a = 300;
console.log(a);

// tpye object

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

const gigi: NewObj = {
  height: 3434,
  weight: 3434,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const kendal: NewObj = {
  height: 43434,
  scolar: true,
  weight: 545,
  func: (n, m) => {
    console.log(n * m);
  },
};

kendal.func(20, 10);

const obj: Obj = {
  gender: true,
  height: 3434,
  weight: 34,
};

const obj2: Obj = {
  gender: false,
  height: 4434,
  weight: 94,
};

const obj3: Obj = {
  height: 4434,
  weight: 94,
};
