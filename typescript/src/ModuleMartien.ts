import { ModuleMartienTerrestre } from './ModuleActions';
import { Mouvement } from './Mouvement';
import { Position } from './Position';

export abstract class ModuleMartien implements ModuleMartienTerrestre {
  protected position: Position;
  protected mouvement: Mouvement;

  constructor(readonly _position: Position, readonly _mouvement: Mouvement) {
    this.position = _position;
    this.mouvement = _mouvement;
  }

  getPosition() {
    return this.position;
  }

  avancer() {
    this.position = this.mouvement.avancer(this.position);
  }

  reculer() {
    this.position = this.mouvement.reculer(this.position);
  }
}
