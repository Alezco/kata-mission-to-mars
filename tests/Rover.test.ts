import { MouvementEst, MouvementNord, MouvementOuest, MouvementSud } from '../src/Mouvement'
import { Position } from '../src/Position'
import { Rover } from '../src/Rover'

describe('Rover', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementNord());

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementNord());

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementSud());

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementOuest());

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit avancer d’une case vers l’est si tourné vers l’est', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementEst());

    // WHEN
    rover.avancer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementNord());

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 3, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementSud());

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(4, 5, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementOuest());

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(5, 4, 0)).toStrictEqual(rover.getPosition());
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const rover = new Rover(new Position(4, 4, 0), new MouvementEst());

    // WHEN
    rover.reculer();

    // THEN
    expect(new Position(3, 4, 0)).toStrictEqual(rover.getPosition());
  })
})
