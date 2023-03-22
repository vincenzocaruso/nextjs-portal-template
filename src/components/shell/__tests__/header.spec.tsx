import { render } from '@testing-library/react';
import Header, { HeaderItem } from '../header';

describe('<Header />', () => {
    it('renders', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('shell-header')).toBeVisible();
    });

    it('renders with children', () => {
        const { getByTestId } = render(
            <Header>
                <span data-testid='test-child'>Jest</span>
            </Header>
        );

        expect(getByTestId('shell-header')).toBeVisible();
        expect(getByTestId('test-child')).toBeVisible();
    });

    describe('<HeaderItem />', () => {
        it('renders children', () => {
            const { getByTestId } = render(
                <HeaderItem>
                    <span data-testid='test-child'>Jest</span>
                </HeaderItem>
            );

            expect(getByTestId('test-child')).toBeVisible();
        });
    });
});
