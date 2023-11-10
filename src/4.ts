class Key {
  constructor(private signature: number) {
    this.signature = signature;
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}
abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
    this.door = false;
  }

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Open");
    } else {
      console.log("closed");
    }
  }

  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door === true;
      console.log("open");
    } else {
      console.log("closed");
    }
  }
}

const key = new Key(Math.floor(Math.random() * 20));
console.log(key);
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);
