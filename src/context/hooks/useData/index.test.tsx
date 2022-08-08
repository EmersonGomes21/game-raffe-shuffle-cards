import { renderHook, act } from '@testing-library/react-hooks';
import { ProviderDataPlayer } from '../..';
import { useData } from '.';
import { mockCards } from '../../../__MOCKS__/cards';
describe('<useData/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });
  it('should cards toBe array empty', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    expect(result.current.cards).toEqual([]);

  })

  it('should cards length equals the 5 items, count default fake pagination', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    act(() => {
      result.current.setDataCards(mockCards);
    });
    const itemsInitialPagination = 5
    const remnantCards = 3
    expect(result.current.cards.length).toEqual(itemsInitialPagination);
    expect(result.current.remnantCards).toEqual(remnantCards);
    expect(result.current.addNextCard).toEqual(itemsInitialPagination);
    
  })

  it('should cards length equals the 8 items, when buying 3 cards', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    act(() => {
      result.current.setDataCards(mockCards);
    });

    act(() => {
      result.current.buyCard();
      result.current.buyCard();
      result.current.buyCard();
    });

    
    const itemsInitialPagination = 8 
    const remnantCards = 0
    expect(result.current.cards.length).toEqual(itemsInitialPagination);
    expect(result.current.remnantCards).toEqual(remnantCards);
    expect(result.current.addNextCard).toEqual(itemsInitialPagination);
    
  })

  it('should shuffle the cards in call of shuffleCards function', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    act(() => {
      result.current.setDataCards(mockCards);
    });

    act(() => {
      result.current.buyCard();
      result.current.buyCard();
      result.current.shuffleCards();
    });

    
    const itemsInitialPagination = 7
    const remnantCards = 1
    const firstIndex = 0
    expect(result.current.cards.length).toEqual(itemsInitialPagination);
    expect(result.current.remnantCards).toEqual(remnantCards);
    expect(result.current.cards[firstIndex].code).not.toEqual(mockCards[firstIndex].code);
    
  })

  it('should not shuffle the cards, when not call shuffleCards function', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    act(() => {
      result.current.setDataCards(mockCards);
    });

    act(() => {
      result.current.buyCard();
      result.current.buyCard();
    });

    
    const itemsInitialPagination = 7
    const remnantCards = 1
    const firstIndex = 0
    expect(result.current.cards.length).toEqual(itemsInitialPagination);
    expect(result.current.remnantCards).toEqual(remnantCards);
    expect(result.current.cards[firstIndex].code).toEqual(mockCards[firstIndex].code);
    
  })

  it('should not  cards = 5 items is default , playerName = "" , in logout', () => {
    const wrapper = ({ children }: any) => (
      <ProviderDataPlayer>{children}</ProviderDataPlayer>
    );
    const { result } = renderHook(() => useData(), {
      wrapper,
    });

    act(() => {
      result.current.setDataCards(mockCards);
    });

    act(() => {
      result.current.buyCard();
      result.current.buyCard();
      result.current.logout();
    });

    
    const itemsInitialPagination = 5

    expect(result.current.cards.length).toEqual(itemsInitialPagination);
    expect(result.current.playerName).toEqual('');
        
  })

})


