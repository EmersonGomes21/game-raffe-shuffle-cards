import { render } from '@testing-library/react';
import { ProviderDataPlayer } from 'hooks/context';

export function renderWithClient(ui: React.ReactElement) {
    const { rerender, ...result } = render(

        <ProviderDataPlayer>{ui}</ProviderDataPlayer>
    );
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(

                <ProviderDataPlayer>{rerenderUi}</ProviderDataPlayer>
            ),
    };
}