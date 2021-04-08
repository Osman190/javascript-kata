import { render } from 'jest';
import App from '../App';

describe('App()', () => {
  it('should print hello world', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    test('username exists', () => {
      const { getByTestId } = render(
        <App />
      );
      expect(getByTestId().textContent).toBe('Das große GU-Kochbuch Kochen für Kinder');
    });
    expect(consoleSpy).toHaveBeenCalledWith('Hello world!');
  })
})
