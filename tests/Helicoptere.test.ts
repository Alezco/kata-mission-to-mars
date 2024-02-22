import { MouvementEst, MouvementNord, MouvementNordOuest, MouvementOuest, MouvementSud } from '../src/Mouvement'
import { Helicoptere } from '../src/Helicoptere'
import { Position } from '../src/Position'

describe('Hélicoptère', () => {
  it('Initialisation de l’atterissage', () => {
    // WHEN
    const helicoptere = new Helicoptere(new Position(4, 4, 0), new MouvementNord());

    // THEN
    expect(new Position(4, 4, 0)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le nord si tourné vers le nord', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementNord());

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le sud si tourné vers le sud', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementSud());

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers l’ouest si tourné vers l’ouest', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementOuest());

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le sud si tourné vers le nord', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementNord());

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le nord si tourné vers le sud', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementSud());

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(4, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’est si tourné vers l’ouest', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementOuest());

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(5, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers l’ouest si tourné vers l’est', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementEst());

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(3, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit avancer d’une case vers le nord-ouest si tourné vers le nord-ouest', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementNordOuest());

    // WHEN
    helicoptere.avancer();

    // THEN
    expect(new Position(3, 5, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit reculer d’une case vers le nord-ouest si tourné vers le nord-ouest', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 1), new MouvementNordOuest());

    // WHEN
    helicoptere.reculer();

    // THEN
    expect(new Position(5, 3, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit monter d’une case vers le haut', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 0), new MouvementNord());

    // WHEN
    helicoptere.monter();

    // THEN
    expect(new Position(4, 4, 1)).toStrictEqual(helicoptere.getPosition());
  })

  it('Doit descendre d’une case vers le bas', () => {
    // GIVEN
    const helicoptere = new Helicoptere(new Position(4, 4, 3), new MouvementSud());

    // WHEN
    helicoptere.descendre();

    // THEN
    expect(new Position(4, 4, 2)).toStrictEqual(helicoptere.getPosition());
  })
})
