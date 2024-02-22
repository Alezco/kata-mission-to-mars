import { Mouvement } from './Mouvement';
import { ModuleMartienRecuperable } from './ModuleActions'
import { Position } from './Position'
import { ModuleMartien } from './ModuleMartien';

export class Rover extends ModuleMartien implements ModuleMartienRecuperable {
  private pretPourRecuperation: boolean = false;

  constructor(override readonly position: Position, override readonly mouvement: Mouvement) {
    super(position, mouvement);
  }

  isPretPourRecuperation(): boolean {
    return this.pretPourRecuperation;
  }

  activerRecuperation() {
    this.pretPourRecuperation = true;
  }
}
