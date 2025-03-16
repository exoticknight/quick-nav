import type { Modifier } from "obsidian";
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
			id: "quick-nav-move-cursor-up",
			name: "Move Cursor Up",
			commandFn: cursorLineUp,
		},
		{
			id: "quick-nav-move-cursor-down",
			name: "Move Cursor Down",
			commandFn: cursorLineDown,
		},
		{
			id: "quick-nav-move-cursor-left",
			name: "Move Cursor Left",
			commandFn: cursorCharLeft,
		},
		{
			id: "quick-nav-move-cursor-right",
			name: "Move Cursor Right",
			commandFn: cursorCharRight,
		},
		{
			id: "quick-nav-move-cursor-page-up",
			name: "Move Cursor Page Up",
			commandFn: cursorPageUp,
		},
		{
			id: "quick-nav-move-cursor-page-down",
			name: "Move Cursor Page Down",
			commandFn: cursorPageDown,
		},
		{
			id: "quick-nav-move-cursor-left-end",
			name: "Move Cursor Left End",
			commandFn: cursorLineBoundaryLeft,
		},
		{
			id: "quick-nav-move-cursor-right-end",
			name: "Move Cursor Right End",
			commandFn: cursorLineBoundaryRight,
		},
	];
