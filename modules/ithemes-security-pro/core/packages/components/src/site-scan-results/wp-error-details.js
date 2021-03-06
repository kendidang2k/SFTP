/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import WrappedSection from './wrapped-section';

function WPErrorDetails( { results, showErrorDetails = false } ) {
	const wpError = results;

	return (
		<WrappedSection
			status="error"
			description={ __(
				'The scan failed to properly scan the site.',
				'it-l10n-ithemes-security-pro'
			) }
		>
			<p>
				{ sprintf(
					/* translators: 1. Error message. */
					__( 'Error Message: %s', 'it-l10n-ithemes-security-pro' ),
					wpError.getErrorMessage()
				) }
			</p>
			<p>
				{ sprintf(
					/* translators: 1. Error code. */
					__( 'Error Code: %s', 'it-l10n-ithemes-security-pro' ),
					wpError.getErrorCode()
				) }
			</p>

			{ showErrorDetails && wpError.getErrorData() && (
				<Fragment>
					<p>
						{ __(
							'If you contact support about this error, please provide the following debug details:',
							'it-l10n-ithemes-security-pro'
						) }
					</p>
					<pre>
						{ JSON.stringify(
							{
								code: wpError.getErrorCode(),
								data: wpError.getErrorData(),
							},
							null,
							2
						) }
					</pre>
				</Fragment>
			) }
		</WrappedSection>
	);
}

export default WPErrorDetails;
