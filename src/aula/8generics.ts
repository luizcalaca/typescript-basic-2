interface AnimalNew<T, R, S> {
    name: string
    running: S
    face: R
    locomotion: T
}

interface PropriedadesEmu {
    corrida: boolean;
}

type Test = boolean;

const emu2: AnimalNew<Test, boolean, number> = {
    name: "Animal",
    running: 10,
    face: false,
    locomotion: true
}