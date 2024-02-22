import { ModuleMartienRecuperable } from './ModuleActions'

export class Sonde {
  preparerRecuperation(moduleMartien: ModuleMartienRecuperable) {
    moduleMartien.activerRecuperation();
  }
}
