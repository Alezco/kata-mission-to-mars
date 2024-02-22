import { Mouvement } from './Mouvement'
import { ModuleMartienVolant, ModuleMartienRecuperable } from './ModuleActions'
import { Position } from './Position'
import { ModuleMartien } from './ModuleMartien';

export class Helicoptere extends ModuleMartien implements ModuleMartienVolant, ModuleMartienRecuperable {
  private pretPourRecuperation: boolean;

  constructor(override position: Position, override readonly mouvement: Mouvement) {
    super(position, mouvement);
    this.pretPourRecuperation = false;
  }

  monter() {
    this.position = new Position(this.position.x, this.position.y, this.position.z + 1);
  }

  descendre() {
    this.position = new Position(this.position.x, this.position.y, this.position.z - 1);
  }

  isPretPourRecuperation(): boolean {
    return this.pretPourRecuperation;
  }

  activerRecuperation() {
    this.poserHelicoptere();
    this.pretPourRecuperation = true;
  }

  private poserHelicoptere() {
    const altitude: number = this.getPosition().z;

    this.atterir(altitude);
  }

  private atterir(altitude: number) {
    [...Array(altitude)]
      .forEach(() => { this.descendre(); });
  }
}
