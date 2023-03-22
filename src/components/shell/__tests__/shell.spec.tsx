import { render } from '@testing-library/react';
import Shell from '../shell';

describe('shell.tsx', () => {
    describe('<Shell />', () => {
        it('renders', () => {
            const { getByTestId } = render(
                <Shell>
                    <span data-testid='test-child'>Jest</span>
                </Shell>
            );
            expect(getByTestId('shell')).toBeVisible();
            expect(getByTestId('test-child')).toBeVisible();
        });
    });
});
