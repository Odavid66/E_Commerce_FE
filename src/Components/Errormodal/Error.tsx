import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Error.css'

interface ErrorModalProps {
	isOpen: boolean
	message: string
	onClose: () => void
	onRetry?: () => void
	title?: string
	retryLabel?: string
	dismissLabel?: string
}

export const ErrorModal = ({
	isOpen,
	message,
	onClose,
	onRetry,
	title = 'Something went wrong', 
	retryLabel = 'Try Again',
	dismissLabel = 'Dismiss',
}: ErrorModalProps) => {
	useEffect(() => {
		if (!isOpen) {
			return
		}

		const previousOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			document.body.style.overflow = previousOverflow
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [isOpen, onClose])

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className="error-modal__backdrop" onClick={onClose}>
			<div
				className="error-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="error-modal-title"
				aria-describedby="error-modal-message"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					className="error-modal__close"
					aria-label="Close error modal"
					onClick={onClose}
				>
					×
				</button>

				<div className="error-modal__icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
						<path d="M12 9v4" />
						<path d="M12 17h.01" />
					</svg>
				</div>

				<h2 id="error-modal-title" className="error-modal__title">
					{title}
				</h2>

				<p id="error-modal-message" className="error-modal__message">
					{message}
				</p>

				<div className="error-modal__actions">
					<button
						type="button"
						className="error-modal__action error-modal__action--primary"
						onClick={onRetry ?? onClose}
					>
						{retryLabel}
					</button>

					<button type="button" className="error-modal__action error-modal__action--secondary" onClick={onClose}>
						{dismissLabel}
					</button>
				</div>
			</div>
		</div>,
		document.body,
	)
}

export default ErrorModal
