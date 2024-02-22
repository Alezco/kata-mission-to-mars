import { Helicoptere } from '../src/Helicoptere'
import { MouvementNord } from '../src/Mouvement'
import { Position } from '../src/Position'
import { Rover } from '../src/Rover'
import { Sonde } from '../src/Sonde'

describe('Sonde', () => {
  it('Le rover doit être récupéré', () => {
    // GIVEN
    const perseverance = new Rover(new Position(4, 4, 0), new MouvementNord());
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(perseverance);

    // THEN
    expect(perseverance.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(perseverance.getPosition())
  })

  it('L’hélicoptère doit être récupéré', () => {
    // GIVEN
    const ingenuity = new Helicoptere(new Position(4, 4, 50), new MouvementNord());
    const sonde: Sonde = new Sonde();

    // WHEN
    sonde.preparerRecuperation(ingenuity);

    // THEN
    expect(ingenuity.isPretPourRecuperation()).toBeTruthy();
    expect(new Position(4, 4, 0)).toStrictEqual(ingenuity.getPosition())
  })
})
