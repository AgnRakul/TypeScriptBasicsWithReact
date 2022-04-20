const profile = {
  fullName: "alex",
  age: 36,
  coords: { x: 0, y: 15 },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const { fullName }: { fullName: string } = profile;
const {
  coords: { x, y },
}: { coords: { x: number; y: number } } = profile;
