import { HomeRegular } from '@fluentui/react-icons';
import { render, act } from '@testing-library/react';
import Navigation, { NavItem } from '../navigation';

describe('navigation.tsx', () => {
    describe('<Navigation />', () => {
        it('renders in collapsed state', () => {
            const { getByTestId } = render(<Navigation />);
            expect(getByTestId('nav-collapsed')).toBeVisible();
            expect(getByTestId('nav-toggle')).toBeVisible();
        });

        it('can be expanded once rendered', () => {
            const { getByTestId } = render(<Navigation />);

            // main test hook + the toggle button should be present
            expect(getByTestId('nav-collapsed')).toBeVisible();
            expect(getByTestId('nav-toggle')).toBeVisible();

            act(() => getByTestId('nav-toggle').click()); // click to toggle the nav
            expect(getByTestId('nav-expanded')).toBeVisible();
        });

        it('renders with children', () => {
            const { getByTestId } = render(
                <Navigation>
                    <span data-testid='test-child'>Jest</span>
                </Navigation>
            );

            expect(getByTestId('test-child')).toBeVisible();
        });
    });

    describe('<NavItem />', () => {
        it('renders an icon', () => {
            const text = 'FooBarBaz';

            const { container } = render(<NavItem icon={HomeRegular} text={text} href='#' />);
            expect(container.querySelector('svg')).toBeVisible();
        });
    });
});
