import {
	MarkdownView,
	Modifier,
	Plugin,
	Platform as OBPlatform,
} from "obsidian";
import { Command, EditorView } from "@codemirror/view";

import { CursorMove, CursorSelect } from "./codeMirrorCommand";
import { Platform } from "./constraints";

export default class QuickNavPlugin extends Plugin {
	async onload() {
		let platform: Platform = Platform.Windows;
		if (OBPlatform.isMacOS) {
			platform = Platform.MacOS;
		}
		if (OBPlatform.isLinux) {
			platform = Platform.Linux;
		}

		CursorMove.forEach((cursorMove) => {
			this.registerKeybindToCMCommand(
				cursorMove.id,
				cursorMove.name,
				cursorMove.modifiers[platform],
				cursorMove.key,
				cursorMove.commandFn
			);
		});

		CursorSelect.forEach((cursorSelect) => {
			this.registerKeybindToCMCommand(
				cursorSelect.id,
				cursorSelect.name,
				cursorSelect.modifiers[platform],
				cursorSelect.key,
				cursorSelect.commandFn
			);
		});
	}

	registerKeybindToCMCommand(
		id: string,
		name: string,
		modifiers: Modifier[],
		key: string,
		commandFn: Command
	) {
		this.addCommand({
			id,
			name,
			callback: () => this.getEditorViewToExecCommand(commandFn),
			hotkeys: [
				{
					modifiers,
					key,
				},
			],
		});
	}

	getEditorViewToExecCommand(command: Command): boolean {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView);
		if (view) {
			// @ts-expect-error, not typed
			const editorView = view.editor.cm as EditorView;
			return command(editorView);
		}
		return false;
	}

	onunload() {}
}
