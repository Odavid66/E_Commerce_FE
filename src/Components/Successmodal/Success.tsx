import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Success.css'

interface SuccessModalProps {
	isOpen: boolean
	message: string
	onClose: () => void
	title?: string
	actionLabel?: string
}

export const SuccessModal = ({
	isOpen,
	message,
	onClose,
	title = 'Success!',
	actionLabel = 'Continue',
}: SuccessModalProps) => {
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
		<div className="success-modal__backdrop" onClick={onClose}>
			<div
				className="success-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="success-modal-title"
				aria-describedby="success-modal-message"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					className="success-modal__close"
					aria-label="Close success modal"
					onClick={onClose}
				>
					×
				</button>

				<div className="success-modal__icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<path d="M20 6 9 17l-5-5" />
					</svg>
				</div>

				<h2 id="success-modal-title" className="success-modal__title">
					{title}
				</h2>

				<p id="success-modal-message" className="success-modal__message">
					{message}
				</p>

				<button type="button" className="success-modal__action" onClick={onClose}>
					{actionLabel}
				</button>
			</div>
		</div>,
		document.body,
	)
}

export default SuccessModal
