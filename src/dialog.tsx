import { useCallback, useRef, useState } from "react";

export type ModalComponent<Response> = (props: {
	onClose: (response: Response) => void;
}) => React.ReactNode;

export const useDialog = <Data,>() => {
	type Response = Data | null;

	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const responseRef = useRef<Response>(null);
	const [dialog, setDialog] = useState<React.ReactNode | null>(null);
	const close = useCallback((response: Response) => {
		responseRef.current = response;
		dialogRef.current?.close();
	}, []);
	const showModal = (Component: ModalComponent<Response>) =>
		new Promise<Response>((resolve) => {
			responseRef.current = null;
			setDialog(
				<dialog
					ref={(element) => {
						dialogRef.current = element;
						element?.showModal();
					}}
					onClose={() => {
						resolve(responseRef.current);
						setDialog(null);
					}}
				>
					<Component onClose={close} />
				</dialog>
			);
		});

	return { showModal, dialog };
};
