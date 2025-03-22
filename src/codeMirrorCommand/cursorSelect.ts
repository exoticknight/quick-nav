import type { Command } from "@codemirror/view";
import {
	selectCharLeft,
	selectCharRight,
	selectLineDown,
	selectLineUp,
	selectLineBoundaryLeft,
	selectLineBoundaryRight,
} from "@codemirror/commands";

export const CursorSelect: {
	id: string;
	name: string;
	commandFn: Command;
}[] = [
		{
			id: "select-cursor-up",
			name: "Select cursor up",
			commandFn: selectLineUp,
		},
		{
			id: "select-cursor-down",
			name: "Select cursor down",
			commandFn: selectLineDown,
		},
		{
			id: "select-cursor-left",
			name: "Select cursor left",
			commandFn: selectCharLeft,
		},
		{
			id: "select-cursor-right",
			name: "Select cursor right",
			commandFn: selectCharRight,
		},
		{
			id: "select-cursor-left-end",
			name: "Select cursor left end",
			commandFn: selectLineBoundaryLeft,
		},
		{
			id: "select-cursor-right-end",
			name: "Select cursor right end",
			commandFn: selectLineBoundaryRight,
		},
	];
