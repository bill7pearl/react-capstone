import { fetchGames } from "../redux/reducers/gamesReducer";

describe('FETCH_GAME', () => {
  test('fetch games data from the API', async () => {
    const result = fetchGames('game');
    expect(result).toBeInstanceOf(Object);
    expect(result.id).not.toBeNull();
  });
});

describe('GAMES_REDUCER', () => {
  describe('Test reducers', () => {
    it('pushes a game to the state', () => {
      const state = { game: {} };
      Object.assign(state.game, {title:"Trove", genre:"MMORPG"});
      expect(state.game).toEqual({ title: "Trove", genre: "MMORPG" });
    });
  });
});