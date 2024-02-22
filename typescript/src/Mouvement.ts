import { Position } from './Position';

export interface Mouvement {
  avancer(position: Position): Position;
  reculer(position: Position): Position;
}

export class MouvementNord implements Mouvement {
  avancer(position: Position): Position {
    return new Position(position.x, position.y + 1, position.z)
  }

  reculer(position: Position): Position {
    return new Position(position.x, position.y - 1, position.z)
  }
}

export class MouvementSud implements Mouvement {
  avancer(position: Position): Position {
    return new Position(position.x, position.y - 1, position.z)
  }

  reculer(position: Position): Position {
    return new Position(position.x, position.y + 1, position.z)
  }
}

export class MouvementOuest implements Mouvement {
  avancer(position: Position): Position {
    return new Position(position.x - 1, position.y, position.z)
  }

  reculer(position: Position): Position {
    return new Position(position.x + 1, position.y, position.z)
  }
}

export class MouvementEst implements Mouvement {
  avancer(position: Position): Position {
    return new Position(position.x + 1, position.y, position.z)
  }

  reculer(position: Position): Position {
    return new Position(position.x - 1, position.y, position.z)
  }
}

export class MouvementNordOuest implements Mouvement {
  avancer(position: Position): Position {
    return new Position(position.x - 1, position.y + 1, position.z)
  }

  reculer(position: Position): Position {
    return new Position(position.x + 1, position.y - 1, position.z)
  }
}
