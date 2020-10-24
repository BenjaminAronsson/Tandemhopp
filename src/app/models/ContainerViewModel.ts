export class ContainerViewModel {
  title: string;
  subtitle: string;
  text: string;
  mode: ContianerMode;
}

export enum ContianerMode {
  left,
  right,
  center,
  full,
}
