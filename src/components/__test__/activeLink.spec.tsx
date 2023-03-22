import { render } from '@testing-library/react';
import ActiveLink from '../activeLink';

describe('activeLink.tsx', () => {
    describe('<ActiveLink />', () => {
        it('renders w/o active class', () => {
            const { getByTestId } = render(
                <ActiveLink activeClassName='jest' href='/' data-testid='jest-activeLink' />
            );

            expect(getByTestId('jest-activeLink')).toBeVisible();
            expect(getByTestId('jest-activeLink')).not.toHaveClass('jest');
        });

        it('renders w/ active class', () => {
            const { getByTestId } = render(
                <ActiveLink activeClassName='jest' href='/jest-router' data-testid='jest-activeLink' />
            );

            expect(getByTestId('jest-activeLink')).toBeVisible();
            expect(getByTestId('jest-activeLink')).toHaveClass('jest');
        });
    });
});
