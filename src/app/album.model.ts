export class Album {
  constructor ( // does not need key property - that comes from Firebase
    public title: string,
    public artist: string,
    public description: string
  ) {}
}
