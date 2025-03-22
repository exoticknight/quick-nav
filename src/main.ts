import {
	Editor,
	Plugin,
} from "obsidian";
import { Command, EditorView } from "@codemirror/view";

import { CursorMove, CursorSelect } from "./codeMirrorCommand";

export default class QuickNavPlugin extends Plugin {
	async onload() {
		CursorMove.forEach((cursorMove) => {
			this.registerKeybindToCMCommand(
				cursorMove.id,
				cursorMove.name,
				cursorMove.commandFn
			);
		});

		CursorSelect.forEach((cursorSelect) => {
			this.registerKeybindToCMCommand(
				cursorSelect.id,
				cursorSelect.name,
				cursorSelect.commandFn
			);
		});
	}

	registerKeybindToCMCommand(
		id: string,
		name: string,
		commandFn: Command
	) {
		this.addCommand({
			id,
			name,
			editorCallback: (editor) => this.getEditorViewToExecCommand(editor, commandFn)
		});
	}

	getEditorViewToExecCommand(editor: Editor, command: Command): boolean {
		// @ts-expect-error, not typed
		const editorView = editor.cm as EditorView;
		return command(editorView);
	}

	onunload() { }
}
