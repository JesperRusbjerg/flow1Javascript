function printType<T>(obj: T) {
    console.log(`Type is ${typeof (obj)}`)
}

printType<string>("Hello")

function printTypes<T, U, V>(obj1: T, obj2: U, obj3: V): Array<any> {
    return [typeof (obj1), typeof (obj2), typeof (obj3)]
}

console.log(printTypes<number, string, Date>(1, "a", new Date()))

function reverseArr<T>(t: T[]): Array<any> {
    return t.reverse()
}

// console.log(reverseArr<string>(["a","b","c"]));
// console.log(reverseArr<number>([1,2,3]));
// console.log(reverseArr<boolean>([true,true,false]));


class DataHolder<T>{
    constructor(private data: T) { }

    getValue() {
        return this.data
    }
    setValue(data: T) {
        this.data = data
    }
}

// let d = new DataHolder<string>("Hello");
// console.log(d.getValue());
// d.setValue("World");
// console.log(d.getValue());

// let d2 = new DataHolder<number>(123);
// console.log(d2.getValue());
// d2.setValue(500);
// console.log(d2.getValue());

interface Owner {
    owner: String;
}

const owner = {
    owner: 'Per'
}

function printOwner(o: Owner) {
    console.log(o)
}

printOwner(owner)