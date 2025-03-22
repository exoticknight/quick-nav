import type { Command } from "@codemirror/view";
import {
	cursorCharLeft,
	cursorCharRight,
	cursorLineDown,
	cursorLineUp,
	cursorPageDown,
	cursorPageUp,
	cursorLineBoundaryLeft,
	cursorLineBoundaryRight,
} from "@codemirror/commands";

export const CursorMove: {
	id: string;
	name: string;
	commandFn: Command;
}[] = [
		{
			id: "move-cursor-up",
			name: "Move cursor up",
			commandFn: cursorLineUp,
		},
		{
			id: "move-cursor-down",
			name: "Move cursor down",
			commandFn: cursorLineDown,
		},
		{
			id: "move-cursor-left",
			name: "Move cursor left",
			commandFn: cursorCharLeft,
		},
		{
			id: "move-cursor-right",
			name: "Move cursor right",
			commandFn: cursorCharRight,
		},
		{
			id: "move-cursor-page-up",
			name: "Move cursor page up",
			commandFn: cursorPageUp,
		},
		{
			id: "move-cursor-page-down",
			name: "Move cursor page down",
			commandFn: cursorPageDown,
		},
		{
			id: "move-cursor-left-end",
			name: "Move cursor left end",
			commandFn: cursorLineBoundaryLeft,
		},
		{
			id: "move-cursor-right-end",
			name: "Move cursor right end",
			commandFn: cursorLineBoundaryRight,
		},
	];
