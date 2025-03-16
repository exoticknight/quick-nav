import type { Modifier } from "obsidian";
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
			id: "quick-nav-select-cursor-up",
			name: "Select Cursor Up",
			commandFn: selectLineUp,
		},
		{
			id: "quick-nav-select-cursor-down",
			name: "Select Cursor Down",
			commandFn: selectLineDown,
		},
		{
			id: "quick-nav-select-cursor-left",
			name: "Select Cursor Left",
			commandFn: selectCharLeft,
		},
		{
			id: "quick-nav-select-cursor-right",
			name: "Select Cursor Right",
			commandFn: selectCharRight,
		},
		{
			id: "quick-nav-select-cursor-left-end",
			name: "Select Cursor Left End",
			commandFn: selectLineBoundaryLeft,
		},
		{
			id: "quick-nav-select-cursor-right-end",
			name: "Select Cursor Right End",
			commandFn: selectLineBoundaryRight,
		},
	];
