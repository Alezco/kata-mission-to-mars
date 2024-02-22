import { Position } from './Position'

export interface Positionable {
  getPosition(): Position;
}

export interface ModuleMartienVolant extends Positionable {
  monter(): void;
  descendre(): void;
}

export interface ModuleMartienTerrestre extends Positionable {
  avancer(): void;
  reculer(): void;
}

export interface ModuleMartienRecuperable {
  activerRecuperation(): void;
  isPretPourRecuperation(): boolean;
}
